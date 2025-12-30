// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.onclick = () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
};
const BACKbtn = document.getElementById('BACK-btn');
BACKbtn.onclick = () => {
  mobileMenu.style.display = "none";
};
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

  // WhatsApp links (replace phone number)
  const PHONE = '254713723639'; // <--- REPLACE with your number (no +, country code first)
  const waLinks = {
    waTop: document.getElementById('waTop'),
    waQuick: document.getElementById('waQuick'),
    waContact: document.getElementById('waContact'),
    waVisit: document.getElementById('waVisit'),
    waTopHeader: document.getElementById('waTop')
  };
  if(waLinks.waTop) waLinks.waTop.href = `https://wa.me/${PHONE}?text=Hello%20I%20want%20to%20place%20an%20order`;
  if(waLinks.waQuick) waLinks.waQuick.addEventListener('click', function(e){
    e.preventDefault();
    const form = document.getElementById('quickOrder');
    const name = form.from_name.value || 'Client';
    const service = form.service.value || 'General';
    const msg = `Hello, my name is ${encodeURIComponent(name)}. I want ${encodeURIComponent(service)}.`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`,'_blank');
  });
  if(waLinks.waContact) waLinks.waContact.addEventListener('click', function(e){
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const name = form?.from_name?.value || 'Client';
    const service = form?.service?.value || 'General';
    const phone = form?.phone?.value || '';
    const msg = `Hello, ${encodeURIComponent(name)}. I'm requesting ${encodeURIComponent(service)}. Phone: ${encodeURIComponent(phone)}`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`,'_blank');
  });

  // Simple in-view animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting) en.target.classList.add('in-view');
    });
  }, {threshold:0.12});
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // EmailJS integration for forms
  // Read instructions: create an EmailJS account, email service (Gmail/Outlook), then create a template.
  // Replace the placeholders below with your actual EmailJS keys.
  (function initEmailJS(){
    // load emailjs script dynamically (CDN)
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js';
    s.onload = () => {
      if(window.emailjs){
        emailjs.init('yjQhIy1Er-KAY9kgh'); // <-- REPLACE
      }
    };
    document.head.appendChild(s);
  })();

  // Helper to send form using EmailJS
  function sendEmailJSForm(formEl, onSuccess, onError){
    if(!window.emailjs){
      onError && onError({text:'EmailJS not loaded'});
      return;
    }
    const SERVICE_ID = 'service_xvmds0t'; // <-- REPLACE
    const TEMPLATE_ID = 'template_eroq2pi'; // <-- REPLACE
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl)
      .then(function(){ onSuccess && onSuccess(); }, function(err){ onError && onError(err); });
  }

  // Quick order form
  const quickForm = document.getElementById('quickOrder');
  quickForm && quickForm.addEventListener('submit', function(e){
    e.preventDefault();
    sendEmailJSForm(this, () => {
      openPopup();
      this.reset();
    }, (err) => {
      alert('Failed to send by email  — opening WhatsApp as fallback.');
      // fallback: open whatsapp
      const name = this.from_name.value || 'Client';
      const service = this.service.value || 'Service';
      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent('Hello my name is '+name+'. I want '+service)}`, '_blank');
    });
  });
// stats mini dashboard


  // Contact form (detailed)
  const contactForm = document.getElementById('contactForm');
  contactForm && contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    sendEmailJSForm(this, () => {
      openPopup();
      this.reset();
    }, (err) => {
      alert('Email failed — opening WhatsApp fallback.');
      const name = this.from_name.value || 'Client';
      const service = this.service.value || 'Service';
      const phone = this.phone.value || '';
      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent('Hello '+name+'. I want '+service+'. Phone: '+phone)}`, '_blank');
    });
  });

});
