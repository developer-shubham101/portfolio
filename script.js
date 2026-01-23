/**
 * PERSONNEL_DOSSIER: SHARMA_S
 * CORE_LOGIC_MODULE v2.1
 */

const intelArchive = {
  summary: {
    brief: "Senior Software Engineer with 8 years experience across E-commerce, Fintech, and Streaming domains. Currently Technical Lead at Wipro Ltd.",
    full: `<h3>OPERATIONAL_SUMMARY</h3>
           <p>Highly experienced Sr. Software Engineer with 8 years in high-traffic sectors.</p>
           <label class="hud-label">CORE_OBJECTIVE</label>
           <p>Leading development teams and delivering innovative solutions using Java Spring Boot (microservices), React.js, and Flutter.</p>
           <label class="hud-label">SPECIALIZATIONS</label>
           <p>E-commerce, Social Media, Fintech, and Audio/Video Streaming.</p>`
  },
  skills: {
    brief: "Primary Arsenal: Java Spring Boot (Reactive), React.js, Flutter, AWS, and AI Prompt Engineering.",
    full: `<h3>TACTICAL_ARSENAL</h3>
           <label class="hud-label">BACKEND_SYSTEMS</label>
           <p>Java Spring Boot, Spring WebFlux, Microservices, Redis, Eureka.</p>
           <label class="hud-label">FRONTEND_INTERFACES</label>
           <p>React.js (TypeScript), Redux Toolkit, Material UI, Bootstrap.</p>
           <label class="hud-label">MOBILE_DEPLOYMENT</label>
           <p>Flutter, React Native (TypeScript/JavaScript).</p>
           <label class="hud-label">CLOUD_INFRASTRUCTURE</label>
           <p>AWS (S3, SNS, EC2), GitHub Actions, Docker, Jenkins.</p>`
  },
  exp: {
    brief: "Service Record includes lead roles at Wipro Ltd, PureSoftware Pvt. Ltd, and Emizen Tech.",
    full: `<h3>SERVICE_RECORD</h3>
           <label class="hud-label">WIPRO LTD (NOV 2024 - PRESENT)</label>
           <p><strong>Technical Lead:</strong> Leading development for UnitedHealth Group insurance platform.</p>
           <label class="hud-label">PURESOFTWARE PVT LTD (2022 - 2024)</label>
           <p><strong>Sr. Software Engineer:</strong> Reduced API response time by 75% via asynchronous coding and caching.</p>
           <label class="hud-label">EMIZEN TECH (2020 - 2022)</label>
           <p><strong>Team Lead:</strong> Led multiple projects concurrently from concept to deployment.</p>`
  },
  projects: {
    brief: "Successfully deployed assets: Japfa Best, WingiMall, GroHood, and 2GTHR Social Connect.",
    full: `<h3>FIELD_OPERATIONS</h3>
           <label class="hud-label">OP: JAPFA_BEST</label>
           <p>Fresh meat delivery platform. Managed high-speed order tracking and RazorPay integration.</p>
           <label class="hud-label">OP: GROHOOD</label>
           <p>E-commerce ecosystem for fresh produce. Implemented CodePush for instant app updates.</p>
           <label class="hud-label">OP: 2GTHR</label>
           <p>Social platform utilizing Firebase Cloud Firestore for real-time interaction.</p>`
  },
  contact: {
    brief: "Secure communication channels are established. Coordinates available below.",
    full: `<h3>COMMUNICATION_CHANNELS</h3>
           <label class="hud-label">DIRECT_ENCRYPTION_EMAIL</label>
           <p><a href="mailto:sk.shubhamsharma95@gmail.com" style="color:inherit; text-decoration:underline;">sk.shubhamsharma95@gmail.com</a></p>
           <label class="hud-label">CODE_REPOSITORY</label>
           <p><a href="https://github.com/developer-shubham101" target="_blank" style="color:inherit; text-decoration:underline;">GITHUB_CENTRAL_CORE</a></p>
           <label class="hud-label">GEOGRAPHIC_COORDINATES</label>
           <p>Jaipur, Rajasthan, India [Zone: IST]</p>
           <label class="hud-label">STATUS</label>
           <p>READY_FOR_DEPLOYMENT</p>`
  }
};

let typingTimer = null;

/**
 * 1. BOOT SEQUENCE
 * Simulates system startup before revealing the UI
 */
async function runBootSequence() {
  const log = document.getElementById('boot-log');
  const bootMessages = [
    "> INITIALIZING SHARMA_S_DOSSIER KERNEL v8.4.2...",
    "> LOADING ENCRYPTION MODULES... [SUCCESS]",
    "> ESTABLISHING SECURE HANDSHAKE... [OK]",
    "> DECRYPTING OPERATIONAL RECORDS...",
    "> ACCESS GRANTED. WELCOME, OPERATIVE."
  ];

  for (const msg of bootMessages) {
    const line = document.createElement('div');
    line.className = 'boot-line';
    line.innerText = msg;
    log.appendChild(line);
    // Pause for "reading" effect
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Swap Screens
  setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('main-interface').style.display = 'block';
    // Load default summary automatically
    updateSelection('summary', document.querySelector('.nav-hex'));
  }, 800);
}

/**
 * 2. THEME TOGGLE
 * Switches between Emerald (Green) and Cobalt (Blue) protocols
 */
function toggleProtocol() {
  document.body.classList.toggle('blue-protocol');
  const btn = document.getElementById('theme-toggle-btn');
  const isBlue = document.body.classList.contains('blue-protocol');
  btn.innerText = isBlue ? "RESTORE_EMERALD_PROTOCOL" : "INITIATE_COBALT_PROTOCOL";
}

/**
 * 3. UI SELECTION & AUTO-RENDER
 * Triggered when a tab is clicked. Updates both left and right panels.
 */
function updateSelection(key, btn) {
  // Update Tab Styling
  document.querySelectorAll('.nav-hex').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Update Left Panel (Brief)
  const briefDiv = document.getElementById('brief-content');
  briefDiv.innerHTML = `<p class="brief-text">${intelArchive[key].brief}</p>`;

  // Update Right Panel (Full Details) via Typewriter
  renderDetailedStream(intelArchive[key].full);
}

/**
 * 4. TYPEWRITER ENGINE
 * Streams HTML content character by character into the detailed visualizer
 */
function renderDetailedStream(htmlContent) {
  const stream = document.getElementById('detailed-stream');

  // Stop previous typing and clear area
  clearTimeout(typingTimer);
  stream.innerHTML = '';
  stream.classList.add('data-flash');

  let i = 0;
  function type() {
    if (i < htmlContent.length) {
      // Logic to handle HTML tags better (simulated)
      stream.innerHTML = htmlContent.substring(0, i + 1);
      i++;
      typingTimer = setTimeout(type, 10); // Fast stream speed
    }
  }

  // Brief delay to show the "Flash" effect before typing starts
  setTimeout(() => {
    stream.classList.remove('data-flash');
    type();
  }, 300);
}

// Entry Point
window.onload = runBootSequence;