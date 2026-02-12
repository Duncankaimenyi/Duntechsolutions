
        // ============================================
        // PROFESSIONAL CHATBOT CONFIGURATION
        // ============================================
        const CONFIG = {
            company: "Duntech Solutions",
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
                "I can help you with information about our services, pricing, portfolio, or connect you with our expert team.",
                "What would you like to know today?"
            ]
        };

        // ============================================
        // COMPREHENSIVE KNOWLEDGE BASE
        // ============================================
        const KNOWLEDGE = {
            greetings: {
                patterns: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "hi there"],
                response: "Hello there! 👋 I'm your Duntech AI Assistant, ready to help you with all things digital solutions. How can I assist you today?",
                actions: ["Our Services", "Get a Quote", "View Portfolio", "Contact Team"]
            },
            
            services: {
                patterns: ["services", "what you do", "offerings", "help", "service", "what do you offer"],
                response: "**Duntech Solutions Services**\n\nWe provide comprehensive digital solutions across four key areas:\n\n💻 **Web Development**\n• Custom Website Development\n• E-commerce Solutions\n• Web Applications\n• CMS Development\n\n🎨 **Graphics Design**\n• Logo & Brand Identity\n• UI/UX Design\n• Marketing Materials\n• Infographics\n\n🔒 **Cyber Security**\n• Security Audits & Assessments\n• Penetration Testing\n• Network Security\n• 24/7 Monitoring\n\n⚡ **Digital Solutions**\n• Digital Strategy Consulting\n• Automation Solutions\n• Cloud Migration\n• Analytics & Reporting\n\nWhich area interests you the most?",
                actions: ["Web Development", "Graphics Design", "Cyber Security", "Digital Solutions", "Pricing", "Portfolio"]
            },
            
            web: {
                patterns: ["web development", "website", "e-commerce", "web app", "react", "node", "frontend", "backend", "custom website"],
                response: "**Web Development Services**\n\n✅ **What We Offer:**\n• Custom Website Design & Development\n• E-commerce Platforms\n• Progressive Web Apps\n• API Integration\n• CMS Development\n• Website Maintenance\n\n🛠️ **Our Tech Stack:**\n• React, Vue.js, Angular\n• Node.js, Python, PHP\n• MongoDB, PostgreSQL\n• AWS, Google Cloud\n\n💰 **Starting Price:** $2,499\n⏱️ **Average Timeline:** 4-8 weeks\n\nWould you like a customized quote or to see our web development portfolio?",
                actions: ["Get Web Quote", "View Web Portfolio", "Talk to Developer", "Back to Services"]
            },
            
            design: {
                patterns: ["design", "graphics", "logo", "branding", "ui/ux", "photoshop", "figma", "graphic design"],
                response: "**Graphics Design Services**\n\n✅ **What We Offer:**\n• Logo & Brand Identity Design\n• UI/UX Design & Prototyping\n• Marketing Collateral\n• Infographics & Data Visualization\n• Packaging Design\n• Motion Graphics\n\n🎨 **Our Tools:**\n• Figma, Adobe XD\n• Photoshop, Illustrator\n• After Effects\n• Blender (3D)\n\n💰 **Starting Price:** $1,499\n⏱️ **Average Timeline:** 2-4 weeks\n\nReady to create something amazing together?",
                actions: ["Get Design Quote", "View Design Portfolio", "Talk to Designer", "Back to Services"]
            },
            
            security: {
                patterns: ["security", "cyber", "protection", "audit", "vulnerability", "hacking", "cybersecurity", "secure"],
                response: "**Cyber Security Services**\n\n✅ **What We Offer:**\n• Security Audits & Risk Assessments\n• Penetration Testing\n• Network Security Implementation\n• Data Encryption Solutions\n• Security Awareness Training\n• 24/7 Incident Response\n\n🛡️ **Our Expertise:**\n• ISO 27001 Compliance\n• GDPR & Privacy Regulations\n• Cloud Security\n• Endpoint Protection\n\n💰 **Starting Price:** $3,499\n⏱️ **Immediate Response Available**\n\nSecurity is not an option, it's a necessity. How can we protect your business?",
                actions: ["Security Assessment", "Get Security Quote", "Emergency Contact", "Back to Services"]
            },
            
            digital: {
                patterns: ["digital", "strategy", "consulting", "automation", "cloud", "transformation", "digital solutions"],
                response: "**Digital Solutions**\n\n✅ **What We Offer:**\n• Digital Strategy Consulting\n• Business Process Automation\n• Cloud Migration & Management\n• Data Analytics & Business Intelligence\n• Digital Marketing Solutions\n• Full Digital Transformation\n\n🚀 **Our Approach:**\n1. Assessment & Planning\n2. Implementation\n3. Optimization\n4. Continuous Support\n\n💰 **Starting Price:** $4,999\n⏱️ **Ong Partnership Model**\n\nLet's transform your business for the digital age.",
                actions: ["Digital Consultation", "Get Digital Quote", "View Case Studies", "Back to Services"]
            },
            
            pricing: {
                patterns: ["price", "cost", "how much", "pricing", "budget", "rates", "quote", "estimate"],
                response: "**Pricing Overview**\n\n💰 **Service Packages:**\n\n• **Web Development**\n  Basic: $2,499 - $5,000\n  Standard: $5,000 - $15,000\n  Enterprise: $15,000+\n\n• **Graphics Design**\n  Brand Package: $1,499 - $3,000\n  Full Campaign: $3,000 - $8,000\n  Ongoing Retainer: Custom\n\n• **Cyber Security**\n  Basic Audit: $3,499 - $7,000\n  Comprehensive: $7,000 - $20,000\n  Managed Services: Monthly\n\n• **Digital Solutions**\n  Strategy Session: $4,999\n  Implementation: $10,000 - $25,000\n  Full Transformation: $25,000+\n\n*All prices are estimates. Contact us for a detailed quote based on your specific requirements.*",
                actions: ["Web Quote", "Design Quote", "Security Quote", "Digital Quote", "Contact Sales"]
            },
            
            portfolio: {
                patterns: ["portfolio", "projects", "work", "examples", "case studies", "showcase", "previous work"],
                response: "**Our Portfolio Highlights**\n\n🏆 **Recent Success Stories:**\n\n1. **TechGadgets E-commerce Platform**\n   → 40% increase in sales\n   → 2.5s average load time\n   → Mobile-first responsive design\n\n2. **NovaTech Brand Redesign**\n   → 65% boost in brand recognition\n   → Complete brand identity system\n   → Award-winning design\n\n3. **SecureBank Cybersecurity Overhaul**\n   → 100% vulnerabilities identified and fixed\n   → Zero security breaches post-implementation\n   → ISO 27001 certification achieved\n\n4. **LogiFlow Supply Chain Automation**\n   → 35% operational efficiency gain\n   → $500K annual cost savings\n   → Real-time analytics dashboard\n\nView our full portfolio: https://duntechsolutions.com/portfolio",
                actions: ["View Web Projects", "View Design Work", "View Security Cases", "Contact for Similar"]
            },
            
            contact: {
                patterns: ["contact", "call", "email", "meeting", "sales", "support", "talk", "reach", "phone", "address"],
                response: "**Contact Information**\n\n📞 **Phone:**\n• Main: +1 (234) 567-8900\n• Sales: +1 (234) 567-8901\n• Support: +1 (234) 567-8902\n\n📧 **Email:**\n• General: info@duntechsolutions.com\n• Sales: sales@duntechsolutions.com\n• Support: support@duntechsolutions.com\n\n📍 **Office Address:**\n123 Tech Street, Digital City\nTech Valley, TV 12345\nUnited States\n\n🕐 **Business Hours:**\n• Monday-Friday: 9:00 AM - 6:00 PM EST\n• Saturday: 10:00 AM - 4:00 PM EST\n• Sunday: Emergency Support Only\n• 24/7 Support for Existing Clients\n\nHow would you like to connect with us?",
                actions: ["Schedule Call", "Send Email", "Live Chat", "Visit Office", "Quick Question"]
            },
            
            about: {
                patterns: ["about", "company", "who are you", "duntech", "team", "experience", "story", "mission"],
                response: "**About Duntech Solutions**\n\n🚀 **Our Story:**\nFounded in 2018, Duntech Solutions started as a small web development agency and has grown into a full-service digital solutions provider. Our journey began with a simple mission: to make exceptional digital services accessible to businesses of all sizes.\n\n👥 **Our Team:**\n• 32+ Digital Experts\n• Average 7+ years industry experience\n• Certified Professionals\n• Continuous Learning Culture\n\n📊 **Our Track Record:**\n• 250+ Projects Completed\n• 98% Client Satisfaction Rate\n• 40+ Returning Enterprise Clients\n• 24/7 Support Availability\n\n🎯 **Our Mission:**\nTo empower businesses through innovative digital solutions that drive growth, enhance security, and create exceptional user experiences.\n\nWe're more than just a service provider - we're your digital transformation partner.",
                actions: ["Our Team", "Our Process", "Client Testimonials", "Contact Us"]
            },
            
            thanks: {
                patterns: ["thanks", "thank you", "thankyou", "appreciate", "grateful", "helpful"],
                response: "You're most welcome! 😊 It's my pleasure to help. Is there anything else I can assist you with today?",
                actions: ["More Questions", "Contact Team", "All Done"]
            },
            
            goodbye: {
                patterns: ["bye", "goodbye", "see you", "farewell", "exit", "quit", "later"],
                response: "Goodbye and thank you for chatting with me! 👋 Remember, we're always here to help transform your digital presence. Have a wonderful day!",
                actions: []
            },
            
            default: {
                response: "I understand you're looking for information. I specialize in helping with:\n\n• **Digital Services** - Web development, design, security, digital solutions\n• **Pricing & Quotes** - Custom estimates for your projects\n• **Our Portfolio** - Case studies and success stories\n• **Contact Information** - How to reach our team\n• **About Us** - Our story and expertise\n\nWhat would you like to learn more about?",
                actions: ["Services", "Pricing", "Portfolio", "Contact", "About Us"]
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

        
        