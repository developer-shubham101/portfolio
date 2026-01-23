const intelArchive = {
  summary: {
    brief: "Senior Software Engineer with 8 years experience across E-commerce, Fintech, and Streaming domains.",
    full: `<h3>OPERATIONAL_SUMMARY</h3><p>Highly experienced Sr. Software Engineer with 8 years in high-traffic sectors.</p><label class="hud-label">CORE_OBJECTIVE</label><p>Leading development teams and delivering innovative solutions using Java Spring Boot, React.js, and Flutter.</p>`
  },
  skills: {
    brief: "Primary Arsenal: Java Spring Boot (Reactive), React.js, Flutter, AWS.",
    full: `<h3>TACTICAL_ARSENAL</h3><label class="hud-label">BACKEND</label><p>Java Spring Boot, Microservices, Redis.</p><label class="hud-label">FRONTEND</label><p>React.js, Redux, Flutter.</p>`
  },
  exp: {
    brief: "Service Record includes lead roles at Wipro Ltd, PureSoftware, and Emizen Tech.",
    full: `<h3>SERVICE_RECORD</h3><label class="hud-label">WIPRO LTD (PRESENT)</label><p>Technical Lead: Leading development for UnitedHealth Group platform.</p>`
  },
  projects: {
    brief: "Successfully deployed: Japfa Best, WingiMall, GroHood, and 2GTHR.",
    full: `<h3>FIELD_OPERATIONS</h3><label class="hud-label">OP: JAPFA_BEST</label><p>Fresh meat delivery platform with high-speed tracking.</p>`
  }
};

let activeKey = 'summary';

// 1. BOOT SEQUENCE
const bootMessages = [
  "> INITIALIZING KERNEL v8.4.2...",
  "> LOADING ENCRYPTION MODULES... [OK]",
  "> SCANNING TACTICAL ARSENAL...",
  "> ACCESS GRANTED. WELCOME, SHARMA_S."
];

async function runBootSequence() {
  const log = document.getElementById('boot-log');
  for (const msg of bootMessages) {
    const line = document.createElement('div');
    line.className = 'boot-line';
    line.innerText = msg;
    log.appendChild(line);
    await new Promise(r => setTimeout(r, 600));
  }
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('main-interface').style.display = 'block';
    updateSelection('summary', document.querySelector('.nav-hex'));
  }, 800);
}

// 2. THEME TOGGLE
function toggleProtocol() {
  document.body.classList.toggle('blue-protocol');
  const btn = document.getElementById('theme-toggle-btn');
  btn.innerText = document.body.classList.contains('blue-protocol') ? "RESTORE_EMERALD_PROTOCOL" : "INITIATE_COBALT_PROTOCOL";
}

// 3. UI SELECTION
function updateSelection(key, btn) {
  activeKey = key;
  document.querySelectorAll('.nav-hex').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('brief-content').innerHTML = `<p class="brief-text">${intelArchive[key].brief}</p>`;
}

// 4. TYPEWRITER EFFECT
function showFullIntel() {
  const stream = document.getElementById('detailed-stream');
  const fullText = intelArchive[activeKey].full;
  stream.innerHTML = '';
  stream.classList.add('data-flash');

  let i = 0;
  function type() {
    if (i < fullText.length) {
      stream.innerHTML = fullText.substring(0, i + 1);
      i++;
      setTimeout(type, 15);
    }
  }
  setTimeout(() => {
    stream.classList.remove('data-flash');
    type();
  }, 400);
}

window.onload = runBootSequence;