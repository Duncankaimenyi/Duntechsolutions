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
document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('quickOrder');
        const textarea = document.getElementById('jobDetails');
        const charCounter = document.getElementById('charCounter');
        const urgencyOptions = document.querySelectorAll('.urgency-option');
        const selectedUrgency = document.getElementById('selectedUrgency');
        const fileDropZone = document.getElementById('fileDropZone');
        const fileUpload = document.getElementById('fileUpload');
        const fileList = document.getElementById('fileList');
        const waLink = document.getElementById('waQuick');
        
        // Character counter
        if (textarea && charCounter) {
            updateCharCounter();
            textarea.addEventListener('input', updateCharCounter);
            
            function updateCharCounter() {
                const length = textarea.value.length;
                charCounter.textContent = length;
                
                if (length > 500) {
                    textarea.value = textarea.value.substring(0, 500);
                    charCounter.textContent = 500;
                    charCounter.style.color = 'var(--danger)';
                } else if (length > 450) {
                    charCounter.style.color = 'var(--warning)';
                } else if (length > 300) {
                    charCounter.style.color = 'var(--text)';
                } else {
                    charCounter.style.color = 'var(--success)';
                }
            }
        }
        
        // Urgency selection
        urgencyOptions.forEach(option => {
            option.addEventListener('click', function() {
                urgencyOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                selectedUrgency.value = this.dataset.urgency;
            });
        });
        
        // File upload with drag & drop
        if (fileDropZone && fileUpload) {
            // Click to upload
            fileDropZone.addEventListener('click', () => fileUpload.click());
            
            // Drag & drop
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                fileDropZone.addEventListener(eventName, preventDefaults, false);
            });
            
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            ['dragenter', 'dragover'].forEach(eventName => {
                fileDropZone.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                fileDropZone.addEventListener(eventName, unhighlight, false);
            });
            
            function highlight() {
                fileDropZone.classList.add('dragover');
            }
            
            function unhighlight() {
                fileDropZone.classList.remove('dragover');
            }
            
            fileDropZone.addEventListener('drop', handleDrop, false);
            fileUpload.addEventListener('change', handleFiles);
            
            function handleDrop(e) {
                const dt = e.dataTransfer;
                const files = dt.files;
                handleFiles({ target: { files } });
            }
            
            function handleFiles(e) {
                const files = Array.from(e.target.files);
                fileList.innerHTML = '';
                
                files.forEach((file, index) => {
                    if (file.size > 10 * 1024 * 1024) {
                        alert(`File "${file.name}" exceeds 10MB limit`);
                        return;
                    }
                    
                    const fileItem = document.createElement('div');
                    fileItem.className = 'file-item';
                    fileItem.innerHTML = `
                        <div class="file-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9M13 2L20 9M13 2V9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span class="file-name">${file.name}</span>
                        <span class="file-size">(${(file.size / 1024).toFixed(1)} KB)</span>
                    `;
                    fileList.appendChild(fileItem);
                });
            }
        }
        
        // WhatsApp link
        if (waLink) {
            waLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('fullName').value || 'Customer';
                const service = document.getElementById('serviceType').value || 'General Inquiry';
                const urgency = selectedUrgency.value;
                const message = document.getElementById('jobDetails').value.substring(0, 100);
                
                const text = `Hello! I'm ${name}. I'm interested in: ${service} (${urgency} urgency). ${message ? 'Details: ' + message : ''}`;
                const encodedText = encodeURIComponent(text);
                
                // Replace with your WhatsApp number
                const whatsappNumber = '254712345678';
                this.href = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
                window.open(this.href, '_blank');
            });
        }
        
        // Form submission
        if (form) {
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Validation
                const name = document.getElementById('fullName').value.trim();
                const email = document.getElementById('orderEmail').value.trim();
                const service = document.getElementById('serviceType').value;
                
                if (!name || !email || !service) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Get form data
                const formData = {
                    name: name,
                    email: email,
                    service: service,
                    message: document.getElementById('jobDetails').value,
                    urgency: selectedUrgency.value,
                    timestamp: new Date().toISOString()
                };
                
                // Show loading state
                const submitBtn = form.querySelector('.btn-primary');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = `
                    <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-dashoffset="16"/>
                    </svg>
                    Processing...
                `;
                submitBtn.disabled = true;
                
                // Simulate form submission (Replace with actual EmailJS)
                try {
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    
                    console.log('Order submitted:', formData);
                    
                    // Success animation
                    submitBtn.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                            <path d="M20 6L9 17L4 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Sent Successfully!
                    `;
                    submitBtn.style.background = 'var(--success)';
                    
                    setTimeout(() => {
                        // Reset form
                        form.reset();
                        fileList.innerHTML = '';
                        if (textarea && charCounter) {
                            charCounter.textContent = '0';
                            charCounter.style.color = '';
                        }
                        
                        // Reset urgency
                        urgencyOptions.forEach(opt => opt.classList.remove('selected'));
                        document.querySelector('.urgency-option[data-urgency="standard"]').classList.add('selected');
                        selectedUrgency.value = 'standard';
                        
                        // Reset button
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 2000);
                    
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error sending message. Please try again.');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
        
        // Add spinner animation
        const style = document.createElement('style');
        style.textContent = `
            .spinner {
                animation: spin 0.8s linear infinite;
            }
            
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    });
