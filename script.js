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
    brief:
      "Technical Lead with 8+ years of experience building scalable web and mobile systems across E-commerce, FinTech, and Media platforms.",
    full: `
      <h3>OPERATIONAL_PROFILE</h3>
      <p>
        I am a Senior Software Engineer / Technical Lead with over 8 years of
        hands-on experience designing, developing, and scaling production-grade
        applications. My work spans backend systems, frontend platforms, and
        cross-platform mobile applications.
      </p>

      <p>
        I focus on building clean architectures, high-performance APIs,
        and reliable systems that can scale with business growth.
        I enjoy solving complex problems and translating requirements
        into robust technical solutions.
      </p>

      <label class="hud-label">CURRENT_ASSIGNMENT</label>
      <p>
        Technical Lead at <strong>Wipro Ltd</strong>, contributing to
        enterprise insurance platforms for UnitedHealth Group.
      </p>

      <label class="hud-label">WORKING_STYLE</label>
      <p>
        Architecture-first • Performance-focused • Mentorship-driven •
        Production-minded
      </p>

      <label class="hud-label">STATUS</label>
      <p>ACTIVE • DEPLOYMENT READY • HIGH CLEARANCE</p>
    `
  },

  skills: {
    brief:
      "Primary arsenal includes Java Spring Boot, React.js, Flutter, AWS, and distributed system design.",
    full: `
      <h3>TACTICAL_ARSENAL</h3>

      <label class="hud-label">BACKEND_SYSTEMS</label>
      <p>
        Java, Spring Boot, Spring WebFlux, Microservices,
        REST APIs, Redis, Caching, Async Processing
      </p>

      <label class="hud-label">FRONTEND_INTERFACES</label>
      <p>
        React.js, TypeScript, Redux Toolkit,
        Material UI, Responsive UI, Performance Optimization
      </p>

      <label class="hud-label">MOBILE_DEPLOYMENT</label>
      <p>
        Flutter, React Native, Cross-platform Architecture,
        OTA Updates, App Performance Tuning
      </p>

      <label class="hud-label">CLOUD_AND_DEVOPS</label>
      <p>
        AWS (EC2, S3, SNS), Docker,
        CI/CD Pipelines, GitHub Actions, Jenkins
      </p>

      <label class="hud-label">ENGINEERING_PRACTICES</label>
      <p>
        Clean Architecture, Code Reviews, Agile/Scrum,
        Documentation, Mentoring & Knowledge Sharing
      </p>
    `
  },

  exp: {
    brief:
      "Service record spans 8+ years across enterprise, product, and startup environments including Wipro, PureSoftware, and Emizen Tech.",
    full: `
    <h3>SERVICE_RECORD</h3>

    <label class="hud-label">WIPRO_LTD (NOV 2024 – PRESENT)</label>
    <p>
      <strong>Technical Lead & Full-Stack Developer</strong><br/>
      Leading development for UnitedHealth Group insurance platforms.
      Responsible for system architecture, backend services using
      Spring Boot (sync + reactive), and frontend development with
      React.js and Redux. Actively mentoring engineers, driving Agile
      practices, and ensuring high-quality enterprise deliveries.
    </p>

    <label class="hud-label">PURESOFTWARE_PVT_LTD (AUG 2022 – NOV 2024)</label>
    <p>
      <strong>Senior Software Engineer</strong><br/>
      Core contributor to Japfa Best across mobile, web, and backend.
      Reduced API response time from <strong>1.2s to 0.3s</strong> using
      asynchronous processing and Redis caching. Integrated Razorpay,
      Firebase, Clevertap, analytics platforms, and led performance
      optimizations across apps.
    </p>

    <label class="hud-label">EMIZEN_TECH_PVT_LTD (JUN 2020 – AUG 2022)</label>
    <p>
      <strong>Team Lead / Senior Software Engineer</strong><br/>
      Led multiple E-commerce and social platforms from concept to
      deployment. Designed scalable architectures, managed app
      deployments, and guided teams using Agile methodologies.
    </p>

    <label class="hud-label">APPIQO_TECHNOLOGY (JUN 2018 – AUG 2018)</label>
    <p>
      <strong>Full Stack Developer</strong><br/>
      Built and maintained React + Spring Boot web applications,
      handled API development, client communication, and deployment.
    </p>

    <label class="hud-label">NEXT_BIG_TECHNOLOGY (JUL 2015 – APR 2018)</label>
    <p>
      <strong>Web App Developer</strong><br/>
      Developed and maintained web applications for startups and
      small businesses using PHP, React.js, WordPress, and MySQL.
    </p>
  `
  },
  projects: {
    brief: "Deployed field operations across E-commerce, FinTech, Social & Media platforms.",
    list: [
      {
        id: "japfa",
        title: "JAPFA_BEST",
        short: "Fresh meat delivery platform (Android, iOS, Web)",
        full: `
        <h3>OP_JAPFA_BEST</h3>
        <p>
          Fresh meat and seafood delivery platform with real-time
          order tracking, Razorpay payments, Firebase notifications,
          Clevertap analytics, and performance optimizations.
        </p>
        <p>
          Reduced API latency by <strong>75%</strong> using async
          processing and Redis caching.
        </p>
      `
      },
      {
        id: "grohood",
        title: "GROHOOD",
        short: "Hyperlocal fruits & vegetables ecosystem",
        full: `
        <h3>OP_GROHOOD</h3>
        <p>
          Hyperlocal delivery ecosystem including customer app,
          vendor inventory system, delivery partner app, and QC module.
        </p>
        <p>
          Implemented CodePush allowing production fixes within hours
          instead of days.
        </p>
      `
      },
      {
        id: "wingimall",
        title: "WINGIMALL",
        short: "Cross-platform E-commerce platform",
        full: `
        <h3>OP_WINGIMALL</h3>
        <p>
          Flutter + GraphQL E-commerce app with social login,
          Crashlytics integration, and performance tuning.
        </p>
        <p>
          Improved app stability by <strong>15%</strong>.
        </p>
      `
      }
      // you can add more projects here
    ]
  }
,
 /*  projects: {
    brief:
      "Executed high-impact projects across E-commerce, FinTech, Social Media, Booking, and Streaming platforms.",
    full: `
    <h3>FIELD_OPERATIONS</h3>

    <label class="hud-label">OP_JAPFA_BEST</label>
    <p>
      Fresh meat and seafood delivery platform (Android, iOS, Web).
      Implemented real-time order tracking, Razorpay payments,
      Firebase notifications, Clevertap analytics, and performance
      optimizations. Reduced API latency by 75%.
    </p>

    <label class="hud-label">OP_WINGIMALL</label>
    <p>
      Cross-platform E-commerce app built with Flutter and GraphQL.
      Implemented social login (+20% registrations), Crashlytics
      integration (–15% crashes), and caching improvements
      (+25% faster load times).
    </p>

    <label class="hud-label">OP_MAMAS_FIRST</label>
    <p>
      E-commerce platform for mother and baby products.
      Developed dynamic homepage personalization, social login,
      payment flows, and real-time order tracking.
    </p>

    <label class="hud-label">OP_GROHOOD</label>
    <p>
      Hyperlocal fruits and vegetables delivery ecosystem.
      Built customer app, vendor inventory system, delivery partner
      app, and QC module. Implemented CodePush enabling critical
      updates within hours instead of days.
    </p>

    <label class="hud-label">OP_2GTHR</label>
    <p>
      Social and prayer community platform using Firebase.
      Implemented real-time chat, push notifications,
      social login, and CodePush for instant updates.
    </p>

    <label class="hud-label">OP_MORIITALIA</label>
    <p>
      Multi-vendor B2C & B2B E-commerce application.
      Developed secure payment flows, order management,
      Redux-based state handling, and CodePush deployments.
    </p>

    <label class="hud-label">OP_FUNDERBUBBLE</label>
    <p>
      FinTech platform providing cash credit based on online sales.
      Developed backend APIs and mobile features enabling
      streamlined credit access for businesses.
    </p>

    <label class="hud-label">OP_ZEDNIELMA / OP_FAHMENI</label>
    <p>
      Multi-language teacher-student booking platforms with
      real-time chat using WebSockets, Firebase notifications,
      and Crashlytics for stability improvements.
    </p>

    <label class="hud-label">OP_ONENAVUPDATE</label>
    <p>
      App update solution for car tablets without Play Store access.
      Built Spring Boot APIs allowing independent vendor updates
      and simplified version management.
    </p>

    <label class="hud-label">OP_DRAGONFIT</label>
    <p>
      Fitness application featuring video streaming, offline
      downloads, and personalized workout scheduling.
    </p>
  `
  }
, */

  contact: {
    brief:
      "Verified communication and professional channels available for collaboration.",
    full: `
      <h3>CONTACT_COORDINATES</h3>

      <label class="hud-label">EMAIL</label>
      <p>
        <a href="mailto:sk.shubhamsharma95@gmail.com">
          sk.shubhamsharma95@gmail.com
        </a>
      </p>

      <label class="hud-label">LINKEDIN_PROFILE</label>
      <p>
        <a href="https://www.linkedin.com/in/shubham-sharma-4623b3118" target="_blank">
          linkedin.com/in/shubham-sharma
        </a>
      </p>

      <label class="hud-label">GITHUB_REPOSITORY</label>
      <p>
        <a href="https://github.com/developer-shubham101" target="_blank">
          github.com/developer-shubham101
        </a>
      </p>

      <label class="hud-label">LOCATION</label>
      <p>Jaipur, Rajasthan, India (IST)</p>

      <label class="hud-label">AVAILABILITY</label>
      <p>
        Open to collaboration • Consulting • Lead roles •
        High-impact engineering work
      </p>
    `
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

function renderProjectList($brief, $stream) {
  const projects = intelArchive.projects.list;

  let html = `<div class="project-list">`;

  projects.forEach((p, index) => {
    html += `
      <div class="project-item" onclick="openProject('${p.id}')">
        <strong>${p.title}</strong>
        <div class="project-short">${p.short}</div>
      </div>
    `;
  });

  html += `</div>`;

  $brief.html(html);

  // Default message on right
  $stream.html(`
    <h3>FIELD_OPERATIONS</h3>
    <p>Select a project from the left panel to view details.</p>
  `);
}
function openProject(projectId) {
  const project = intelArchive.projects.list.find(p => p.id === projectId);
  if (!project) return;

  const $stream = $('#detailed-stream');
  clearTimeout(typingTimer);
  revealContent($stream, project.full);
}



const UPDATE_STYLE = "GLITCH";
// TYPE | BLUR | GLITCH | ALIEN | ENCRYPT

const REVEAL_MIN = 500;   // ms
const REVEAL_MAX = 1000; // ms

function updateSelection(key, el) {
  $('.nav-hex').removeClass('active');
  $(el).addClass('active');

  const $brief = $('#brief-content');
  const $stream = $('#detailed-stream');
  clearTimeout(typingTimer);
  $stream.empty();

  // NORMAL SECTIONS (unchanged)
  if (key !== "projects") {
    $brief.html(`<p class="brief-text">${intelArchive[key].brief}</p>`);
    revealContent($stream, intelArchive[key].full);
    return;
  }

  // PROJECTS SECTION (special behavior)
  renderProjectList($brief, $stream);
}


function revealContent($el, content) {
  switch (UPDATE_STYLE) {
    case "BLUR":
      revealBlur($el, content);
      break;
    case "GLITCH":
      revealGlitch($el, content);
      break;
    case "ALIEN":
      revealAlien($el, content);
      break;
    case "ENCRYPT":
      revealEncrypted($el, content);
      break;
    case "TYPE":
    default:
      revealTypewriter($el, content);
  }
}

function revealTypewriter($el, content) {
  const totalTime = Math.min(
    REVEAL_MAX,
    Math.max(REVEAL_MIN, content.length * 8)
  );
  const step = totalTime / content.length;

  let i = 0;
  function type() {
    if (i <= content.length) {
      $el.html(content.substring(0, i));
      i++;
      typingTimer = setTimeout(type, step);
    }
  }
  type();
}


function revealBlur($el, content) {
  $el
    .css({
      filter: "blur(14px)",
      opacity: 0.2
    })
    .html(content)
    .animate({ opacity: 1 }, 600);

  setTimeout(() => {
    $el.css("filter", "blur(0)");
  }, 600);
}


function revealGlitch($el, content) {
  const glitchChars = "!@#$%^&*()_+=<>?";
  const cycles = 8;
  const intervalTime = 80; // 8 × 80 = 640ms

  let count = 0;
  const interval = setInterval(() => {
    $el.html(
      content.replace(/[A-Za-z]/g, () =>
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      )
    );

    count++;
    if (count >= cycles) {
      clearInterval(interval);
      $el.html(content);
    }
  }, intervalTime);
}



function revealAlien($el, content) {
  const alienMap = "⏃⎅⎎⍀⍜⌖⏚⌰⏁";
  const totalTime = 800;
  const step = totalTime / content.length;

  const alienText = content.replace(/[A-Za-z]/g, () =>
    alienMap[Math.floor(Math.random() * alienMap.length)]
  );

  let i = 0;
  $el.html(alienText);

  function decode() {
    if (i <= content.length) {
      $el.html(
        content.substring(0, i) + alienText.substring(i)
      );
      i++;
      setTimeout(decode, step);
    }
  }

  decode();
}


function revealEncrypted($el, content) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const totalTime = 900;
  const steps = Math.ceil(content.length / 3);
  const intervalTime = totalTime / steps;

  let revealed = 0;
  const interval = setInterval(() => {
    $el.html(
      content
        .split("")
        .map((c, i) =>
          i < revealed
            ? c
            : chars[Math.floor(Math.random() * chars.length)]
        )
        .join("")
    );

    revealed += 3;
    if (revealed >= content.length) {
      clearInterval(interval);
      $el.html(content);
    }
  }, intervalTime);
}



$(window).on('load', runBootSequence);