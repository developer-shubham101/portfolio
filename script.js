const intelArchive = {
  card: {
    title: "Subject: SHARMA_SHARMA",
    body: `<div class="scifi-identity-card">
          <div class="id-photo-sector">
            <div class="photo-frame">
              <img src="image3A6317_Glitch.jpg" alt="Subject_S" class="subject-img">
              <div class="photo-glitch-overlay"></div>
              <div class="corner-bracket top-left"></div>
              <div class="corner-bracket bottom-right"></div>
            </div>
            <div class="status-bar">
              <span class="status-dot"></span> SUBJECT_ACTIVE
            </div>
          </div>
        
          <div class="id-info-sector">
            <div class="info-row">
              <span class="info-label">DESIGNATION:</span>
              <span class="info-value">SR_TECHNICAL_LEAD</span>
            </div>
            <div class="info-row">
              <span class="info-label">CLEARANCE:</span>
              <span class="info-value">LEVEL_09</span>
            </div>
            <div class="info-row">
              <span class="info-label">EXPERIENCE:</span>
              <span class="info-value">08_YRS_PLUS</span>
            </div>
            <div class="info-row">
              <span class="info-label">SPECIALIZATION:</span>
              <span class="info-value">DISTRIBUTED_SYSTEMS</span>
            </div>
            <div class="id-barcode">|||| || | ||||| | |||</div>
          </div>
        </div>`
  },
  profile: {
    title: "Subject: S.S.",
    body: `Technical Lead with 8+ years experience. Expert in high-load distributed systems and reactive architectures. Currently assigned to enterprise-level insurance data platforms.`
  },
  // Updated entry in script.js
  arsenal: {
    title: "TACTICAL_ARSENAL",
    body: `
        <div class="arsenal-grid">
            <div class="skill-category" onclick="openArsenalDetail('BACKEND')">
                <label class="category-label">BACKEND_SYSTEMS [DEEP_SCAN]</label>
                <div class="skill-tag">Java [Spring Boot] <span class="rating">98%</span></div>
                <div class="skill-tag">Microservices <span class="rating">94%</span></div>
                <div class="skill-tag">Redis / Caching <span class="rating">85%</span></div>
            </div>
            
            <div class="skill-category" onclick="openArsenalDetail('FRONTEND')">
                <label class="category-label">FRONTEND_INT [DEEP_SCAN]</label>
                <div class="skill-tag">React.js / TS <span class="rating">92%</span></div>
                <div class="skill-tag">Redux Toolkit <span class="rating">90%</span></div>
                <div class="skill-tag">Material UI <span class="rating">88%</span></div>
            </div>

            <div class="skill-category" onclick="openArsenalDetail('INFRA')">
                <label class="category-label">INFRA_PROTOCOL [DEEP_SCAN]</label>
                <div class="skill-tag">Docker / K8s <span class="rating">82%</span></div>
                <div class="skill-tag">AWS Cloud <span class="rating">80%</span></div>
                <div class="skill-tag">CI/CD Pipelines <span class="rating">88%</span></div>
            </div>
        </div>
    `
  },
  // Updated entry in script.js
  service: {
    title: "SERVICE_HISTORY",
    body: `
      <div class="transmission-log">
          <div class="log-segment" onclick="openServiceDetail('WIPRO')">
              <div class="segment-meta">NOV 2024 – PRESENT // [CLICK_FOR_INTEL]</div>
              <div class="segment-title">WIPRO_LTD [TECHNICAL_LEAD]</div>
              <div class="segment-details">Architecting insurance platforms for UnitedHealth Group...</div>
          </div>
          <div class="log-segment" onclick="openServiceDetail('PURESOFTWARE')">
              <div class="segment-meta">AUG 2022 – NOV 2024 // [CLICK_FOR_INTEL]</div>
              <div class="segment-title">PURESOFTWARE_PVT_LTD [SR. ENGINEER]</div>
              <div class="segment-details">Core contribution to Japfa Best. API latency reduction: 75%...</div>
          </div>
      </div>
  `
  },
  
  // Add to your intelArchive in script.js
  ops: {
    title: "ACTIVE_FIELD_OPERATIONS",
    body: `
      <div class="ops-grid">
          <div class="mission-folder" onclick="openOpsDetail('JAPFA')">
              <div class="mission-header">
                  <span class="mission-id">OP_JAPFA_BEST</span>
                  <span class="threat-level high">THREAT: HIGH</span>
              </div>
              <div class="mission-meta">OBJECTIVE: HYPERLOCAL_DISTRIBUTION_CORE</div>
              <div class="mission-status">STATUS: [STABLE]</div>
              <div class="mission-brief">Architected a multi-tenant logistics engine. Click for deep-scan...</div>
          </div>

          <div class="mission-folder" onclick="openOpsDetail('WINGI')">
              <div class="mission-header">
                  <span class="mission-id">OP_WINGI_MALL</span>
                  <span class="threat-level med">THREAT: MID</span>
              </div>
              <div class="mission-meta">OBJECTIVE: E-COMMERCE_TRANSCEIVER</div>
              <div class="mission-status">STATUS: [ARCHIVED]</div>
              <div class="mission-brief">Deployed high-load e-commerce platform. Click for deep-scan...</div>
          </div>

          <div class="mission-folder" onclick="openOpsDetail('GROHOOD')">
              <div class="mission-header">
                  <span class="mission-id">OP_GROHOOD_CORE</span>
                  <span class="threat-level high">THREAT: HIGH</span>
              </div>
              <div class="mission-meta">OBJECTIVE: COMMUNITY_LOGISTICS_SYNDICATE</div>
              <div class="mission-status">STATUS: [STABLE]</div>
              <div class="mission-brief">Engineered backend infrastructure for group buying. Click for deep-scan...</div>
          </div>
      </div>
  `
  }, 
  tetris: {
    title: "TACTICAL_GAMES // ARCADE_VAULT",
    body: `
      <div class="games-vault">
        <div class="vault-header">SELECT_SIMULATION</div>
        <div class="games-grid">
          <a href="games/tetris/index.html" class="game-card">
            <div class="game-card-icon">⬛</div>
            <div class="game-card-name">TETRIC_PROTOCOL</div>
            <div class="game-card-meta">BLOCK_STACKING // ACTIVE</div>
            <div class="game-card-status online">● ONLINE</div>
          </a>
          <div class="game-card locked">
            <div class="game-card-icon">🐍</div>
            <div class="game-card-name">SERPENT_MATRIX</div>
            <div class="game-card-meta">SNAKE_PROTOCOL // PENDING</div>
            <div class="game-card-status offline">◌ COMING_SOON</div>
          </div>
          <div class="game-card locked">
            <div class="game-card-icon">👾</div>
            <div class="game-card-name">XENON_INVADERS</div>
            <div class="game-card-meta">SPACE_COMBAT // PENDING</div>
            <div class="game-card-status offline">◌ COMING_SOON</div>
          </div>
          <div class="game-card locked">
            <div class="game-card-icon">🧱</div>
            <div class="game-card-name">BREACH_BREAKER</div>
            <div class="game-card-meta">BREAKOUT_SIM // PENDING</div>
            <div class="game-card-status offline">◌ COMING_SOON</div>
          </div>
        </div>
      </div>
    `
  },
  contact: {
    title: "COMM_UPLINK",
    body: `
        <div class="contact-interface">
            <div class="uplink-status">
                <span class="pulse-dot"></span> SECURE_LINE_READY
            </div>
            
            <div class="comm-grid">
                <div class="comm-channel">
                    <label>ENCRYPTED_VOICE</label>
                    <div class="channel-value">+91-XXXXXXXXXX</div>
                    <div class="channel-action">FREQUENCY: 142.08 MHz</div>
                </div>
                
                <div class="comm-channel">
                    <label>SECURE_MAIL</label>
                    <div class="channel-value">SK.SHUBHAMSHARMA95@GMAIL.COM</div>
                    <div class="channel-action">RSA_KEY: ACTIVE</div>
                </div>

                <div class="comm-channel full-width">
                    <label>COORDINATES</label>
                    <div class="channel-value">JAIPUR, RAJASTHAN // INDIA_SECTOR</div>
                    <div class="channel-action">LOCAL_TIME: <span id="local-time">--:--:--</span></div>
                </div>
            </div>

            <div class="terminal-burst">
                <label>DATA_BURST_MESSAGE</label>
                <textarea placeholder="ENTER_TRANSMISSION..." class="burst-input"></textarea>
                <button class="send-btn" onclick="triggerBurst()">SEND_PACKET</button>
            </div>
        </div>
    `
  }
};

const alienMap = "⏃⎅⎎⍀⍜⌖⏚⌰⏁⍙⟒⋏⍓⏁⏃⌰⍜⋏⟒";

// Add to script.js
function pingSkillMatrix() {
  const tags = document.querySelectorAll('.skill-tag');
  if (tags.length === 0) return;

  const randomTag = tags[Math.floor(Math.random() * tags.length)];
  const originalText = randomTag.innerHTML;

  // Briefly glitch the tag
  randomTag.style.borderColor = "var(--alien-gold)";
  randomTag.innerHTML = translateToAlien("SCANNING_DATA...");

  setTimeout(() => {
    randomTag.innerHTML = originalText;
    randomTag.style.borderColor = "transparent";
  }, 800);
}

// Only ping if the current node is 'arsenal'
setInterval(() => {
  const currentNode = document.querySelector('.nav-item.active').getAttribute('data-node');
  if (currentNode === 'arsenal') pingSkillMatrix();
}, 4000);




// Add to script.js
function flickerTransmissionStatus() {
  const metas = document.querySelectorAll('.segment-meta');
  if (metas.length === 0) return;

  const target = metas[Math.floor(Math.random() * metas.length)];
  const originalText = target.innerText;

  // Split text to target the status part (e.g., "DECRYPTED")
  if (originalText.includes('//')) {
    const parts = originalText.split(' // ');
    target.innerHTML = `${parts[0]} // <span class="alien-glyph">${translateToAlien(parts[1])}</span>`;

    setTimeout(() => {
      target.innerText = originalText;
    }, 150);
  }
}

setInterval(flickerTransmissionStatus, 3000);


// Add to script.js
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.log-segment')) {
    // Play subtle static sound if audio is enabled
    // if (audioEnabled) staticAudio.play();
    console.log("INTERCEPTING_SEGMENT_DATA...");
  }
});





// Add to script.js
function triggerBurst() {
    const btn = document.querySelector('.send-btn');
    const input = document.querySelector('.burst-input');
    
    if(!input.value) return;

    const originalText = btn.innerText;
    btn.innerText = "ENCRYPTING...";
    btn.style.borderColor = "var(--alien-gold)";
    btn.style.color = "var(--alien-gold)";

    // Simulate "Data Scrambling" before sending
    let scrambleTicks = 0;
    const scramble = setInterval(() => {
        input.value = translateToAlien(input.value);
        scrambleTicks++;
        if(scrambleTicks > 5) {
            clearInterval(scramble);
            btn.innerText = "TRANSMISSION_COMPLETE";
            input.value = "";
            input.placeholder = "SIGNAL_LOST... RE-ESTABLISHING...";
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.borderColor = "var(--stark-blue)";
                btn.style.color = "var(--stark-blue)";
                input.placeholder = "ENTER_TRANSMISSION...";
            }, 3000);
        }
    }, 150);
}

// Update Local Sector Time
setInterval(() => {
    const timeEl = document.getElementById('local-time');
    if(timeEl) {
        timeEl.innerText = new Date().toLocaleTimeString();
    }
}, 1000);







function init() {
  switchNode('card');
  generateXenonStream();
  setInterval(updateClock, 1000);
  // setInterval(addInterceptLog, 5000);


  // Add this to your script.js inside init()
  function simulateSignalSpike() {
    const log = document.getElementById('intercept-log');
    const entry = document.createElement('p');
    entry.className = 'log-entry alert'; // Add a CSS class for a momentary red flash
    entry.style.color = 'var(--alien-gold)';

    // A list of "detected" technologies
    const signals = ["SPRING_BOOT", "REACTIVE_FLUX", "AWS_S3", "DOCKER_CORE"];
    const detected = signals[Math.floor(Math.random() * signals.length)];

    entry.innerText = `> DETECTED_PATTERN: ${translateToAlien(detected)}`;
    log.prepend(entry);

    // After 2 seconds, "resolve" the signal to the human name
    setTimeout(() => {
      entry.innerText = `> DECODED: ${detected}`;
      entry.style.color = 'var(--stark-blue)';
    }, 2000);
  }

  // setInterval(simulateSignalSpike, 8000);

  
}
document.addEventListener('keydown', (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    const activeNode = document.querySelector('.nav-item.active').getAttribute('data-node');
    switchNode(activeNode); // Re-trigger the decoding animation
    console.log("SYSTEM_RESCAN_INITIATED");
  }
});
function switchNode(nodeKey) {
  // UI Updates
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-node="${nodeKey}"]`).classList.add('active');

  const node = intelArchive[nodeKey];
  const display = document.getElementById('content-display');
  const bar = document.querySelector('.loading-bar');

  // Reset Loading Bar
  bar.style.width = '0%';
  setTimeout(() => bar.style.width = '100%', 50);

  // Initial Alien Text (The "Decoding" Phase)
  display.innerHTML = `
        <h2 class="decoding">${translateToAlien(node.title)}</h2>
        <p>${translateToAlien(node.body)}</p>
    `;

  // Resolve to English
  setTimeout(() => {
    display.innerHTML = `
            <h2>${node.title}</h2>
            <p>${node.body}</p>
        `;
    document.getElementById('current-node').innerText = nodeKey.toUpperCase() + "_DATA";
  }, 400);
}

function translateToAlien(text) {
  return text.split('').map(char => {
    return Math.random() > 0.8 ? alienMap[Math.floor(Math.random() * alienMap.length)] : char;
  }).join('');
}

function generateXenonStream() {
  const stream = document.getElementById('xenon-stream');
  let content = "";
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 15; j++) {
      content += alienMap[Math.floor(Math.random() * alienMap.length)];
    }
    content += "\n";
  }
  stream.innerText = content;
}

function addInterceptLog() {
  const log = document.getElementById('intercept-log');
  const codes = ["DATA_FLUX", "SIG_INT", "CORE_SYNC", "XENON_RECV"];
  const entry = document.createElement('p');
  entry.className = 'log-entry';
  entry.innerHTML = `> ${codes[Math.floor(Math.random() * codes.length)]}: ${translateToAlien("0x445")}`;
  log.prepend(entry);
  if (log.childNodes.length > 5) log.lastChild.remove();
}

function updateClock() {
  const now = new Date();
  document.getElementById('clock').innerText = now.toTimeString().split(' ')[0];
  document.getElementById('signal-code').innerText = translateToAlien("XXX");
}

window.onload = init;





const serviceDetails = {
  'WIPRO': {
    title: "WIPRO_LTD // DETAILED_INTEL",
    content: "Detailed breakdown of UnitedHealth Group architecture: High-load microservices, Spring Boot integration, and leading a team of 10+ engineers through Agile sprints."
  },
  'PURESOFTWARE': {
    title: "PURESOFTWARE // DETAILED_INTEL",
    content: "Deep dive into Japfa Best: Optimized Redis caching layers, successfully handled 100k+ concurrent requests, and implemented secure Razorpay payment gateways."
  }
};

function openServiceDetail(companyKey) {
  const data = serviceDetails[companyKey];
  const modal = document.getElementById('data-modal');
  const content = document.getElementById('modal-body-content');

  content.innerHTML = `
        <h3 style="color:var(--alien-gold); margin-bottom:10px;">${data.title}</h3>
        <p>${data.content}</p>
    `;

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('data-modal').style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function (event) {
  const modal = document.getElementById('data-modal');
  if (event.target == modal) {
    closeModal();
  }
}




// Add these to your details registry in script.js
const opsDetails = {
  'JAPFA': {
    title: "OP_JAPFA_BEST // MISSION_DEBRIEF",
    content: `
            <ul style="list-style: none; padding: 0;">
                <li><strong>TECH_STACK:</strong> Java, Spring Boot, Redis, MySQL</li>
                <li><strong>ACHIEVEMENTS:</strong> 
                    <br>- Optimized API performance by 75% via strategic Redis caching.
                    <br>- Integrated Razorpay for seamless financial handshakes.
                    <br>- Managed real-time tracking for hyperlocal logistics nodes.
                </li>
            </ul>`
  },
  'WINGI': {
    title: "OP_WINGI_MALL // MISSION_DEBRIEF",
    content: `
            <ul style="list-style: none; padding: 0;">
                <li><strong>TECH_STACK:</strong> React.js, Node.js, AWS S3</li>
                <li><strong>ACHIEVEMENTS:</strong> 
                    <br>- Built an automated inventory transceiver.
                    <br>- Scaled platform to handle 50k+ active SKUs.
                    <br>- Implemented RSA-encrypted checkout protocols.
                </li>
            </ul>`
  },
  'GROHOOD': {
    title: "OP_GROHOOD_CORE // MISSION_DEBRIEF",
    content: `
            <ul style="list-style: none; padding: 0;">
                <li><strong>TECH_STACK:</strong> Microservices, Docker, Spring Cloud</li>
                <li><strong>ACHIEVEMENTS:</strong> 
                    <br>- Architected a community-based group buying engine.
                    <br>- Processed data packets for over 1M active user nodes.
                    <br>- Optimized database queries to reduce server load by 40%.
                </li>
            </ul>`
  }
};

// Generic function to handle both Service and Ops details
function openOpsDetail(opsKey) {
  const data = opsDetails[opsKey];
  const modal = document.getElementById('data-modal');
  const content = document.getElementById('modal-body-content');

  content.innerHTML = `
        <h3 style="color:var(--alien-gold); margin-bottom:15px; border-bottom: 1px solid var(--stark-blue-dim); padding-bottom: 10px;">
            ${data.title}
        </h3>
        <div style="font-family: 'Exo 2'; font-size: 0.95rem;">${data.content}</div>
    `;

  modal.style.display = 'flex';
}



const arsenalDetails = {
  'BACKEND': {
    title: "BACKEND_SYSTEMS // TECHNICAL_SPEC",
    content: `
            <div class="tech-sub-list">
                <p><strong>CORE_FRAMEWORKS:</strong> Spring Boot 3.x, Spring Cloud, Hibernate ORM</p>
                <p><strong>MESSAGING:</strong> Kafka, RabbitMQ (Asynchronous Data Streams)</p>
                <p><strong>DATABASE_SYNC:</strong> PostgreSQL, MongoDB, Cassandra optimization</p>
                <p><strong>SECURITY:</strong> OAuth2, JWT, Spring Security Biometrics</p>
            </div>`
  },
  'FRONTEND': {
    title: "FRONTEND_INTERFACE // UI_SPEC",
    content: `
            <div class="tech-sub-list">
                <p><strong>LIBRARIES:</strong> React 18 (Hooks/Context), Next.js</p>
                <p><strong>STATE:</strong> Redux Toolkit, React Query (TanStack)</p>
                <p><strong>STYLING:</strong> Styled Components, Tailwind CSS, Framer Motion</p>
                <p><strong>TESTING:</strong> Jest, Cypress (End-to-End Encryption)</p>
            </div>`
  },
  'INFRA': {
    title: "INFRA_PROTOCOL // DEPLOY_SPEC",
    content: `
            <div class="tech-sub-list">
                <p><strong>CONTAINERIZATION:</strong> Docker Multi-stage builds, Kubernetes Pod Management</p>
                <p><strong>CLOUD_OPS:</strong> AWS (EC2, S3, Lambda, RDS), Azure Fundamentals</p>
                <p><strong>AUTOMATION:</strong> Jenkins, GitHub Actions, Terraform (IaC)</p>
                <p><strong>MONITORING:</strong> Prometheus, Grafana, ELK Stack</p>
            </div>`
  }
};

// Function to trigger the Arsenal Popup
function openArsenalDetail(key) {
  const data = arsenalDetails[key];
  const modal = document.getElementById('data-modal');
  const content = document.getElementById('modal-body-content');

  content.innerHTML = `
        <h3 style="color:var(--stark-blue); margin-bottom:15px; text-shadow: 0 0 10px var(--stark-blue-dim);">
            ${data.title}
        </h3>
        <div class="modal-text-flow">${data.content}</div>
    `;

  modal.style.display = 'flex';
}










// --- SUBJECT_VISUAL_CORRUPTION_PROTOCOL ---
function triggerPhotoGlitch() {
  setInterval(() => {
    // Target the image within your new identity card
    const photo = document.querySelector('.subject-img');
    
    if (!photo) return; // Silent skip if card isn't currently rendered

    // Random chance for a visual "hiccup"
    if (Math.random() > 0.5) {
      // 1. INITIATE CORRUPTION
      photo.style.filter = "invert(100%) hue-rotate(180deg) brightness(1.5) contrast(2)";
      photo.style.transform = "translateX(2px) skewX(5deg)";
      // 2. CALCULATE RANDOM RECOVERY TIME (100ms to 2000ms)
      const recoveryTime = Math.floor(Math.random() * (2000 - 100 + 1) + 100);

      setTimeout(() => {
        // Revert to your base "Stark" theme style
        photo.style.filter = "grayscale(100%) contrast(120%) brightness(80%)";
        photo.style.transform = "translateX(0) skewX(0)";
      }, recoveryTime);  
    }
  }, 2500);
}

// Initialize the observer
triggerPhotoGlitch();


// ============ TETRIC_PROTOCOL ENGINE ============
(function () {
  const COLS = 10, ROWS = 20, BLOCK = 20;
  const COLORS = ['', '#00d4ff', '#ffcc00', '#00ff41', '#ff3b3b', '#bf5fff', '#ff8c00', '#00ffff'];
  const PIECES = [
    null,
    [[1,1,1,1]],                          // I
    [[2,2],[2,2]],                         // O
    [[0,3,0],[3,3,3]],                     // T
    [[4,0],[4,0],[4,4]],                   // L
    [[0,5],[0,5],[5,5]],                   // J
    [[6,6,0],[0,6,6]],                     // S
    [[0,7,7],[7,7,0]]                      // Z
  ];

  let board, piece, pieceX, pieceY, pieceType, nextType;
  let score, level, lines, running, paused, raf, lastTime, dropInterval;

  function newBoard() {
    return Array.from({length: ROWS}, () => new Array(COLS).fill(0));
  }

  function randomType() { return Math.floor(Math.random() * 7) + 1; }

  function getShape(type) { return PIECES[type].map(r => [...r]); }

  function rotate(shape) {
    return shape[0].map((_, i) => shape.map(r => r[i]).reverse());
  }

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
    const shape = getShape(pieceType);
    for (let r = 0; r < shape.length; r++)
      for (let c = 0; c < shape[r].length; c++)
        if (shape[r][c]) board[r + pieceY][c + pieceX] = pieceType;
    clearLines();
    spawnPiece();
  }

  function clearLines() {
    let cleared = 0;
    for (let r = ROWS - 1; r >= 0; r--) {
      if (board[r].every(c => c)) {
        board.splice(r, 1);
        board.unshift(new Array(COLS).fill(0));
        cleared++;
        r++;
      }
    }
    if (cleared) {
      const pts = [0, 100, 300, 500, 800];
      score += (pts[cleared] || 800) * level;
      lines += cleared;
      level = Math.floor(lines / 10) + 1;
      dropInterval = Math.max(100, 1000 - (level - 1) * 90);
      updateHUD();
    }
  }

  function spawnPiece() {
    pieceType = nextType;
    nextType = randomType();
    pieceX = Math.floor(COLS / 2) - Math.floor(getShape(pieceType)[0].length / 2);
    pieceY = 0;
    if (!valid(board, getShape(pieceType), pieceX, pieceY)) {
      gameOver();
    }
    drawNext();
  }

  function gameOver() {
    running = false;
    const canvas = document.getElementById('t-board');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff3b3b';
    ctx.font = 'bold 18px Rajdhani';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 10);
    ctx.fillStyle = '#ffcc00';
    ctx.font = '12px Rajdhani';
    ctx.fillText('SCORE: ' + score, canvas.width / 2, canvas.height / 2 + 15);
  }

  function updateHUD() {
    const s = document.getElementById('t-score');
    const l = document.getElementById('t-level');
    const ln = document.getElementById('t-lines');
    if (s) s.textContent = score;
    if (l) l.textContent = level;
    if (ln) ln.textContent = lines;
  }

  function drawBoard(ctx) {
    ctx.fillStyle = '#05080a';
    ctx.fillRect(0, 0, COLS * BLOCK, ROWS * BLOCK);
    // grid
    ctx.strokeStyle = 'rgba(0,212,255,0.05)';
    ctx.lineWidth = 0.5;
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      ctx.strokeRect(c * BLOCK, r * BLOCK, BLOCK, BLOCK);
    }
    // locked cells
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        if (board[r][c]) drawBlock(ctx, c, r, board[r][c]);
  }

  function drawBlock(ctx, c, r, type) {
    const color = COLORS[type];
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
    ctx.fillRect(c * BLOCK + 1, r * BLOCK + 1, BLOCK - 2, BLOCK - 2);
    ctx.shadowBlur = 0;
  }

  function drawPiece(ctx) {
    const shape = getShape(pieceType);
    // ghost
    let ghostY = pieceY;
    while (valid(board, shape, pieceX, ghostY + 1)) ghostY++;
    for (let r = 0; r < shape.length; r++)
      for (let c = 0; c < shape[r].length; c++)
        if (shape[r][c]) {
          ctx.fillStyle = 'rgba(0,212,255,0.15)';
          ctx.fillRect((pieceX + c) * BLOCK + 1, (ghostY + r) * BLOCK + 1, BLOCK - 2, BLOCK - 2);
        }
    // actual
    for (let r = 0; r < shape.length; r++)
      for (let c = 0; c < shape[r].length; c++)
        if (shape[r][c]) drawBlock(ctx, pieceX + c, pieceY + r, pieceType);
  }

  function drawNext() {
    const canvas = document.getElementById('t-next');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#05080a';
    ctx.fillRect(0, 0, 80, 80);
    const shape = getShape(nextType);
    const offX = Math.floor((4 - shape[0].length) / 2);
    const offY = Math.floor((4 - shape.length) / 2);
    for (let r = 0; r < shape.length; r++)
      for (let c = 0; c < shape[r].length; c++)
        if (shape[r][c]) drawBlock(ctx, offX + c, offY + r, nextType);
  }

  function loop(ts) {
    if (!running || paused) return;
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
    board = newBoard();
    score = 0; level = 1; lines = 0; dropInterval = 1000;
    nextType = randomType();
    spawnPiece();
    updateHUD();
    running = true; paused = false;
    lastTime = 0;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  function bindControls() {
    document.getElementById('t-start').onclick = startGame;
    document.getElementById('t-pause').onclick = () => {
      if (!running) return;
      paused = !paused;
      document.getElementById('t-pause').textContent = paused ? 'RESUME' : 'PAUSE';
      if (!paused) { lastTime = 0; raf = requestAnimationFrame(loop); }
    };
    document.getElementById('t-left').onclick = () => { if (running && !paused && valid(board, getShape(pieceType), pieceX - 1, pieceY)) pieceX--; };
    document.getElementById('t-right').onclick = () => { if (running && !paused && valid(board, getShape(pieceType), pieceX + 1, pieceY)) pieceX++; };
    document.getElementById('t-down').onclick = () => { if (running && !paused && valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score++; updateHUD(); } };
    document.getElementById('t-rotate').onclick = () => {
      if (!running || paused) return;
      const rot = rotate(getShape(pieceType));
      if (valid(board, rot, pieceX, pieceY)) { PIECES[pieceType] = rot; }
    };
    document.getElementById('t-drop').onclick = () => {
      if (!running || paused) return;
      while (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score += 2; }
      lock(); updateHUD();
    };
  }

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!running || paused) return;
    if (!document.getElementById('t-board')) return;
    if (e.code === 'ArrowLeft') { if (valid(board, getShape(pieceType), pieceX - 1, pieceY)) pieceX--; }
    else if (e.code === 'ArrowRight') { if (valid(board, getShape(pieceType), pieceX + 1, pieceY)) pieceX++; }
    else if (e.code === 'ArrowDown') { if (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score++; updateHUD(); } }
    else if (e.code === 'ArrowUp') { const rot = rotate(getShape(pieceType)); if (valid(board, rot, pieceX, pieceY)) PIECES[pieceType] = rot; }
    else if (e.code === 'Space') { e.preventDefault(); while (valid(board, getShape(pieceType), pieceX, pieceY + 1)) { pieceY++; score += 2; } lock(); updateHUD(); }
  });

  // Hook into switchNode to init controls after DOM renders
  const _orig = window.switchNode;
  window.switchNode = function (nodeKey) {
    _orig(nodeKey);
    if (nodeKey === 'tetris') {
      setTimeout(() => {
        if (document.getElementById('t-start')) bindControls();
      }, 500);
    }
  };
})();
