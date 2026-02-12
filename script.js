
        // ============================================
        // PROFESSIONAL CHATBOT CONFIGURATION
        // ============================================
        const CONFIG = {
            company: "Duntech Solutions",
            founder: "Duncan Kaimenyi",
            botName: "Duntech AI Assistant",
            colors: {
                primary: "#4f46ef",
                secondary: "#7c3aed"
            },
            autoOpenDelay: 3000,
            typingSpeed: 20,
            responseDelay: 800,
            maxMessages: 100,
            notificationCount: 3,
            welcomeMessages: [
                "Hello! I'm your Duntech AI Assistant. 👋",
                "I'm here to help with information about our web development, graphic design, logo design, and cybersecurity services.",
                "What would you like to know today?"
            ]
        };

        // ============================================
        // COMPREHENSIVE KNOWLEDGE BASE - UPDATED WITH YOUR INFO
        // ============================================
        const KNOWLEDGE = {
            greetings: {
                patterns: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "hi there"],
                response: "Hello there! 👋 I'm your Duntech AI Assistant, created by Duncan Kaimenyi. I'm ready to help you with all our digital solutions and services. How can I assist you today?",
                actions: ["Our Services", "Get a Quote", "View Portfolio", "Contact Team"]
            },
            
            services: {
                patterns: ["services", "what you do", "offerings", "help", "service", "what do you offer"],
                response: "**Duntech Solutions Services**\n\nWe provide comprehensive digital solutions:\n\n💻 **Web Development**\n• Custom website development\n• E-commerce solutions\n• Responsive design\n• Performance optimization\n\n🎨 **Graphic Design**\n• Logo & brand identity\n• UI/UX design\n• Marketing materials\n• Visual branding\n\n📎 **Logo Design**\n• Professional logo creation\n• Brand identity systems\n• Corporate branding\n• Creative illustrations\n\n🔒 **Cybersecurity Services**\n• Security audits\n• Government portal support\n• Online cyber services\n• Digital security solutions\n\nWhich service interests you?",
                actions: ["Web Development", "Graphic Design", "Logo Design", "Cybersecurity", "Pricing"]
            },
            
            web: {
                patterns: ["web development", "website", "e-commerce", "web app", "frontend", "backend", "custom website", "web design"],
                response: "**Web Development Services by Duncan Kaimenyi**\n\n✅ **What We Offer:**\n• Custom website design & development\n• Responsive & mobile-friendly sites\n• E-commerce platforms\n• Web application development\n• Performance optimization\n• Security implementation\n\n🛠️ **Our Approach:**\n• Modern, clean code\n• SEO optimized\n• Fast loading times\n• User-focused design\n• Ongoing support\n\n💰 **Flexible Pricing:**\nContact us for customized quotes based on your project requirements.\n\nReady to discuss your project?",
                actions: ["Get Web Quote", "View Web Portfolio", "Talk to Duncan", "Back to Services"]
            },
            
            design: {
                patterns: ["design", "graphics", "graphic design", "ui/ux", "branding", "visual"],
                response: "**Graphic Design Services**\n\n✅ **What We Offer:**\n• Logo & brand identity design\n• UI/UX design & prototyping\n• Marketing collateral\n• Social media graphics\n• Posters & promotional materials\n• Brand guidelines\n\n🎨 **Our Expertise:**\n• Modern design trends\n• Creative solutions\n• Professional quality\n• Fast turnaround\n• Unlimited revisions\n\n💰 **Custom Pricing:**\nStarting at affordable rates. Contact for detailed quotes.\n\nLet's create something amazing!",
                actions: ["Get Design Quote", "View Design Portfolio", "Talk to Designer", "Back to Services"]
            },
            
            logo: {
                patterns: ["logo", "logo design", "branding", "brand identity", "corporate logo"],
                response: "**Professional Logo Design Services**\n\n✅ **What We Offer:**\n• Custom logo creation\n• Brand identity systems\n• Logo variations\n• File formats (AI, EPS, PNG, SVG)\n• Brand guidelines document\n• Unlimited revisions\n\n🎯 **Our Process:**\n1. Consultation & brief\n2. Concept development\n3. Design refinement\n4. Final delivery\n5. Brand guidelines\n\n💰 **Affordable Pricing:**\nContact us for quotes tailored to your needs.\n\nMake your brand unforgettable!",
                actions: ["Get Logo Quote", "View Logo Portfolio", "See Gallery", "Back to Services"]
            },
            
            security: {
                patterns: ["security", "cyber", "cybersecurity", "protection", "audit", "government portal"],
                response: "**Cybersecurity & Online Services**\n\n✅ **What We Offer:**\n• Government portal support\n• Online security solutions\n• Security assessments\n• Data protection\n• Digital services support\n• Government document services\n\n🛡️ **Our Expertise:**\n• Government platforms\n• Official portal navigation\n• Document processing\n• Data security\n• Compliance support\n\n📞 **Contact Information:**\nPhone: +254 713 723 639\nEmail: duncamkaimenyi501@gmail.com\n\nHow can we secure your digital presence?",
                actions: ["Security Assessment", "Portal Support", "Contact Support", "Back to Services"]
            },
            
            pricing: {
                patterns: ["price", "cost", "how much", "pricing", "budget", "rates", "quote", "estimate"],
                response: "**Pricing Overview**\n\n💰 **Our Services - Custom Pricing:**\n\n• **Web Development**\n  Flexible pricing based on scope\n  \n• **Graphic Design**\n  Affordable rates for all budgets\n  \n• **Logo Design**\n  Professional designs within reach\n  \n• **Cybersecurity Services**\n  Custom quotes\n\n📞 **Best Way to Get Quote:**\nPhone: +254 713 723 639\nEmail: duncamkaimenyi501@gmail.com\nLocation: Narok, Kenya\n\n*Contact us for a detailed, customized quote based on your specific project needs. We offer flexible payment options!*",
                actions: ["Web Quote", "Design Quote", "Logo Quote", "Contact Sales"]
            },
            
            portfolio: {
                patterns: ["portfolio", "projects", "work", "examples", "case studies", "showcase", "previous work"],
                response: "**Our Portfolio**\n\n🏆 **Duntech Solutions Work:**\n\nWe've completed numerous projects including:\n\n✓ **Website Projects**\n  Professional, modern websites\n  Responsive design\n  \n✓ **Graphic Designs**\n  Creative visual solutions\n  Brand identity systems\n  \n✓ **Logo Designs**\n  Unique, memorable logos\n  Professional branding\n  \n✓ **Digital Solutions**\n  Custom web applications\n  Security implementations\n\n📸 **View Full Portfolio:**\nVisit our Portfolio page to see detailed project showcases\n\nWould you like to see specific projects?",
                actions: ["View Web Projects", "View Design Work", "View Logos", "Contact for Portfolio"]
            },
            
            contact: {
                patterns: ["contact", "call", "email", "meeting", "sales", "support", "talk", "reach", "phone", "address", "where", "location"],
                response: "**Contact Duntech Solutions & Duncan Kaimenyi**\n\n📞 **Phone:**\n+254 713 723 639\n\n📧 **Email:**\nduncamkaimenyi501@gmail.com\n\n📍 **Location:**\nNarok, Kenya\n\n🕐 **Availability:**\nAvailable for consultations\nResponsive digital support\nFlex scheduling\n\n💬 **How to Connect:**\n• WhatsApp: +254 713 723 639\n• Email for detailed inquiries\n• Direct call for urgent matters\n• Schedule a consultation call\n\n🔗 **Connect on Social Media:**\nFind us on your favorite platforms!\n\nWhat's the best way for us to help you?",
                actions: ["Schedule Call", "Send Email", "WhatsApp", "Live Chat", "More Info"]
            },
            
            about: {
                patterns: ["about", "company", "who are you", "duntech", "team", "experience", "story", "mission", "duncan"],
                response: "**About Duntech Solutions**\n\n👨‍💼 **Founder & Lead Developer:**\nDuncan Kaimenyi\n\n🚀 **Our Mission:**\nProviding expert digital solutions including web development, graphic design, logo design, and cybersecurity services to transform your business.\n\n📊 **What We Specialize In:**\n• Web Development\n• Graphic Design\n• Logo & Brand Design\n• Online Security Services\n• Government Portal Support\n• Digital Solutions\n\n🎯 **Why Choose Us:**\n✓ Expert craftsmanship\n✓ Professional quality\n✓ Affordable pricing\n✓ Timely delivery\n✓ Excellent support\n✓ Client satisfaction\n\n📍 **Based In:** Narok, Kenya\n\n🔗 **Contact:**\nPhone: +254 713 723 639\nEmail: duncamkaimenyi501@gmail.com\n\nReady to work together?",
                actions: ["Our Services", "Our Process", "View Portfolio", "Contact Us"]
            },
            
            thanks: {
                patterns: ["thanks", "thank you", "thankyou", "appreciate", "grateful", "helpful"],
                response: "You're very welcome! 😊 I'm happy to help. Is there anything else I can assist you with today?",
                actions: ["More Questions", "Contact Team", "All Done"]
            },
            
            goodbye: {
                patterns: ["bye", "goodbye", "see you", "farewell", "exit", "quit", "later"],
                response: "Goodbye! Thank you for chatting with me. We look forward to working with you! 👋\n\nContact Duncan at +254 713 723 639",
                actions: []
            },
            
            default: {
                response: "I understand you're looking for information about Duntech Solutions! I can help you with:\n\n• **Our Services** - Web development, graphic design, logo design, cybersecurity\n• **Quotes & Pricing** - Custom estimates for your projects\n• **Our Portfolio** - Examples of our design and development work\n• **Contact Duncan** - Phone: +254 713 723 639 or Email: duncamkaimenyi501@gmail.com\n• **About Us** - Learn about Duncan Kaimenyi and Duntech Solutions\n\nWhat would you like to explore?",
                actions: ["Services", "Pricing", "Portfolio", "Contact", "About Duncan"]
            }
        };

        // ============================================
        // STATE MANAGEMENT
        // ============================================
        const state = {
            isOpen: false,
            isTyping: false,
            messageCount: 0,
            notificationCount: CONFIG.notificationCount,
            conversation: [],
            currentContext: null,
            typingTimeout: null
        };

        // ============================================
        // DOM ELEMENTS (initialized on DOMContentLoaded)
        // ============================================
        let elements = {};

        // ============================================
        // INITIALIZATION
        // ============================================
        function init() {
            try {
                // Load conversation history
                loadHistory();
                
                    // Initialize DOM element references
                    elements = {
                        chatWindow: document.getElementById('chatWindow'),
                        chatToggle: document.getElementById('chatToggle'),
                        messagesContainer: document.getElementById('messagesContainer'),
                        chatInput: document.getElementById('chatInput'),
                        sendBtn: document.getElementById('sendBtn'),
                        minimizeBtn: document.getElementById('minimizeBtn'),
                        closeBtn: document.getElementById('closeBtn'),
                        notificationBadge: document.getElementById('notificationBadge')
                    };

                    // Set up all event listeners
                    setupEventListeners();
                
                // Auto-open welcome after delay
                setTimeout(() => {
                    if (!state.isOpen && state.notificationCount > 0) {
                        showNotification();
                    }
                }, CONFIG.autoOpenDelay);
                
                // Show welcome if new conversation
                if (state.conversation.length === 0) {
                    setTimeout(showWelcomeMessage, 1000);
                } else {
                    renderConversation();
                }
                
                console.log('✅ Duntech AI Assistant initialized successfully');
            } catch (error) {
                console.error('❌ Initialization error:', error);
            }
        }

        // ============================================
        // EVENT LISTENERS
        // ============================================
        function setupEventListeners() {
                // Toggle chat window
                if (elements.chatToggle) elements.chatToggle.addEventListener('click', toggleChat);

                // Minimize button
                if (elements.minimizeBtn) elements.minimizeBtn.addEventListener('click', toggleChat);

                // Close button
                if (elements.closeBtn) elements.closeBtn.addEventListener('click', closeChat);

                // Send message on button click
                if (elements.sendBtn) elements.sendBtn.addEventListener('click', sendMessage);

                // Send message on Enter key (with typing check)
                if (elements.chatInput) {
                    elements.chatInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter' && !state.isTyping) {
                            e.preventDefault();
                            sendMessage();
                        }
                    });

                    // Focus input when chat opens
                    elements.chatInput.addEventListener('focus', () => {
                        if (elements.chatWindow) elements.chatWindow.classList.add('active');
                    });
                }

                // Prevent rapid firing
                if (elements.sendBtn) elements.sendBtn.addEventListener('mousedown', (e) => { e.preventDefault(); });
        }

        // ============================================
        // CHAT CONTROLS
        // ============================================
        function toggleChat() {
            try {
                state.isOpen = !state.isOpen;
                elements.chatWindow.classList.toggle('active', state.isOpen);
                elements.chatToggle.classList.toggle('active', state.isOpen);
                
                if (state.isOpen) {
                    elements.chatInput.focus();
                    hideNotification();
                    scrollToBottom();
                    
                    // Auto-greet if first time opening
                    if (state.conversation.length === 0 && !state.hasGreeted) {
                        state.hasGreeted = true;
                        showWelcomeMessage();
                    }
                }
            } catch (error) {
                console.error('Toggle error:', error);
            }
        }

        function closeChat() {
            state.isOpen = false;
            elements.chatWindow.classList.remove('active');
            elements.chatToggle.classList.remove('active');
        }

        // ============================================
        // MESSAGE HANDLING
        // ============================================
        function sendMessage() {
            try {
                const text = elements.chatInput.value.trim();
                if (!text || state.isTyping) return;
                
                // Add user message
                addMessage(text, 'user');
                
                // Clear input
                elements.chatInput.value = '';
                
                // Process and respond
                setTimeout(() => {
                    processUserMessage(text.toLowerCase());
                }, CONFIG.responseDelay);
                
            } catch (error) {
                console.error('Send error:', error);
                showError("Sorry, I encountered an error. Please try again.");
            }
        }

        function addMessage(text, type, actions = null) {
            try {
                // Create message element
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${type}`;
                
                // Format text with markdown
                const formattedText = formatText(text);
                
                // Get current time
                const time = getCurrentTime();
                
                // Build message HTML
                messageDiv.innerHTML = `
                    ${formattedText}
                    <div class="message-time">${time}</div>
                `;
                
                // Add to messages container
                elements.messagesContainer.appendChild(messageDiv);
                
                // Add to conversation history
                state.conversation.push({
                    type,
                    text,
                    time,
                    actions,
                    timestamp: Date.now()
                });
                
                // Save to localStorage
                saveHistory();
                
                // Scroll to bottom
                scrollToBottom();
                
                return messageDiv;
            } catch (error) {
                console.error('Add message error:', error);
                return null;
            }
        }

        function showTypingIndicator() {
            if (state.isTyping) return null;
            
            state.isTyping = true;
            
            const typingDiv = document.createElement('div');
            typingDiv.className = 'typing-indicator';
            typingDiv.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            
            elements.messagesContainer.appendChild(typingDiv);
            scrollToBottom();
            
            return typingDiv;
        }

        function hideTypingIndicator(typingElement) {
            if (typingElement && typingElement.parentNode) {
                typingElement.remove();
            }
            state.isTyping = false;
        }

        // ============================================
        // USER INTERFACE COMPONENTS
        // ============================================
        function addQuickActions(actions, callback) {
            try {
                if (!actions || !Array.isArray(actions) || actions.length === 0) return;
                
                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'quick-actions';
                
                actions.forEach(action => {
                    const button = document.createElement('button');
                    button.className = 'quick-action';
                    button.textContent = action;
                    button.addEventListener('click', () => {
                        if (typeof callback === 'function') {
                            callback(action);
                        }
                    });
                    actionsDiv.appendChild(button);
                });
                
                elements.messagesContainer.appendChild(actionsDiv);
                scrollToBottom();
            } catch (error) {
                console.error('Add actions error:', error);
            }
        }

        function addServiceCards() {
            try {
                const services = [
                    { icon: 'fa-laptop-code', label: 'Web Development', color: '#4f46ef' },
                    { icon: 'fa-paint-brush', label: 'Graphics Design', color: '#7c3aed' },
                    { icon: 'fa-shield-alt', label: 'Cyber Security', color: '#10b981' },
                    { icon: 'fa-lightbulb', label: 'Digital Solutions', color: '#f59e0b' }
                ];
                
                const cardsDiv = document.createElement('div');
                cardsDiv.className = 'service-cards';
                
                services.forEach(service => {
                    const card = document.createElement('div');
                    card.className = 'service-card';
                    card.innerHTML = `
                        <i class="fas ${service.icon}" style="color: ${service.color}"></i>
                        <span>${service.label}</span>
                    `;
                    card.addEventListener('click', () => {
                        handleQuickAction(service.label);
                    });
                    cardsDiv.appendChild(card);
                });
                
                elements.messagesContainer.appendChild(cardsDiv);
                scrollToBottom();
            } catch (error) {
                console.error('Service cards error:', error);
            }
        }

        // ============================================
        // MESSAGE PROCESSING
        // ============================================
        function processUserMessage(text) {
            try {
                // Show typing indicator
                const typingElement = showTypingIndicator();
                
                // Find matching response
                let response = KNOWLEDGE.default.response;
                let actions = KNOWLEDGE.default.actions;
                let matchedCategory = 'default';
                
                // Check all knowledge categories
                for (const [category, data] of Object.entries(KNOWLEDGE)) {
                    if (data.patterns && data.patterns.some(pattern => text.includes(pattern))) {
                        response = data.response;
                        actions = data.actions || [];
                        matchedCategory = category;
                        break;
                    }
                }
                
                // Set context for follow-up questions
                state.currentContext = matchedCategory;
                
                // Simulate typing delay
                const typingDelay = response.length * CONFIG.typingSpeed;
                
                clearTimeout(state.typingTimeout);
                state.typingTimeout = setTimeout(() => {
                    hideTypingIndicator(typingElement);
                    
                    // Add bot response
                    addMessage(response, 'bot');
                    
                    // Add quick actions if available
                    if (actions && actions.length > 0) {
                        setTimeout(() => {
                            addQuickActions(actions, handleQuickAction);
                        }, 300);
                    }
                    
                    // Add service cards for services response
                    if (matchedCategory === 'services') {
                        setTimeout(addServiceCards, 500);
                    }
                }, Math.min(typingDelay, 3000)); // Max 3 seconds typing
                
            } catch (error) {
                console.error('Process error:', error);
                showError("I'm having trouble understanding. Could you rephrase your question?");
            }
        }

        function handleQuickAction(action) {
            try {
                // Add user action as message
                addMessage(action, 'user');
                
                // Map actions to responses
                const actionMap = {
                    'Our Services': 'services',
                    'Get a Quote': 'pricing',
                    'Get Quote': 'pricing',
                    'View Portfolio': 'portfolio',
                    'Contact Team': 'contact',
                    'Web Development': 'web',
                    'Graphics Design': 'design',
                    'Cyber Security': 'security',
                    'Digital Solutions': 'digital',
                    'Pricing': 'pricing',
                    'Back to Services': 'services',
                    'Get Web Quote': 'web',
                    'Get Design Quote': 'design',
                    'Get Security Quote': 'security',
                    'Get Digital Quote': 'digital',
                    'View Web Portfolio': 'portfolio',
                    'View Design Portfolio': 'portfolio',
                    'View Security Cases': 'portfolio',
                    'Schedule Call': 'contact',
                    'Send Email': 'contact',
                    'About Us': 'about',
                    'Our Team': 'about',
                    'Our Process': 'about',
                    'Client Testimonials': 'about',
                    'More Questions': 'services',
                    'All Done': 'goodbye'
                };
                
                const context = actionMap[action] || action.toLowerCase();
                setTimeout(() => {
                    processUserMessage(context);
                }, CONFIG.responseDelay);
                
            } catch (error) {
                console.error('Quick action error:', error);
            }
        }

        // ============================================
        // UI FUNCTIONS
        // ============================================
        function showWelcomeMessage() {
            try {
                const welcomeDiv = document.createElement('div');
                welcomeDiv.className = 'welcome-message';
                welcomeDiv.innerHTML = `
                    <h4>👋 Welcome to Duntech Solutions!</h4>
                    <p>I'm your AI Assistant, here to help you explore our digital services, get pricing information, view our portfolio, or connect with our expert team. How can I assist you today?</p>
                `;
                elements.messagesContainer.appendChild(welcomeDiv);
                
                // Add initial quick actions
                setTimeout(() => {
                    addQuickActions(['Our Services', 'Get a Quote', 'View Portfolio', 'Contact Team'], handleQuickAction);
                }, 500);
                
            } catch (error) {
                console.error('Welcome error:', error);
            }
        }

        function showError(message) {
            try {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'message bot';
                errorDiv.innerHTML = `
                    ⚠️ ${message}
                    <div class="message-time">${getCurrentTime()}</div>
                `;
                elements.messagesContainer.appendChild(errorDiv);
                scrollToBottom();
            } catch (error) {
                console.error('Error message error:', error);
            }
        }

        function showNotification() {
            if (state.notificationCount > 0) {
                elements.notificationBadge.textContent = state.notificationCount;
                elements.notificationBadge.style.display = 'flex';
            }
        }

        function hideNotification() {
            state.notificationCount = 0;
            elements.notificationBadge.style.display = 'none';
        }

        function scrollToBottom() {
            try {
                elements.messagesContainer.scrollTop = elements.messagesContainer.scrollHeight;
            } catch (error) {
                // Ignore scroll errors
            }
        }

        // ============================================
        // UTILITY FUNCTIONS
        // ============================================
        function formatText(text) {
            try {
                return text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br>')
                    .replace(/💻/g, '💻 ')
                    .replace(/🎨/g, '🎨 ')
                    .replace(/🔒/g, '🔒 ')
                    .replace(/⚡/g, '⚡ ')
                    .replace(/✅/g, '✅ ')
                    .replace(/🛠️/g, '🛠️ ')
                    .replace(/💰/g, '💰 ')
                    .replace(/⏱️/g, '⏱️ ')
                    .replace(/🚀/g, '🚀 ')
                    .replace(/🛡️/g, '🛡️ ')
                    .replace(/📞/g, '📞 ')
                    .replace(/📧/g, '📧 ')
                    .replace(/📍/g, '📍 ')
                    .replace(/🕐/g, '🕐 ')
                    .replace(/👥/g, '👥 ')
                    .replace(/📊/g, '📊 ')
                    .replace(/🎯/g, '🎯 ')
                    .replace(/🏆/g, '🏆 ')
                    .replace(/→/g, '→ ');
            } catch (error) {
                return text;
            }
        }

        function getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        function saveHistory() {
            try {
                // Keep only last 100 messages
                if (state.conversation.length > CONFIG.maxMessages) {
                    state.conversation = state.conversation.slice(-CONFIG.maxMessages);
                }
                
                localStorage.setItem('duntech_pro_chat', JSON.stringify({
                    conversation: state.conversation,
                    timestamp: Date.now(),
                    version: '2.0'
                }));
            } catch (error) {
                // Ignore storage errors
            }
        }

        function loadHistory() {
            try {
                const saved = localStorage.getItem('duntech_pro_chat');
                if (saved) {
                    const data = JSON.parse(saved);
                    // Load conversations from last 7 days only
                    if (Date.now() - data.timestamp < 7 * 24 * 60 * 60 * 1000) {
                        state.conversation = data.conversation || [];
                    }
                }
            } catch (error) {
                // Ignore load errors
            }
        }

        function renderConversation() {
            try {
                elements.messagesContainer.innerHTML = '';
                
                state.conversation.forEach(msg => {
                    const messageDiv = document.createElement('div');
                    messageDiv.className = `message ${msg.type}`;
                    messageDiv.innerHTML = `
                        ${formatText(msg.text)}
                        <div class="message-time">${msg.time}</div>
                    `;
                    elements.messagesContainer.appendChild(messageDiv);
                });
                
                scrollToBottom();
            } catch (error) {
                console.error('Render error:', error);
            }
        }

        function clearHistory() {
            state.conversation = [];
            elements.messagesContainer.innerHTML = '';
            localStorage.removeItem('duntech_pro_chat');
            showWelcomeMessage();
        }

        // ============================================
        // PUBLIC API FOR TESTING
        // ============================================
        window.duntechChatbot = {
            toggle: toggleChat,
            send: (text) => {
                if (text) {
                    addMessage(text, 'user');
                    setTimeout(() => processUserMessage(text.toLowerCase()), CONFIG.responseDelay);
                }
            },
            clear: clearHistory,
            test: (type = 'greeting') => {
                const testMessages = {
                    greeting: 'Hello',
                    services: 'What services do you offer?',
                    web: 'Tell me about web development',
                    pricing: 'How much does it cost?',
                    portfolio: 'Show me your portfolio',
                    contact: 'How can I contact you?',
                    about: 'Tell me about your company'
                };
                const message = testMessages[type] || 'Hello';
                window.duntechChatbot.send(message);
            }
        };

        // ============================================
        // INITIALIZE ON LOAD
        // ============================================
        document.addEventListener('DOMContentLoaded', init);

// ====== MOBILE MENU ======
function showMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    mobileOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ====== DROPDOWN TOGGLE ======
function toggleDropdown(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const dropdown = link.nextElementSibling;
    
    if (dropdown && dropdown.classList.contains('dropdown')) {
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(dd => {
            if (dd !== dropdown) {
                dd.classList.remove('active');
                dd.previousElementSibling.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        link.classList.toggle('active');
        dropdown.classList.toggle('active');
    }
}

// ====== HANDLE MOBILE MENU CLICKS ======
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking links
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close if it's a dropdown toggle
            if (!this.classList.contains('dropdown-toggle')) {
                setTimeout(() => {
                    hideMobileMenu();
                }, 200);
            }
        });
    });
    
    // Close menu when clicking overlay
    const mobileOverlay = document.getElementById('mobile-overlay');
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                hideMobileMenu();
            }
        });
    }
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideMobileMenu();
        }
    });
    
    // Close hamburger when clicking outside on desktop
    document.addEventListener('click', function(e) {
        const navbar = document.querySelector('.navbar');
        if (navbar && !navbar.contains(e.target)) {
            // Only on desktop
            if (window.innerWidth >= 992) {
                const dropdowns = document.querySelectorAll('.dropdown');
                dropdowns.forEach(dd => {
                    dd.classList.remove('active');
                    dd.previousElementSibling?.classList.remove('active');
                });
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            hideMobileMenu();
        }
    });
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.querySelector('a')?.classList.add('active');
        }
    });
});



// Back to top functionality
        document.getElementById('backToTop').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

// ============================================
// IMAGE VIEWER / GALLERY FUNCTIONALITY
// ============================================
(function() {
  let currentImageIndex = 0;
  let totalImages = 0;
  let images = [];

  const modal = document.getElementById('imageViewerModal');
  const viewerImage = document.getElementById('viewerImage');
  const closeBtn = document.getElementById('closeImageViewer');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  const currentImageSpan = document.getElementById('currentImage');
  const totalImagesSpan = document.getElementById('totalImages');

  if (!modal) return; // Exit if modal doesn't exist

  // Initialize gallery
  function initGallery() {
    const cards = document.querySelectorAll('.card[data-index]');
    if (cards.length === 0) return;

    images = Array.from(cards).map(card => {
      const img = card.querySelector('img');
      return {
        src: img.src,
        alt: img.alt,
        index: parseInt(card.getAttribute('data-index'))
      };
    });

    totalImages = images.length;
    totalImagesSpan.textContent = totalImages;

    // Add click handlers to cards
    cards.forEach((card, index) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => openModal(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(index);
        }
      });
    });
  }

  function openModal(index) {
    currentImageIndex = index;
    updateImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateImage() {
    if (!images || images.length === 0) return;
    const image = images[currentImageIndex];
    viewerImage.src = image.src;
    viewerImage.alt = image.alt;
    currentImageSpan.textContent = currentImageIndex + 1;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateImage();
  }

  // Event listeners
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  // Close on modal background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        nextImage();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevImage();
        break;
      case 'Escape':
        closeModal();
        break;
    }
  });

  // Initialize on page load
  window.addEventListener('load', initGallery);
  
  // Also try to initialize immediately in case DOM is already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();

        
        