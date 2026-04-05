// ============ TETRIC_PROTOCOL ENGINE ============
(function () {
  const COLS = 10, ROWS = 20, BLOCK = 20;
  const HS_KEY = 'tetric_highscore';

  const COLORS = [
    '',
    '#00d4ff', // I
    '#ffcc00', // O
    '#bf5fff', // T
    '#ff8c00', // L
    '#00ff41', // J
    '#ff3b3b', // S
    '#00ffff', // Z
    '#ff69b4', // +
    '#7fff00', // U
    '#ff4500', // Corner
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

  let board, pieceX, pieceY, pieceType, nextType;
  let score, highScore, level, lines, running, paused, raf, lastTime, dropInterval;
  let flashRows = [], flashAlpha = 0, flashing = false;
  let gameOverAlpha = 0, gameOverAnim = false;

  // touch state
  let touchStartX = 0, touchStartY = 0, touchLastX = 0, touchMoved = false;
  const SWIPE_X = 18, SWIPE_Y = 40;

  function newBoard() {
    return Array.from({ length: ROWS }, () => new Array(COLS).fill(0));
  }
  function randomType() { return Math.floor(Math.random() * (PIECES.length - 1)) + 1; }
  function getShape(t) { return PIECES[t].map(r => [...r]); }
  function rotate(s) { return s[0].map((_, i) => s.map(r => r[i]).reverse()); }

  function valid(b, s, x, y) {
    for (let r = 0; r < s.length; r++)
      for (let c = 0; c < s[r].length; c++)
        if (s[r][c]) {
          const nr = r + y, nc = c + x;
          if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || b[nr][nc]) return false;
        }
    return true;
  }

  function lock() {
    getShape(pieceType).forEach((row, r) =>
      row.forEach((v, c) => { if (v) board[r + pieceY][c + pieceX] = pieceType; })
    );
    findAndFlashLines();
  }

  function findAndFlashLines() {
    flashRows = board.reduce((acc, row, i) => { if (row.every(v => v)) acc.push(i); return acc; }, []);
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
      // white sweep
      ctx.fillStyle = `rgba(255,255,255,${flashAlpha * 0.85})`;
      ctx.fillRect(0, r * BLOCK, COLS * BLOCK, BLOCK);
      // cyan scan line
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
      if (el) { el.textContent = highScore; el.classList.add('t-new-best'); setTimeout(() => el.classList.remove('t-new-best'), 1000); }
    }
  }

  function loadHighScore() {
    highScore = parseInt(localStorage.getItem(HS_KEY) || '0', 10);
    const el = document.getElementById('t-best');
    if (el) el.textContent = highScore;
  }

  function spawnPiece() {
    pieceType = nextType;
    nextType = randomType();
    pieceX = Math.floor(COLS / 2) - Math.floor(getShape(pieceType)[0].length / 2);
    pieceY = 0;
    if (!valid(board, getShape(pieceType), pieceX, pieceY)) { gameOver(); return; }
    drawNext();
    if (!flashing) { lastTime = 0; raf = requestAnimationFrame(loop); }
  }

  // ── sci-fi block ──
  function drawScifiBlock(ctx, c, r, type, alpha) {
    const x = c * BLOCK, y = r * BLOCK;
    const S = BLOCK - 1;
    const color = COLORS[type];
    ctx.globalAlpha = alpha !== undefined ? alpha : 1;

    // dark fill
    ctx.fillStyle = 'rgba(5,8,10,0.85)';
    ctx.fillRect(x + 1, y + 1, S - 1, S - 1);

    // colored border glow
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x + 1.5, y + 1.5, S - 2, S - 2);

    // inner corner brackets (sci-fi detail)
    const B = 4; // bracket size
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    // top-left
    ctx.beginPath(); ctx.moveTo(x+3, y+3+B); ctx.lineTo(x+3, y+3); ctx.lineTo(x+3+B, y+3); ctx.stroke();
    // top-right
    ctx.beginPath(); ctx.moveTo(x+S-2-B, y+3); ctx.lineTo(x+S-2, y+3); ctx.lineTo(x+S-2, y+3+B); ctx.stroke();
    // bottom-left
    ctx.beginPath(); ctx.moveTo(x+3, y+S-2-B); ctx.lineTo(x+3, y+S-2); ctx.lineTo(x+3+B, y+S-2); ctx.stroke();
    // bottom-right
    ctx.beginPath(); ctx.moveTo(x+S-2-B, y+S-2); ctx.lineTo(x+S-2, y+S-2); ctx.lineTo(x+S-2, y+S-2-B); ctx.stroke();

    // center dot
    ctx.fillStyle = color;
    ctx.globalAlpha = (alpha !== undefined ? alpha : 1) * 0.6;
    ctx.beginPath();
    ctx.arc(x + BLOCK / 2, y + BLOCK / 2, 1.5, 0, Math.PI * 2);
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
      shape.forEach((row, r) => row.forEach((v, c) => { if (v) drawScifiBlock(ctx, pieceX + c, ghostY + r, pieceType, 0.2); }));
    shape.forEach((row, r) => row.forEach((v, c) => { if (v) drawScifiBlock(ctx, pieceX + c, pieceY + r, pieceType); }));
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
    shape.forEach((row, r) => row.forEach((v, c) => { if (v) drawScifiBlock(ctx, offX + c, offY + r, nextType); }));
  }

  // ── animated game over overlay ──
  function gameOver() {
    running = false;
    saveHighScore();
    gameOverAlpha = 0;
    gameOverAnim = true;
    animateGameOver();
  }

  function animateGameOver() {
    if (!gameOverAnim) return;
    gameOverAlpha = Math.min(1, gameOverAlpha + 0.04);
    const canvas = document.getElementById('t-board');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2;

    drawBoard(ctx);

    // dark overlay
    ctx.fillStyle = `rgba(0,0,0,${gameOverAlpha * 0.82})`;
    ctx.fillRect(0, 0, W, H);

    // animated scan line sweeping down
    const scanY = ((Date.now() / 8) % H);
    ctx.fillStyle = `rgba(0,212,255,${gameOverAlpha * 0.15})`;
    ctx.fillRect(0, scanY, W, 2);

    // border box
    const bx = 20, by = cy - 55, bw = W - 40, bh = 110;
    ctx.strokeStyle = `rgba(255,59,59,${gameOverAlpha})`;
    ctx.lineWidth = 1;
    ctx.strokeRect(bx, by, bw, bh);
    // corner brackets on box
    const cb = 8;
    ctx.strokeStyle = `rgba(0,212,255,${gameOverAlpha})`;
    [[bx,by],[bx+bw,by],[bx,by+bh],[bx+bw,by+bh]].forEach(([px,py], i) => {
      const sx = i % 2 === 0 ? 1 : -1, sy = i < 2 ? 1 : -1;
      ctx.beginPath(); ctx.moveTo(px, py + sy*cb); ctx.lineTo(px, py); ctx.lineTo(px + sx*cb, py); ctx.stroke();
    });

    ctx.textAlign = 'center';

    // SYSTEM_FAILURE label
    ctx.font = `${Math.floor(gameOverAlpha * 9)}px Rajdhani`;
    ctx.fillStyle = `rgba(255,59,59,${gameOverAlpha * 0.6})`;
    ctx.fillText('// SYSTEM_FAILURE //', cx, by + 18);

    // GAME OVER
    ctx.font = `bold ${Math.floor(gameOverAlpha * 22)}px Rajdhani`;
    ctx.fillStyle = `rgba(255,59,59,${gameOverAlpha})`;
    ctx.fillText('GAME OVER', cx, cy - 8);

    // score lines
    ctx.font = `${Math.floor(gameOverAlpha * 12)}px Rajdhani`;
    ctx.fillStyle = `rgba(255,204,0,${gameOverAlpha})`;
    ctx.fillText('SCORE: ' + score, cx, cy + 14);
    ctx.fillStyle = `rgba(0,212,255,${gameOverAlpha})`;
    ctx.fillText('BEST:  ' + highScore, cx, cy + 30);

    // restart hint
    ctx.font = `${Math.floor(gameOverAlpha * 9)}px Rajdhani`;
    ctx.fillStyle = `rgba(0,212,255,${gameOverAlpha * 0.5})`;
    ctx.fillText('[ PRESS START TO REINITIALIZE ]', cx, by + bh - 10);

    if (gameOverAlpha < 1) requestAnimationFrame(animateGameOver);
    else {
      // keep redrawing scan line after fully shown
      requestAnimationFrame(function keepScan() {
        if (!gameOverAnim) return;
        drawBoard(ctx);
        ctx.fillStyle = 'rgba(0,0,0,0.82)';
        ctx.fillRect(0, 0, W, H);
        const sy2 = ((Date.now() / 8) % H);
        ctx.fillStyle = 'rgba(0,212,255,0.12)';
        ctx.fillRect(0, sy2, W, 2);
        ctx.strokeStyle = 'rgba(255,59,59,1)'; ctx.lineWidth = 1; ctx.strokeRect(bx, by, bw, bh);
        ctx.strokeStyle = 'rgba(0,212,255,1)';
        [[bx,by],[bx+bw,by],[bx,by+bh],[bx+bw,by+bh]].forEach(([px,py], i) => {
          const sx = i%2===0?1:-1, sy = i<2?1:-1;
          ctx.beginPath(); ctx.moveTo(px, py+sy*cb); ctx.lineTo(px,py); ctx.lineTo(px+sx*cb,py); ctx.stroke();
        });
        ctx.textAlign = 'center';
        ctx.font = '9px Rajdhani'; ctx.fillStyle = 'rgba(255,59,59,0.6)'; ctx.fillText('// SYSTEM_FAILURE //', cx, by+18);
        ctx.font = 'bold 22px Rajdhani'; ctx.fillStyle = '#ff3b3b'; ctx.fillText('GAME OVER', cx, cy-8);
        ctx.font = '12px Rajdhani'; ctx.fillStyle = '#ffcc00'; ctx.fillText('SCORE: '+score, cx, cy+14);
        ctx.fillStyle = '#00d4ff'; ctx.fillText('BEST:  '+highScore, cx, cy+30);
        ctx.font = '9px Rajdhani'; ctx.fillStyle = 'rgba(0,212,255,0.5)'; ctx.fillText('[ PRESS START TO REINITIALIZE ]', cx, by+bh-10);
        requestAnimationFrame(keepScan);
      });
    }
  }

  function updateHUD() {
    const s = document.getElementById('t-score'), l = document.getElementById('t-level'),
          ln = document.getElementById('t-lines'), b = document.getElementById('t-best');
    if (s) s.textContent = score;
    if (l) l.textContent = level;
    if (ln) ln.textContent = lines;
    if (b) b.textContent = highScore;
  }

  function loop(ts) {
    if (!running || paused || flashing) return;
    const canvas = document.getElementById('t-board');
    if (!canvas) { running = false; return; }
    const ctx = canvas.getContext('2d');
    if (ts - lastTime > dropInterval) {
      if (valid(board, getShape(pieceType), pieceX, pieceY + 1)) pieceY++;
      else lock();
      lastTime = ts;
    }
    drawBoard(ctx);
    drawPiece(ctx);
    raf = requestAnimationFrame(loop);
  }

  function startGame() {
    cancelAnimationFrame(raf);
    gameOverAnim = false;
    board = newBoard();
    score = 0; level = 1; lines = 0; dropInterval = 1000;
    flashing = false; flashRows = [];
    loadHighScore();
    nextType = randomType();
    running = true; paused = false;
    lastTime = 0;
    document.getElementById('t-pause').textContent = 'PAUSE';
    updateHUD();
    spawnPiece();
  }

  // ── touch ──
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
        if (dx > 0 && valid(board, getShape(pieceType), pieceX + 1, pieceY)) pieceX++;
        if (dx < 0 && valid(board, getShape(pieceType), pieceX - 1, pieceY)) pieceX--;
        touchLastX = e.touches[0].clientX; touchMoved = true;
      }
      if (dy > SWIPE_Y) {
        if (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score++; updateHUD(); }
        touchStartY = e.touches[0].clientY; touchMoved = true;
      }
    }, { passive: false });

    canvas.addEventListener('touchend', e => {
      e.preventDefault();
      if (!running || paused || flashing) return;
      const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (!touchMoved && dx < 10 && Math.abs(dy) < 10) {
        const rot = rotate(getShape(pieceType));
        if (valid(board, rot, pieceX, pieceY)) PIECES[pieceType] = rot;
      }
      if (dy > SWIPE_Y * 2 && !touchMoved) {
        while (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score += 2; }
        lock(); updateHUD();
      }
    }, { passive: false });
  }

  function bindControls() {
    loadHighScore();
    document.getElementById('t-start').onclick = startGame;
    document.getElementById('t-pause').onclick = () => {
      if (!running) return;
      paused = !paused;
      document.getElementById('t-pause').textContent = paused ? 'RESUME' : 'PAUSE';
      if (!paused) { lastTime = 0; raf = requestAnimationFrame(loop); }
    };
    document.getElementById('t-left').onclick   = () => { if (running && !paused && !flashing && valid(board, getShape(pieceType), pieceX-1, pieceY)) pieceX--; };
    document.getElementById('t-right').onclick  = () => { if (running && !paused && !flashing && valid(board, getShape(pieceType), pieceX+1, pieceY)) pieceX++; };
    document.getElementById('t-down').onclick   = () => { if (running && !paused && !flashing && valid(board, getShape(pieceType), pieceX, pieceY+1)) { pieceY++; score++; updateHUD(); } };
    document.getElementById('t-rotate').onclick = () => { if (!running||paused||flashing) return; const rot=rotate(getShape(pieceType)); if (valid(board,rot,pieceX,pieceY)) PIECES[pieceType]=rot; };
    document.getElementById('t-drop').onclick   = () => { if (!running||paused||flashing) return; while(valid(board,getShape(pieceType),pieceX,pieceY+1)){pieceY++;score+=2;} lock();updateHUD(); };
    const canvas = document.getElementById('t-board');
    if (canvas) bindTouch(canvas);
  }

  document.addEventListener('keydown', e => {
    if (!running || paused || flashing) return;
    if (!document.getElementById('t-board')) return;
    if      (e.code==='ArrowLeft')  { if (valid(board,getShape(pieceType),pieceX-1,pieceY)) pieceX--; }
    else if (e.code==='ArrowRight') { if (valid(board,getShape(pieceType),pieceX+1,pieceY)) pieceX++; }
    else if (e.code==='ArrowDown')  { if (valid(board,getShape(pieceType),pieceX,pieceY+1)) { pieceY++;score++;updateHUD(); } }
    else if (e.code==='ArrowUp')    { const rot=rotate(getShape(pieceType)); if (valid(board,rot,pieceX,pieceY)) PIECES[pieceType]=rot; }
    else if (e.code==='Space')      { e.preventDefault(); while(valid(board,getShape(pieceType),pieceX,pieceY+1)){pieceY++;score+=2;} lock();updateHUD(); }
  });

  const _orig = window.switchNode;
  window.switchNode = function (nodeKey) {
    _orig(nodeKey);
    if (nodeKey === 'tetris') {
      setTimeout(() => { if (document.getElementById('t-start')) bindControls(); }, 500);
    }
  };
})();
