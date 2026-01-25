// Mobile Menu Toggle (modern off-canvas)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function openMobileMenu(){
  if(menuBtn) menuBtn.classList.add('is-open');
  if(menuBtn) menuBtn.setAttribute('aria-expanded','true');
  if(mobileMenu) mobileMenu.classList.add('open');
  if(mobileOverlay) mobileOverlay.classList.add('visible');
  document.body.classList.add('no-scroll');
}

function closeMobileMenu(){
  if(menuBtn) menuBtn.classList.remove('is-open');
  if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
  if(mobileMenu) mobileMenu.classList.remove('open');
  if(mobileOverlay) mobileOverlay.classList.remove('visible');
  document.body.classList.remove('no-scroll');
}

if(menuBtn){
  menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains('is-open')) closeMobileMenu();
    else openMobileMenu();
  });
}



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
// Simple Contact Form (Front‑end only)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msg-status').innerHTML = "sending..............";
  setTimeout(()=>{
    document.getElementById('contact-form').reset();
  }, 3000);
});
let popup = document.getElementById('popup');
  function openPopup (){
    popup.classList.add("open-popup");
  }
  function closePopup (){
    popup.classList.remove("open-popup");
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

        
        