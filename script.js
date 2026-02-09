// Show mobile menu
        function showMobileMenu() {
            document.getElementById('mobile-overlay').classList.remove('hidden');
        }
        
        // Hide mobile menu
        function hideMobileMenu() {
            document.getElementById('mobile-overlay').classList.add('hidden');
        }
        
        // Toggle dropdown for Portfolio
        function toggleDropdown(event) {
            event.preventDefault();
            const portfolioLink = event.currentTarget;
            const dropdown = portfolioLink.nextElementSibling;
            
            // Toggle active class
            portfolioLink.classList.toggle('active');
            dropdown.classList.toggle('active');
        }
        
        // Set active link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (!this.classList.contains('headportfolio')) {
                    // Remove active class from all links
                    document.querySelectorAll('#mobile-menu a').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Hide menu after clicking a link (optional)
                    setTimeout(() => {
                        hideMobileMenu();
                    }, 300);
                }
            });
        });
        
        // Close menu when clicking outside
        document.getElementById('mobile-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                hideMobileMenu();
            }
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideMobileMenu();
            }
        });
        
        // Demo: Simulate current page is Home
        window.addEventListener('load', function() {
            // You can set active class based on current page URL
            const currentPage = 'index.html'; // Change this based on actual page
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });



 
        // Animate service cards on scroll
        const serviceCards = document.querySelectorAll('.service-card');
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.1 });
         // Set initial state for animation
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
        
// Add this script if you want hover pause functionality
document.addEventListener('DOMContentLoaded', function() {
    const marqueeTrack = document.querySelector('.marquee-track');
    
    if (marqueeTrack) {
        marqueeTrack.addEventListener('mouseenter', () => {
            marqueeTrack.style.animationPlayState = 'paused';
        });
        
        marqueeTrack.addEventListener('mouseleave', () => {
            marqueeTrack.style.animationPlayState = 'running';
        });
    }
});
//Load portfolio data and render previews 
  (function(){
      function renderHomeProjects(){
        if (!window.projects) return;
        const grid = document.getElementById('homeProjectsGrid');
        const visible = projects.slice(0, 6); // limit on homepage
        grid.innerHTML = visible.map(p => `
          <article class="card project-preview-card">
            <div class="preview-top">
              <div class="preview-image"><img src="${p.image}" alt="${p.title}"></div>
              ${p.link && p.link !== '#' ? `<div class="live-badge">Live</div>` : ''}
            </div>
            <div class="info">
              <div class="project-head">
                <strong class="project-title">${p.title}</strong>
                <span class="project-year">${p.year}</span>
              </div>
              <p class="project-desc" style="color:var(--muted);font-size:0.95rem;margin:6px 0;">${p.description}</p>
              <div class="project-tech">
                ${p.technologies.slice(0,3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                ${p.technologies.length > 3 ? `<span class="tech-tag">+${p.technologies.length - 3}</span>` : ''}
              </div>
              <div class="project-actions" style="margin-top:12px;display:flex;gap:10px;align-items:center;">
                ${p.link && p.link !== '#' ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn btn-quote btn-sm">Live Demo</a>` : `<span style="color:var(--muted);font-size:0.9rem;">Demo coming</span>`}
                ${p.github && p.github !== '#' ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm">View Code</a>` : ''}
                <a href="portfolio.html" class="btn btn-sm">See more</a>
              </div>
            </div>
          </article>
        `).join('');
      }

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderHomeProjects);
      else renderHomeProjects();
    })();
// contact form popup
// Simple Contact Form (Front‑end only) - guard element access to avoid errors
const contactForm = document.getElementById('contactForm') || document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const statusEl = document.getElementById('msg-status');
    if (statusEl) statusEl.textContent = "sending..............";
    setTimeout(()=>{
      if (typeof contactForm.reset === 'function') contactForm.reset();
    }, 3000);
  });
}

let popup = document.getElementById('popup');
function openPopup (){
  if (popup) popup.classList.add("open-popup");
}
function closePopup (){
  if (popup) popup.classList.remove("open-popup");
}

// Basic site interactions, animations and EmailJS integration
document.addEventListener('DOMContentLoaded', function(){
  // Hamburger toggle
  const ham = document.getElementById('hamburger');
  ham && ham.addEventListener('click', () => {
    const nav = document.querySelector('.nav-list');
    if(nav) nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });

  

  // Simple in-view animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting) en.target.classList.add('in-view');
    });
  }, {threshold:0.12});
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

 
});

// Hide navbar on small screens when user scrolls horizontally (to the right)
(function(){
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastX = 0;
  let ticking = false;

  function onScroll() {
    if (window.innerWidth > 480) return; // only on narrow phones
    const x = window.scrollX || window.pageXOffset || 0;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (x > 20) header.classList.add('hide-horizontal');
        else header.classList.remove('hide-horizontal');
        ticking = false;
      });
      ticking = true;
    }
    lastX = x;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // also handle touchmove (some browsers don't update scrollX during touchstart)
  window.addEventListener('touchmove', onScroll, { passive: true });
})();

        
        