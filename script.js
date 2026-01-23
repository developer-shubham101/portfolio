const protocols = ["emerald", "cobalt", "crimson", "amber", "void", "frost"];
let currentProtocolIndex = 0;
let typingTimer = null;

// Initial Theme Check (Immediate)
(function () {
  const saved = localStorage.getItem("protocol") || "emerald";
  currentProtocolIndex = protocols.indexOf(saved);
  document.body.setAttribute('data-protocol', saved);
})();

const intelArchive = {
  summary: {
    brief: "Technical Lead with 8 years experience in Java, React, and Flutter.",
    full: `<h3>OPERATIONAL_SUMMARY</h3><p>Leading high-traffic platforms at Wipro Ltd.</p><label class="hud-label">STATUS</label><p>Active / Deployment Ready</p>`
  },
  skills: {
    brief: "Primary Arsenal: Java Spring Boot, React.js, AWS.",
    full: `<h3>TACTICAL_ARSENAL</h3><label class="hud-label">BACKEND</label><p>Spring Boot, Microservices, Redis.</p><label class="hud-label">FRONTEND</label><p>React, Redux, TypeScript.</p>`
  },
  exp: {
    brief: "Service Record: Wipro Ltd, PureSoftware, Emizen Tech.",
    full: `<h3>SERVICE_RECORD</h3><label class="hud-label">WIPRO (PRESENT)</label><p>Leading insurance platform modernization.</p>`
  },
  projects: {
    brief: "Deployed Assets: Japfa Best, WingiMall, GroHood.",
    full: `<h3>FIELD_OPERATIONS</h3><label class="hud-label">JAPFA_BEST</label><p>Real-time logistics and payment integration.</p>`
  },
  contact: {
    brief: "Secure communication channels established.",
    full: `<h3>CONTACT_COORDINATES</h3><label class="hud-label">EMAIL</label><p>sk.shubhamsharma95@gmail.com</p><label class="hud-label">GITHUB</label><p>developer-shubham101</p>`
  }
};

async function runBootSequence() {
  const $log = $('#boot-log');
  const msgs = ["> INITIALIZING KERNEL...", "> LOADING PROTOCOLS...", "> ACCESS GRANTED."];

  for (const m of msgs) {
    $(`<div class="boot-line">${m}</div>`).appendTo($log);
    await new Promise(r => setTimeout(r, 400));
  }

  $('#boot-screen').fadeOut(500, function () {
    $('#main-interface').show();
    const activeProt = $('body').attr('data-protocol');
    $('#theme-toggle-btn').text(`PROTOCOL: ${activeProt.toUpperCase()}`);
    updateSelection('summary', $('.nav-hex').first());
  });
}

function toggleProtocol() {
  currentProtocolIndex = (currentProtocolIndex + 1) % protocols.length;
  const protocol = protocols[currentProtocolIndex];
  $('body').attr('data-protocol', protocol);
  $('#theme-toggle-btn').text(`PROTOCOL: ${protocol.toUpperCase()}`);
  localStorage.setItem("protocol", protocol);
}

function updateSelection(key, el) {
  $('.nav-hex').removeClass('active');
  $(el).addClass('active');
  $('#brief-content').html(`<p class="brief-text">${intelArchive[key].brief}</p>`);

  // Typewriter Full Details
  const $stream = $('#detailed-stream');
  clearTimeout(typingTimer);
  $stream.empty().addClass('data-flash');

  let i = 0;
  const content = intelArchive[key].full;
  function type() {
    if (i < content.length) {
      $stream.html(content.substring(0, i + 1));
      i++;
      typingTimer = setTimeout(type, 10);
    }
  }
  setTimeout(() => { $stream.removeClass('data-flash'); type(); }, 300);
}

$(window).on('load', runBootSequence);