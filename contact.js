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

// ===== POPUP SYSTEM =====
function showPopup(type, title, message, autoClose = true, actionText = null, actionCallback = null) {
    const popup = document.getElementById('customPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');
    const popupAction = document.getElementById('popupAction');
    const popupContent = document.getElementById('popupContent');
    
    // Hide all icons first
    document.getElementById('popupIconSuccess').style.display = 'none';
    document.getElementById('popupIconError').style.display = 'none';
    document.getElementById('popupIconWarning').style.display = 'none';
    
    // Show the correct icon and set styles
    if (type === 'success') {
        document.getElementById('popupIconSuccess').style.display = 'block';
        popupContent.classList.add('success-border');
        popupContent.classList.remove('error-border', 'warning-border');
    } else if (type === 'error') {
        document.getElementById('popupIconSuccess').style.display = 'none';
        popupContent.classList.add('error-border');
        popupContent.classList.remove('success-border', 'warning-border');
    } else if (type === 'warning') {
        document.getElementById('popupIconWarning').style.display = 'block';
        popupContent.classList.add('warning-border');
        popupContent.classList.remove('success-border', 'error-border');
    }
    
    // Set content
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    
    // Configure action button
    if (actionText && actionCallback) {
        popupAction.textContent = actionText;
        popupAction.style.display = 'inline-block';
        popupAction.onclick = function() {
            hidePopup();
            actionCallback();
        };
    } else {
        popupAction.style.display = 'none';
    }
    
    // Show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto close after 5 seconds
    if (autoClose) {
        setTimeout(() => {
            if (popup.classList.contains('active')) {
                hidePopup();
            }
        }, 5000);
    }
}

function hidePopup() {
    const popup = document.getElementById('customPopup');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close popup events
document.getElementById('popupClose').addEventListener('click', hidePopup);
document.getElementById('popupCloseBtn').addEventListener('click', hidePopup);

// Close when clicking outside popup
document.getElementById('customPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        hidePopup();
    }
});

// ===== ANIMATION ON SCROLL =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// ===== SERVICE OPTIONS SELECTION =====
function initServiceOptions() {
    const serviceOptions = document.querySelectorAll('.service-option');
    const selectedServiceInput = document.getElementById('selectedService');
    
    // Handle service selection
    serviceOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            serviceOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Update hidden input
            const service = this.getAttribute('data-service');
            selectedServiceInput.value = service;
        });
    });
}

// ===== CONTACT FORM SUBMISSION =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value || 'Not provided';
        const service = document.getElementById('selectedService').value;
        const message = document.getElementById('contactMessage').value;
        
        // Service name mapping
        const serviceNames = {
            web: "Web Development",
            design: "Graphics Design",
            cyber: "Cyber Security",
            digital: "Digital Solutions"
        };
        
        // Disable submit button and show loading
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span class="spinner"></span> Sending...';
        submitButton.disabled = true;
        
        // Prepare data for EmailJS
        const formData = {
            name: `${firstName} ${lastName}`,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            service: serviceNames[service] || service,
            message: message,
            date: new Date().toLocaleString(),
            page: 'Contact Page'
        };
        
        // Send email using EmailJS with YOUR service ID and template ID
        emailjs.send('service_xwtmvhg', 'template_3fupl1k', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success popup
                showPopup(
                    'success',
                    'Message Sent Successfully!',
                    `Thank you, ${firstName}! Your message has been sent successfully. We'll get back to you within 24 hours.`,
                    true,
                    'Send Another',
                    function() {
                        contactForm.reset();
                        document.querySelector('.service-option[data-service="web"]').click();
                    }
                );
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                
                // Show error popup
                showPopup(
                    'error',
                    'Message Not Sent',
                    'Failed to send your message. Please try again or contact us directly at info@duntechsolutions.com',
                    true,
                    'Try Again',
                    function() {
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                        document.getElementById('contactEmail').focus();
                    }
                );
            });
    });
}

// ===== FAQ TOGGLE FUNCTIONALITY =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherToggleIcon = otherItem.querySelector('.faq-toggle i');
                    otherToggleIcon.className = 'fas fa-plus';
                }
            });
            
            // Toggle active class
            item.classList.toggle('active');
            
            // Update toggle icon
            const toggleIcon = item.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                toggleIcon.className = 'fas fa-minus';
            } else {
                toggleIcon.className = 'fas fa-plus';
            }
        });
    });
}

// ===== TEST POPUP FUNCTION =====
function testPopup(type) {
    if (type === 'success') {
        showPopup(
            'success',
            'Test Success Message',
            'This is a test success message! Form submission is working correctly.',
            false,
            'OK',
            function() {
                console.log('Test success popup closed');
            }
        );
    } else if (type === 'error') {
        showPopup(
            'error',
            'Test Error Message',
            'This is a test error message! Please check your EmailJS configuration.',
            false,
            'Try Again',
            function() {
                console.log('Test error popup closed');
            }
        );
    }
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initServiceOptions();
    initContactForm();
    initFAQ();
    
    // Set up scroll events
    window.addEventListener('scroll', function() {
        animateOnScroll();
    });
    
    // Initial call for animations
    animateOnScroll();
    
    // Add smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Test the popup system on load
    console.log('Contact page loaded successfully!');
    console.log('Test the popup by submitting the form or calling testPopup("success") in console.');
    
    // Add test buttons for development (remove in production)
    const testButtons = document.createElement('div');
    testButtons.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; z-index: 10000; display: flex; gap: 10px;">
            <button onclick="testPopup('success')" style="padding: 10px; background: #10b981; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">Test Success</button>
            <button onclick="testPopup('error')" style="padding: 10px; background: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">Test Error</button>
        </div>
    `;
    document.body.appendChild(testButtons);
});