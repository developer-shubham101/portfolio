// ============ TETRIC_PROTOCOL ENGINE ============
(function () {
  const COLS = 10, ROWS = 20;
  const HS_KEY = 'tetric_highscore';

  const COLORS = [
    '',
    '#00d4ff','#ffcc00','#bf5fff','#ff8c00',
    '#00ff41','#ff3b3b','#00ffff','#ff69b4','#7fff00','#ff4500',
  ];

  const PIECES = [
    null,
    [[1,1,1,1]],
    [[2,2],[2,2]],
    [[0,3,0],[3,3,3]],
    [[4,0],[4,0],[4,4]],
    [[0,5],[0,5],[5,5]],
    [[6,6,0],[0,6,6]],
    [[0,7,7],[7,7,0]],
    [[0,8,0],[8,8,8],[0,8,0]],
    [[9,0,9],[9,9,9]],
    [[10,10],[10,0],[10,0]],
  ];

  // dynamic block size — set by resizeCanvas()
  let BLOCK = 20;

  let board, pieceX, pieceY, pieceType, nextType;
  let score, highScore, level, lines, running, paused, raf, lastTime, dropInterval;
  let flashRows = [], flashAlpha = 0, flashing = false;
  let gameOverAnim = false;

  // touch
  let touchStartX = 0, touchStartY = 0, touchLastX = 0, touchMoved = false;
  const SWIPE_X = 14, SWIPE_Y = 30;

  // ── canvas sizing ──
  function resizeCanvas() {
    const canvas = document.getElementById('t-board');
    const area   = document.querySelector('.game-area');
    if (!canvas || !area) return;

    const aW = area.clientWidth  - 12;
    const aH = area.clientHeight - 12;

    // fit COLS×ROWS grid into available area
    const blockW = Math.floor(aW / COLS);
    const blockH = Math.floor(aH / ROWS);
    BLOCK = Math.max(14, Math.min(blockW, blockH));

    canvas.width  = COLS * BLOCK;
    canvas.height = ROWS * BLOCK;

    // also resize next-piece canvas proportionally
    const nextSize = BLOCK * 4;
    const nextCanvas = document.getElementById('t-next');
    if (nextCanvas) { nextCanvas.width = nextSize; nextCanvas.height = nextSize; }
  }

  // ── helpers ──
  function newBoard() { return Array.from({ length: ROWS }, () => new Array(COLS).fill(0)); }
  function randomType() { return Math.floor(Math.random() * (PIECES.length - 1)) + 1; }
  function getShape(t) { return PIECES[t].map(r => [...r]); }
  function rotate(s)   { return s[0].map((_, i) => s.map(r => r[i]).reverse()); }

  function valid(b, s, x, y) {
    for (let r = 0; r < s.length; r++)
      for (let c = 0; c < s[r].length; c++)
        if (s[r][c]) {
          const nr = r + y, nc = c + x;
          if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || b[nr][nc]) return false;
        }
    return true;
  }

  // ── game logic ──
  function lock() {
    getShape(pieceType).forEach((row, r) =>
      row.forEach((v, c) => { if (v) board[r + pieceY][c + pieceX] = pieceType; })
    );
    findAndFlashLines();
  }

  function findAndFlashLines() {
    flashRows = board.reduce((a, row, i) => { if (row.every(v => v)) a.push(i); return a; }, []);
    if (flashRows.length) { flashing = true; flashAlpha = 1; animateFlash(); }
    else spawnPiece();
  }

  function animateFlash() {
    flashAlpha -= 0.07;
    if (flashAlpha <= 0) { flashing = false; commitClear(); return; }
    const canvas = document.getElementById('t-board');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    drawBoard(ctx);
    flashRows.forEach(r => {
      ctx.fillStyle = `rgba(255,255,255,${flashAlpha * 0.85})`;
      ctx.fillRect(0, r * BLOCK, COLS * BLOCK, BLOCK);
      ctx.fillStyle = `rgba(0,212,255,${flashAlpha})`;
      ctx.fillRect(0, r * BLOCK, COLS * BLOCK, 2);
      ctx.fillRect(0, r * BLOCK + BLOCK - 2, COLS * BLOCK, 2);
    });
    requestAnimationFrame(animateFlash);
  }

  function commitClear() {
    const cleared = flashRows.length;
    flashRows.slice().reverse().forEach(r => { board.splice(r, 1); board.unshift(new Array(COLS).fill(0)); });
    const pts = [0, 100, 300, 500, 800];
    score += (pts[cleared] || 800) * level;
    lines += cleared;
    level = Math.floor(lines / 10) + 1;
    dropInterval = Math.max(100, 1000 - (level - 1) * 90);
    saveHighScore();
    updateHUD();
    spawnPiece();
  }

  function saveHighScore() {
    if (score > highScore) {
      highScore = score;
      localStorage.setItem(HS_KEY, highScore);
      const el = document.getElementById('t-best');
      if (el) {
        el.textContent = highScore;
        el.classList.add('t-new-best');
        setTimeout(() => el.classList.remove('t-new-best'), 1000);
      }
    }
  }

  function loadHighScore() {
    highScore = parseInt(localStorage.getItem(HS_KEY) || '0', 10);
    const el = document.getElementById('t-best');
    if (el) el.textContent = highScore;
  }

  function spawnPiece() {
    pieceType = nextType;
    nextType  = randomType();
    pieceX = Math.floor(COLS / 2) - Math.floor(getShape(pieceType)[0].length / 2);
    pieceY = 0;
    if (!valid(board, getShape(pieceType), pieceX, pieceY)) { gameOver(); return; }
    drawNext();
    if (!flashing) { lastTime = 0; raf = requestAnimationFrame(loop); }
  }

  // ── drawing ──
  function drawScifiBlock(ctx, c, r, type, alpha) {
    const x = c * BLOCK, y = r * BLOCK, S = BLOCK - 1, color = COLORS[type];
    ctx.globalAlpha = alpha !== undefined ? alpha : 1;

    ctx.fillStyle = 'rgba(5,8,10,0.88)';
    ctx.fillRect(x + 1, y + 1, S - 1, S - 1);

    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1, BLOCK / 16);
    ctx.strokeRect(x + 1.5, y + 1.5, S - 2, S - 2);

    // corner brackets — scale with block size
    const B = Math.max(3, Math.floor(BLOCK * 0.22));
    ctx.lineWidth = Math.max(0.8, BLOCK / 20);
    ctx.strokeStyle = color;
    ctx.beginPath(); ctx.moveTo(x+2, y+2+B); ctx.lineTo(x+2, y+2); ctx.lineTo(x+2+B, y+2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x+S-1-B, y+2); ctx.lineTo(x+S-1, y+2); ctx.lineTo(x+S-1, y+2+B); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x+2, y+S-1-B); ctx.lineTo(x+2, y+S-1); ctx.lineTo(x+2+B, y+S-1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x+S-1-B, y+S-1); ctx.lineTo(x+S-1, y+S-1); ctx.lineTo(x+S-1, y+S-1-B); ctx.stroke();

    // center dot
    ctx.fillStyle = color;
    ctx.globalAlpha = (alpha !== undefined ? alpha : 1) * 0.55;
    ctx.beginPath();
    ctx.arc(x + BLOCK / 2, y + BLOCK / 2, Math.max(1, BLOCK / 12), 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
  }

  function drawBoard(ctx) {
    ctx.fillStyle = '#05080a';
    ctx.fillRect(0, 0, COLS * BLOCK, ROWS * BLOCK);
    ctx.strokeStyle = 'rgba(0,212,255,0.04)';
    ctx.lineWidth = 0.5;
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        ctx.strokeRect(c * BLOCK, r * BLOCK, BLOCK, BLOCK);
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        if (board[r][c]) drawScifiBlock(ctx, c, r, board[r][c]);
  }

  function drawPiece(ctx) {
    if (!running || flashing) return;
    const shape = getShape(pieceType);
    let ghostY = pieceY;
    while (valid(board, shape, pieceX, ghostY + 1)) ghostY++;
    if (ghostY !== pieceY)
      shape.forEach((row, r) => row.forEach((v, c) => { if (v) drawScifiBlock(ctx, pieceX+c, ghostY+r, pieceType, 0.18); }));
    shape.forEach((row, r) => row.forEach((v, c) => { if (v) drawScifiBlock(ctx, pieceX+c, pieceY+r, pieceType); }));
  }

  function drawNext() {
    const canvas = document.getElementById('t-next');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#05080a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const shape = getShape(nextType);
    const offX = Math.floor((4 - shape[0].length) / 2);
    const offY = Math.floor((4 - shape.length) / 2);
    shape.forEach((row, r) => row.forEach((v, c) => { if (v) drawScifiBlock(ctx, offX+c, offY+r, nextType); }));
  }

  // ── game over overlay ──
  function gameOver() {
    running = false;
    saveHighScore();
    gameOverAnim = true;
    let alpha = 0;
    const canvas = document.getElementById('t-board');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height, cx = W/2, cy = H/2;
    const bx = W*0.08, by = cy - H*0.14, bw = W*0.84, bh = H*0.28, cb = 8;
    const fs = Math.max(8, Math.floor(BLOCK * 0.55));

    function drawOverlay() {
      alpha = Math.min(1, alpha + 0.04);
      drawBoard(ctx);
      ctx.fillStyle = `rgba(0,0,0,${alpha * 0.82})`; ctx.fillRect(0,0,W,H);
      ctx.fillStyle = `rgba(0,212,255,${alpha*0.12})`; ctx.fillRect(0, (Date.now()/8)%H, W, 2);
      ctx.strokeStyle = `rgba(255,59,59,${alpha})`; ctx.lineWidth=1; ctx.strokeRect(bx,by,bw,bh);
      ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
      [[bx,by],[bx+bw,by],[bx,by+bh],[bx+bw,by+bh]].forEach(([px,py],i)=>{
        const sx=i%2===0?1:-1,sy=i<2?1:-1;
        ctx.beginPath();ctx.moveTo(px,py+sy*cb);ctx.lineTo(px,py);ctx.lineTo(px+sx*cb,py);ctx.stroke();
      });
      ctx.textAlign='center';
      ctx.font=`${Math.floor(alpha*fs*0.7)}px Rajdhani`; ctx.fillStyle=`rgba(255,59,59,${alpha*0.6})`; ctx.fillText('// SYSTEM_FAILURE //',cx,by+fs);
      ctx.font=`bold ${Math.floor(alpha*fs*1.6)}px Rajdhani`; ctx.fillStyle=`rgba(255,59,59,${alpha})`; ctx.fillText('GAME OVER',cx,cy-fs*0.3);
      ctx.font=`${Math.floor(alpha*fs)}px Rajdhani`; ctx.fillStyle=`rgba(255,204,0,${alpha})`; ctx.fillText('SCORE: '+score,cx,cy+fs*1.1);
      ctx.fillStyle=`rgba(0,212,255,${alpha})`; ctx.fillText('BEST:  '+highScore,cx,cy+fs*2.2);
      ctx.font=`${Math.floor(alpha*fs*0.65)}px Rajdhani`; ctx.fillStyle=`rgba(0,212,255,${alpha*0.5})`; ctx.fillText('[ TAP START TO REINITIALIZE ]',cx,by+bh-fs*0.5);
      if (alpha < 1) requestAnimationFrame(drawOverlay); else keepScan();
    }

    function keepScan() {
      if (!gameOverAnim) return;
      drawBoard(ctx);
      ctx.fillStyle='rgba(0,0,0,0.82)'; ctx.fillRect(0,0,W,H);
      ctx.fillStyle='rgba(0,212,255,0.12)'; ctx.fillRect(0,(Date.now()/8)%H,W,2);
      ctx.strokeStyle='rgba(255,59,59,1)'; ctx.lineWidth=1; ctx.strokeRect(bx,by,bw,bh);
      ctx.strokeStyle='rgba(0,212,255,1)';
      [[bx,by],[bx+bw,by],[bx,by+bh],[bx+bw,by+bh]].forEach(([px,py],i)=>{
        const sx=i%2===0?1:-1,sy=i<2?1:-1;
        ctx.beginPath();ctx.moveTo(px,py+sy*cb);ctx.lineTo(px,py);ctx.lineTo(px+sx*cb,py);ctx.stroke();
      });
      ctx.textAlign='center';
      ctx.font=`${Math.floor(fs*0.7)}px Rajdhani`; ctx.fillStyle='rgba(255,59,59,0.6)'; ctx.fillText('// SYSTEM_FAILURE //',cx,by+fs);
      ctx.font=`bold ${Math.floor(fs*1.6)}px Rajdhani`; ctx.fillStyle='#ff3b3b'; ctx.fillText('GAME OVER',cx,cy-fs*0.3);
      ctx.font=`${fs}px Rajdhani`; ctx.fillStyle='#ffcc00'; ctx.fillText('SCORE: '+score,cx,cy+fs*1.1);
      ctx.fillStyle='#00d4ff'; ctx.fillText('BEST:  '+highScore,cx,cy+fs*2.2);
      ctx.font=`${Math.floor(fs*0.65)}px Rajdhani`; ctx.fillStyle='rgba(0,212,255,0.5)'; ctx.fillText('[ TAP START TO REINITIALIZE ]',cx,by+bh-fs*0.5);
      requestAnimationFrame(keepScan);
    }

    requestAnimationFrame(drawOverlay);
  }

  function updateHUD() {
    const s=document.getElementById('t-score'), l=document.getElementById('t-level'),
          ln=document.getElementById('t-lines'), b=document.getElementById('t-best');
    if(s) s.textContent=score; if(l) l.textContent=level;
    if(ln) ln.textContent=lines; if(b) b.textContent=highScore;
  }

  // ── game loop ──
  function loop(ts) {
    if (!running || paused || flashing) return;
    const canvas = document.getElementById('t-board');
    if (!canvas) { running=false; return; }
    const ctx = canvas.getContext('2d');
    if (ts - lastTime > dropInterval) {
      if (valid(board, getShape(pieceType), pieceX, pieceY+1)) pieceY++;
      else lock();
      lastTime = ts;
    }
    drawBoard(ctx); drawPiece(ctx);
    raf = requestAnimationFrame(loop);
  }

  function startGame() {
    cancelAnimationFrame(raf);
    gameOverAnim = false;
    resizeCanvas();
    board = newBoard();
    score=0; level=1; lines=0; dropInterval=1000;
    flashing=false; flashRows=[];
    loadHighScore();
    nextType = randomType();
    running=true; paused=false; lastTime=0;
    document.getElementById('t-pause').textContent = 'PAUSE';
    updateHUD();
    spawnPiece();
  }

  // ── touch on canvas ──
  function bindTouch(canvas) {
    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      touchStartX = touchLastX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchMoved = false;
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      if (!running || paused || flashing) return;
      const dx = e.touches[0].clientX - touchLastX;
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dx) >= SWIPE_X) {
        if (dx > 0 && valid(board, getShape(pieceType), pieceX+1, pieceY)) pieceX++;
        if (dx < 0 && valid(board, getShape(pieceType), pieceX-1, pieceY)) pieceX--;
        touchLastX = e.touches[0].clientX; touchMoved = true;
      }
      if (dy > SWIPE_Y) {
        if (valid(board, getShape(pieceType), pieceX, pieceY+1)) { pieceY++; score++; updateHUD(); }
        touchStartY = e.touches[0].clientY; touchMoved = true;
      }
    }, { passive: false });

    canvas.addEventListener('touchend', e => {
      e.preventDefault();
      if (!running || paused || flashing) return;
      const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (!touchMoved && dx < 12 && Math.abs(dy) < 12) {
        const rot = rotate(getShape(pieceType));
        if (valid(board, rot, pieceX, pieceY)) PIECES[pieceType] = rot;
      }
      if (dy > SWIPE_Y * 2.5 && !touchMoved) {
        while (valid(board, getShape(pieceType), pieceX, pieceY+1)) { pieceY++; score+=2; }
        lock(); updateHUD();
      }
    }, { passive: false });
  }

  // ── hold-to-repeat: fires immediately on press, repeats while held ──
  function bindHold(id, action, delay, interval) {
    delay    = delay    || 180;
    interval = interval || 80;
    const el = document.getElementById(id);
    if (!el) return;
    let holdTimer = null, repeatTimer = null;

    function start(e) {
      e.preventDefault();
      action();
      holdTimer = setTimeout(() => { repeatTimer = setInterval(action, interval); }, delay);
    }
    function stop(e) {
      e.preventDefault();
      clearTimeout(holdTimer); clearInterval(repeatTimer);
      holdTimer = repeatTimer = null;
    }

    // mouse
    el.addEventListener('mousedown',  start);
    el.addEventListener('mouseup',    stop);
    el.addEventListener('mouseleave', stop);

    // touch
    el.addEventListener('touchstart',  e => { e.preventDefault(); start(e); }, { passive: false });
    el.addEventListener('touchend',    e => { e.preventDefault(); stop(e);  }, { passive: false });
    el.addEventListener('touchcancel', e => { e.preventDefault(); stop(e);  }, { passive: false });
  }

  // ── single-fire ──
  function bindClick(id, action) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('mousedown',  e => { e.preventDefault(); action(); });
    el.addEventListener('touchstart', e => { e.preventDefault(); action(); }, { passive: false });
  }

  // ── init ──
  function init() {
    resizeCanvas();
    loadHighScore();

    // single-fire
    bindClick('t-start', startGame);
    bindClick('t-pause', () => {
      if (!running) return;
      paused = !paused;
      document.getElementById('t-pause').textContent = paused ? 'RESUME' : 'SELECT';
      if (!paused) { lastTime = 0; raf = requestAnimationFrame(loop); }
    });

    // rotate - hold to repeat (↑ on dpad)
    const doRotate = () => {
      if (!running || paused || flashing) return;
      const rot = rotate(getShape(pieceType));
      if (valid(board, rot, pieceX, pieceY)) PIECES[pieceType] = rot;
    };
    bindHold('t-rotate',    doRotate, 200, 150);
    bindClick('t-rotate-ab', doRotate);

    // hard drop - single fire
    bindClick('t-drop', () => {
      if (!running || paused || flashing) return;
      while (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score += 2; }
      lock(); updateHUD();
    });

    // hold-to-repeat: left, right, down
    bindHold('t-left',  () => { if (running && !paused && !flashing && valid(board, getShape(pieceType), pieceX - 1, pieceY)) pieceX--; });
    bindHold('t-right', () => { if (running && !paused && !flashing && valid(board, getShape(pieceType), pieceX + 1, pieceY)) pieceX++; });
    bindHold('t-down',  () => { if (running && !paused && !flashing && valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score++; updateHUD(); } }, 150, 60);

    bindTouch(document.getElementById('t-board'));

    // keyboard
    document.addEventListener('keydown', e => {
      if (!running || paused || flashing) return;
      if      (e.code === 'ArrowLeft')  { if (valid(board, getShape(pieceType), pieceX - 1, pieceY)) pieceX--; }
      else if (e.code === 'ArrowRight') { if (valid(board, getShape(pieceType), pieceX + 1, pieceY)) pieceX++; }
      else if (e.code === 'ArrowDown')  { if (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score++; updateHUD(); } }
      else if (e.code === 'ArrowUp')    { const rot = rotate(getShape(pieceType)); if (valid(board, rot, pieceX, pieceY)) PIECES[pieceType] = rot; }
      else if (e.code === 'Space')      { e.preventDefault(); while (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score += 2; } lock(); updateHUD(); }
    });

    // resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      const canvas = document.getElementById('t-board');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      drawBoard(ctx);
      if (running && !flashing) drawPiece(ctx);
    });
  }

  window.onload = init;
})();
