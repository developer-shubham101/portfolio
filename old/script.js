// Simple Scroll Reveal Effect
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! I will get back to you soon.');
  this.reset();
});

// Smooth initial load
document.addEventListener('DOMContentLoaded', () => {
  console.log("Portfolio Loaded");
});

// Add this to your existing script.js
const animateSkills = () => {
  const tags = document.querySelectorAll('.tag');
  tags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.5)';

    setTimeout(() => {
      tag.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      tag.style.opacity = '1';
      tag.style.transform = 'scale(1)';
    }, index * 50); // 50ms delay between each tag
  });
};

 




// Add this to your existing scroll observer in script.js
const experienceItems = document.querySelectorAll('.timeline-item');

const experienceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.1 });

experienceItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(50px)';
  item.style.transition = 'all 0.6s ease-out';
  experienceObserver.observe(item);
});


// Add this inside your existing scroll listener or DOMContentLoaded
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.about-text, .about-card').forEach(el => {
  el.classList.add('fade-in-hidden');
  observer.observe(el);
});


document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(20px)';

  setTimeout(() => {
    heroContent.style.transition = 'all 1s ease-out';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }, 200);
});

// Start of project

// Function to load projects
async function loadProjects() {
  const container = document.getElementById('project-container');

  try {
    const response = await fetch('projects.json');
    const projects = await response.json();

    container.innerHTML = projects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <span class="platform">${project.platform}</span>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

    // Re-trigger reveal animations after loading
    revealOnScroll();

  } catch (error) {
    console.error("Error loading projects:", error);
    container.innerHTML = "<p>Failed to load projects. Please check back later.</p>";
  }
}

// Simple reveal function
function revealOnScroll() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', loadProjects);



// End of project