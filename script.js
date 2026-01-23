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