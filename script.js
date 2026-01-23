const intelArchive = {
  profile: {
    title: "Subject: SHARMA_S",
    body: "Technical Lead with 8+ years experience. Expert in high-load distributed systems and reactive architectures. Currently assigned to enterprise-level insurance data platforms."
  },
  // Updated entry in script.js
  arsenal: {
    title: "TACTICAL_ARSENAL",
    body: `
        <div class="arsenal-grid">
            <div class="skill-category">
                <label class="category-label">BACKEND_SYSTEMS</label>
                <div class="skill-tag">Java [Spring Boot] <span class="rating">98%</span></div>
                <div class="skill-tag">Microservices <span class="rating">94%</span></div>
                <div class="skill-tag">Redis / Caching <span class="rating">85%</span></div>
            </div>
            <div class="skill-category">
                <label class="category-label">FRONTEND_INT</label>
                <div class="skill-tag">React.js / TS <span class="rating">92%</span></div>
                <div class="skill-tag">Redux Toolkit <span class="rating">90%</span></div>
                <div class="skill-tag">Material UI <span class="rating">88%</span></div>
            </div>
            <div class="skill-category">
                <label class="category-label">MOBILE_DEPLOY</label>
                <div class="skill-tag">Flutter <span class="rating">85%</span></div>
                <div class="skill-tag">React Native <span class="rating">80%</span></div>
            </div>
            <div class="skill-category">
                <label class="category-label">CLOUD_OPS</label>
                <div class="skill-tag">AWS (EC2/S3) <span class="rating">82%</span></div>
                <div class="skill-tag">Docker / CI-CD <span class="rating">78%</span></div>
            </div>
        </div>
    `
  },
  // Updated entry in script.js
  service: {
    title: "SERVICE_HISTORY",
    body: `
        <div class="transmission-log">
            <div class="log-segment" data-rank="LEAD">
                <div class="segment-meta">NOV 2024 – PRESENT // CLASSIFIED</div>
                <div class="segment-title">WIPRO_LTD [TECHNICAL_LEAD]</div>
                <div class="segment-details">
                    Architecting insurance platforms for UnitedHealth Group. 
                    Mentoring senior engineers and driving Agile protocols.
                </div>
            </div>
            <div class="log-segment" data-rank="SENIOR">
                <div class="segment-meta">AUG 2022 – NOV 2024 // DECRYPTED</div>
                <div class="segment-title">PURESOFTWARE_PVT_LTD [SR. ENGINEER]</div>
                <div class="segment-details">
                    Core contribution to Japfa Best. API latency reduction: 75%. 
                    Integration of Redis caching and Razorpay sync.
                </div>
            </div>
            <div class="log-segment" data-rank="LEAD">
                <div class="segment-meta">JUN 2020 – AUG 2022 // ARCHIVED</div>
                <div class="segment-title">EMIZEN_TECH_PVT_LTD [TEAM_LEAD]</div>
                <div class="segment-details">
                    Led E-commerce and Social platform deployment. 
                    Managed end-to-end lifecycle for multi-tenant architectures.
                </div>
            </div>
        </div>
    `
  },
  
  // Add to your intelArchive in script.js
  ops: {
    title: "ACTIVE_FIELD_OPERATIONS",
    body: `
        <div class="ops-grid">
            <div class="mission-folder">
                <div class="mission-header">
                    <span class="mission-id">OP_JAPFA_BEST</span>
                    <span class="threat-level high">THREAT: HIGH</span>
                </div>
                <div class="mission-meta">OBJECTIVE: HYPERLOCAL_DISTRIBUTION_CORE</div>
                <div class="mission-status">STATUS: [STABLE]</div>
                <div class="mission-brief">
                    Architected a multi-tenant logistics engine. Integrated real-time 
                    tracking and Razorpay payment nodes. Signal strength: <span class="alien-glyph">⍙⟒⏃</span> 94%.
                </div>
            </div>

            <div class="mission-folder">
                <div class="mission-header">
                    <span class="mission-id">OP_WINGI_MALL</span>
                    <span class="threat-level med">THREAT: MID</span>
                </div>
                <div class="mission-meta">OBJECTIVE: E-COMMERCE_TRANSCEIVER</div>
                <div class="mission-status">STATUS: [ARCHIVED]</div>
                <div class="mission-brief">
                    Deployed high-load e-commerce platform with automated 
                    inventory synchronization and encrypted checkout protocols.
                </div>
            </div>

            <div class="mission-folder">
                <div class="mission-header">
                    <span class="mission-id">OP_GROHOOD_CORE</span>
                    <span class="threat-level high">THREAT: HIGH</span>
                </div>
                <div class="mission-meta">OBJECTIVE: COMMUNITY_LOGISTICS_SYNDICATE</div>
                <div class="mission-status">STATUS: [STABLE]</div>
                <div class="mission-brief">
                    Engineered backend infrastructure for massive-scale community 
                    group buying. Decoded data packets for 1M+ active nodes.
                </div>
            </div>
        </div>
    `
  },
  // Updated entry in script.js
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
                    <div class="channel-value">S.SHARMA@STARK_MAIL.NET</div>
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
function updateCoordinates() {
  const coords = document.querySelector('.agency-stamp');
  if (!coords) return;

  const lat = (Math.random() * 180 - 90).toFixed(4);
  const lng = (Math.random() * 360 - 180).toFixed(4);

  coords.innerHTML = `STARK_INDUSTRIES // LOC: ${lat}, ${lng} // SIG_STRENGTH: 98%`;
}

setInterval(updateCoordinates, 2000);








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
  switchNode('profile');
  generateXenonStream();
  setInterval(updateClock, 1000);
  setInterval(addInterceptLog, 5000);


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

  setInterval(simulateSignalSpike, 8000);

  
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