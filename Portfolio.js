// ===== DATA =====
        const projects = [
            {
                id: 1,
                title: "DriveX Car Rental Platform",
                category: "web",
                image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "A premium car rental platform with real-time booking, payment processing, and fleet management system.",
                technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Mapbox"],
                client: "DriveX Inc.",
                year: "2024",
                status: "Completed",
                link: "#",
                github: "#",
                details: "DriveX is a comprehensive car rental platform that allows users to browse, book, and manage vehicle rentals in real-time. The platform includes admin dashboards for fleet management, customer relationship tools, and analytics."
            },
            {
                id: 2,
                title: "Eagle Contractors Website " ,
                category: "web",
                image: "webimages/bg.jpeg " ,
                description: "Corporate website for a construction company with project portfolio, service details, and contact forms.",
                technologies: ["HTML5", "CSS3", "JavaScript", "EmailJS", "Responsive Design"],
                client: "Eagle Contractors",
                year: "2024",
                status: "Completed",
                link: "https://eaglecontractor2025.vercel.app/",
                github: "#",
                details: "A modern, responsive website for Eagle Contractors featuring project galleries, service information, client testimonials, and integrated contact forms with email functionality."
            },
            {
                id: 3,
                title: "FinTrack Mobile App",
                category: "mobile",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Personal finance tracking application with budgeting tools, expense categorization, and financial insights.",
                technologies: ["React Native", "Firebase", "Redux", "Chart.js", "iOS & Android"],
                client: "FinTech Solutions",
                year: "2023",
                status: "Completed",
                link: "#",
                github: "#",
                details: "FinTrack helps users manage their personal finances with features like expense tracking, budget planning, bill reminders, and visual financial reports through interactive charts."
            },
            {
                id: 4,
                title: "ShopEasy E-commerce Platform",
                category: "ecommerce",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Full-featured online shopping platform with product management, cart system, and secure checkout.",
                technologies: ["Vue.js", "Express.js", "PostgreSQL", "PayPal API", "Redis"],
                client: "Retail Group",
                year: "2023",
                status: "Completed",
                link: "#",
                github: "#",
                details: "ShopEasy provides a complete e-commerce solution with product catalog, user reviews, inventory management, order processing, and multiple payment gateway integrations."
            },
            {
                id: 5,
                title: "HealthSync SaaS Platform",
                category: "saas",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Healthcare management SaaS for clinics with patient records, appointment scheduling, and billing.",
                technologies: ["Angular", "NestJS", "MySQL", "Docker", "AWS"],
                client: "HealthTech Innovations",
                year: "2024",
                status: "In Development",
                link: "#",
                github: "#",
                details: "HealthSync streamlines clinic operations with features like electronic health records, appointment management, prescription tracking, and telemedicine capabilities."
            },
            {
                id: 6,
                title: "TaskFlow Project Management",
                category: "web",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Collaborative project management tool with task tracking, team communication, and progress analytics.",
                technologies: ["Next.js", "TypeScript", "GraphQL", "WebSocket", "Tailwind CSS"],
                client: "Corporate Solutions",
                year: "2023",
                status: "Completed",
                link: "#",
                github: "#",
                details: "TaskFlow enhances team productivity with kanban boards, time tracking, file sharing, real-time collaboration, and comprehensive project reporting."
            },
            {
                id: 7,
                title: "FoodDelivery App",
                category: "mobile",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Food delivery application connecting restaurants with customers for seamless ordering and delivery.",
                technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps API", "Push Notifications"],
                client: "Foodie Inc.",
                year: "2024",
                status: "Completed",
                link: "#",
                github: "#",
                details: "This app provides restaurant listings, menu browsing, real-time order tracking, driver assignment, and multiple payment options for a complete food delivery experience."
            },
            {
                id: 8,
                title: "LearnHub Online Education",
                category: "saas",
                image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Online learning platform with course creation, student management, and interactive learning tools.",
                technologies: ["React", "Python Django", "PostgreSQL", "Video Streaming", "LMS"],
                client: "EduTech Group",
                year: "2023",
                status: "Completed",
                link: "#",
                github: "#",
                details: "LearnHub offers course creation tools, video lessons, quizzes, student progress tracking, certification, and a marketplace for instructors to sell their courses."
            }
        ];
        
        // Expose projects array to other pages (homepage preview reads window.projects)
        window.projects = projects;

        const testimonials = [
            {
                id: 1,
                name: "Alex Johnson",
                role: "CEO, DriveX Inc.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5,
                text: "Duntech delivered an exceptional car rental platform that exceeded our expectations. Their attention to detail and technical expertise resulted in a seamless user experience that our customers love.",
                project: "DriveX Car Rental Platform"
            },
            {
                id: 2,
                name: "Sarah Williams",
                role: "Director, Eagle Contractors",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5,
                text: "The website Duntech created for us perfectly represents our brand and has significantly increased our online inquiries. Their team was professional, responsive, and delivered on time.",
                project: "Eagle Contractors Website"
            },
            {
                id: 3,
                name: "Michael Chen",
                role: "CTO, FinTech Solutions",
                avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                rating: 4.5,
                text: "FinTrack app has transformed how our users manage their finances. Duntech's development team demonstrated deep expertise in mobile technologies and created a robust, user-friendly application.",
                project: "FinTrack Mobile App"
            },
            {
                id: 4,
                name: "Jessica Park",
                role: "Product Manager, Retail Group",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                rating: 5,
                text: "ShopEasy has become our primary e-commerce platform, handling thousands of transactions daily. The system is reliable, scalable, and provides an excellent shopping experience.",
                project: "ShopEasy E-commerce Platform"
            }
        ];

        // ===== STATE =====
        let currentFilter = 'all';
        let visibleProjects = 6;
        let currentTestimonial = 0;
        let testimonialInterval;

        // ===== DOM ELEMENTS =====
        const header = document.getElementById('header');
        // Fallbacks for different templates: some pages use 'menu-btn' while others use 'mobileMenuBtn'
        const mobileMenuBtn = document.getElementById('mobileMenuBtn') || document.getElementById('menu-btn');
        const navMenu = document.getElementById('navMenu') || document.getElementById('mobile-menu') || document.querySelector('nav ul');
        const navLinks = document.querySelectorAll('.nav-link');
        const projectsGrid = document.getElementById('projectsGrid');
        const featuredGrid = document.getElementById('featuredGrid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const testimonialTrack = document.getElementById('testimonialTrack');
        const sliderDots = document.getElementById('sliderDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const projectModal = document.getElementById('projectModal');
        const closeProjectModal = document.getElementById('closeProjectModal');
        const projectModalContent = document.getElementById('projectModalContent');
        const backToTop = document.getElementById('backToTop');
        const currentYear = document.getElementById('currentYear');

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            currentYear.textContent = new Date().getFullYear();
            
            // Render initial content
            renderFeatured();
            renderProjects();
            renderTestimonials();
            
            // Setup event listeners
            setupEventListeners();
            
            // Start testimonial auto-slide
            startTestimonialAutoSlide();
            
            console.log('Duntech Portfolio loaded successfully!');
        });

        // ===== SETUP FUNCTIONS =====
        function setupEventListeners() {
            // Mobile menu toggle
            if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', closeMobileMenuOnClickOutside);
            
            // Header scroll effect
            window.addEventListener('scroll', handleScroll);
            
            // Navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', handleNavClick);
            });
            
            // Project filtering
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    filterProjects(filter);
                    
                    // Update active button
                    filterButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Load more projects
            loadMoreBtn.addEventListener('click', handleLoadMore);
            
            // Testimonial slider controls
            prevBtn.addEventListener('click', prevTestimonial);
            nextBtn.addEventListener('click', nextTestimonial);
            
            // Close project modal
            closeProjectModal.addEventListener('click', () => {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            // Close modal when clicking outside
            projectModal.addEventListener('click', (e) => {
                if (e.target === projectModal) {
                    projectModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Back to top button
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                // Escape to close modal
                if (e.key === 'Escape' && projectModal.style.display === 'flex') {
                    projectModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                
                // Left/Right for testimonial navigation
                if (e.key === 'ArrowLeft') prevTestimonial();
                if (e.key === 'ArrowRight') nextTestimonial();
            });
        }

        // ===== RENDER FUNCTIONS =====
        function renderProjects() {
            if (!projectsGrid) return;
            
            const filteredProjects = currentFilter === 'all' 
                ? projects.slice(0, visibleProjects)
                : projects.filter(p => p.category === currentFilter).slice(0, visibleProjects);
            
            projectsGrid.innerHTML = filteredProjects.map(project => `
                <div class="project-card" data-category="${project.category}">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="project-badge">${project.status}</div>
                        ${project.link && project.link !== '#' ? `
                            <a class="project-overlay" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} live demo">
                                <i class="fas fa-play"></i>
                                <span>Live Demo</span>
                            </a>
                        ` : ''}
                    </div>
                    <div class="project-content">
                        <div class="project-header">
                            <div>
                                <h3 class="project-title">${project.title}</h3>
                                <span class="project-category">${getCategoryName(project.category)}</span>
                            </div>
                        </div>
                        <p class="project-description">${project.description}</p>
                        
                        <div class="project-tech">
                            ${project.technologies.slice(0, 3).map(tech => `
                                <span class="tech-tag">${tech}</span>
                            `).join('')}
                            ${project.technologies.length > 3 ? 
                                `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''}
                        </div>
                        
                        <div class="project-footer">
                            <span style="color: var(--gray); font-size: 0.9rem;">
                                <i class="far fa-calendar"></i> ${project.year}
                            </span>
                            <div style="display:flex;gap:12px;align-items:center">
                                ${project.link && project.link !== '#' ? `
                                    <a href="${project.link}" class="btn btn-sm btn-accent" target="_blank" rel="noopener noreferrer">Live Demo <i class="fas fa-external-link-alt"></i></a>
                                ` : `<span style="color:var(--gray);font-size:0.9rem;">Demo coming</span>`}
                                <a href="#" class="project-link" onclick="showProjectDetails(${project.id}); return false;">View Details <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Show/hide load more button
            const totalFilteredProjects = currentFilter === 'all' 
                ? projects.length 
                : projects.filter(p => p.category === currentFilter).length;
            
            loadMoreBtn.style.display = visibleProjects >= totalFilteredProjects ? 'none' : 'block';
        }

        function renderFeatured() {
            if (!featuredGrid) return;
            const featured = projects.filter(p => p.link && p.link !== '#').slice(0, 3);
            if (featured.length === 0) {
                featuredGrid.innerHTML = `<p style="color:var(--gray); text-align:center;">No live demos available right now.</p>`;
                return;
            }

            featuredGrid.innerHTML = featured.map(p => `
                <div class="featured-card">
                    <div class="featured-image">
                        <img src="${p.image}" alt="${p.title}">
                    </div>
                    <div class="featured-content">
                        <h4>${p.title}</h4>
                        <p style="color:var(--gray);">${p.description}</p>
                        <div style="margin-top:12px; display:flex; gap:10px;">
                            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-accent">Live Demo</a>
                            <a href="#" onclick="showProjectDetails(${p.id}); return false;" class="btn btn-sm">View Details</a>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderTestimonials() {
            if (!testimonialTrack || !sliderDots) return;
            
            testimonialTrack.innerHTML = testimonials.map((testimonial, index) => `
                <div class="testimonial-slide" data-index="${index}">
                    <div class="testimonial-card">
                        <div class="testimonial-rating">
                            ${'★'.repeat(Math.floor(testimonial.rating))}
                            ${testimonial.rating % 1 !== 0 ? '½' : ''}
                            ${'☆'.repeat(5 - Math.ceil(testimonial.rating))}
                        </div>
                        <p class="testimonial-text">"${testimonial.text}"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">
                                <img src="${testimonial.avatar}" alt="${testimonial.name}">
                            </div>
                            <div class="author-info">
                                <h4>${testimonial.name}</h4>
                                <p>${testimonial.role}</p>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">
                                    <i class="fas fa-briefcase"></i> ${testimonial.project}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            
            sliderDots.innerHTML = testimonials.map((_, index) => `
                <button class="slider-dot ${index === 0 ? 'active' : ''}" 
                        data-index="${index}" 
                        onclick="goToTestimonial(${index})"></button>
            `).join('');
            
            updateTestimonialPosition();
        }

        // ===== EVENT HANDLERS =====
        function toggleMobileMenu() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }

        function closeMobileMenuOnClickOutside(e) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }

        function handleScroll() {
            // Header scroll effect
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Back to top button
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            
            // Update active nav link
            updateActiveNavLink();
        }

        function handleNavClick(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }

        function filterProjects(filter) {
            currentFilter = filter;
            visibleProjects = 6;
            renderProjects();
        }

        function handleLoadMore() {
            visibleProjects += 3;
            renderProjects();
        }

        function showProjectDetails(projectId) {
            const project = projects.find(p => p.id === projectId);
            if (!project) return;
            
            projectModalContent.innerHTML = `
                <div class="project-modal-content">
                    <div class="project-modal-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-modal-details">
                        <h3>${project.title}</h3>
                        <p style="color: var(--gray); margin-bottom: 20px; line-height: 1.7;">${project.details}</p>
                        
                        <div class="project-modal-meta">
                            <div class="meta-item">
                                <h4>Client</h4>
                                <p>${project.client}</p>
                            </div>
                            <div class="meta-item">
                                <h4>Year</h4>
                                <p>${project.year}</p>
                            </div>
                            <div class="meta-item">
                                <h4>Category</h4>
                                <p>${getCategoryName(project.category)}</p>
                            </div>
                            <div class="meta-item">
                                <h4>Status</h4>
                                <p>${project.status}</p>
                            </div>
                        </div>
                        
                        <div class="project-modal-tech">
                            <h4>Technologies Used</h4>
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `
                                    <span class="tech-tag-large">${tech}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="project-modal-links">
                            ${project.link && project.link !== '#' ? `
                                <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <i class="fas fa-external-link-alt"></i> Open website
                                </a>
                            ` : `
                                <span style="color: var(--gray); font-weight:600;">Live demo coming soon</span>
                            `}
                            ${project.github && project.github !== '#' ? `
                                <a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github"></i> View Code
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
            
            projectModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // ===== TESTIMONIAL FUNCTIONS =====
        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonialPosition();
            resetTestimonialAutoSlide();
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonialPosition();
            resetTestimonialAutoSlide();
        }

        function goToTestimonial(index) {
            currentTestimonial = index;
            updateTestimonialPosition();
            resetTestimonialAutoSlide();
        }

        function updateTestimonialPosition() {
            if (testimonialTrack) {
                testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            }
            
            // Update dots
            document.querySelectorAll('.slider-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
        }

        function startTestimonialAutoSlide() {
            testimonialInterval = setInterval(() => {
                nextTestimonial();
            }, 5000);
        }

        function resetTestimonialAutoSlide() {
            clearInterval(testimonialInterval);
            startTestimonialAutoSlide();
        }

        // ===== UTILITY FUNCTIONS =====
        function getCategoryName(category) {
            const categories = {
                'web': 'Web Application',
                'mobile': 'Mobile App',
                'ecommerce': 'E-commerce',
                'saas': 'SaaS Platform'
            };
            return categories[category] || category;
        }

        function updateActiveNavLink() {
            const sections = ['home', 'projects', 'services', 'testimonials', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const element = document.getElementById(section);
                const link = document.querySelector(`.nav-link[href="#${section}"]`);
                
                if (element && link) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            });
        }

        // ===== ANIMATE STATISTICS =====
        function animateStatistics() {
            const counters = document.querySelectorAll('.stat-number');
            const targets = [50, 30, 5, 15];
            const durations = [2000, 2000, 1500, 2000];
            
            counters.forEach((counter, index) => {
                const target = targets[index];
                const duration = durations[index];
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };
                
                updateCounter();
            });
        }

        // Start animation when page loads
        setTimeout(animateStatistics, 500);

        // ===== MAKE FUNCTIONS GLOBAL FOR ONCLICK HANDLERS =====
        window.showProjectDetails = showProjectDetails;
        window.prevTestimonial = prevTestimonial;
        window.nextTestimonial = nextTestimonial;
        window.goToTestimonial = goToTestimonial;
    