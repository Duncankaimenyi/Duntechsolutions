 // Tab Navigation
    document.addEventListener('DOMContentLoaded', function() {
      const tabs = document.querySelectorAll('.tab-btn');
      const categories = document.querySelectorAll('.service-category');
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const tabId = tab.getAttribute('data-tab');
          
          // Update active tab
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Show corresponding category
          categories.forEach(category => {
            if (category.id === tabId) {
              category.style.display = 'block';
              category.style.animation = 'fadeInUp 0.6s ease';
            } else {
              category.style.display = 'none';
            }
          });
        });
      });

      // Smooth scroll to category
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Mobile menu toggle (if you have existing script.js, this might be redundant)
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const backBtn = document.getElementById('BACK-btn');
      
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        });
        
        if (backBtn) {
          backBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
          });
        }
      }
    });