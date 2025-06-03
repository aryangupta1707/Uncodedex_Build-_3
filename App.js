// --- Navigation Bar Responsiveness ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
            // Toggle aria-expanded for accessibility
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });

        // Close mobile menu when a navigation link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });

        // --- Modals (Contact Success, Generic Info, Chat, Portfolio Details) ---
        const successModal = document.getElementById('success-modal');
        const infoModal = document.getElementById('info-modal');
        const chatModal = document.getElementById('chat-modal');
        const portfolioDetailsModal = document.getElementById('portfolio-details-modal');

        // Function to open a modal
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('show');
                modal.setAttribute('aria-hidden', 'false');
                // Focus on the first interactive element inside the modal for accessibility
                const firstFocusableElement = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (firstFocusableElement) {
                    firstFocusableElement.focus();
                }
            }
        }

        // Function to close a modal
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('show');
                modal.setAttribute('aria-hidden', 'true');
            }
        }

        // Event listeners for closing modals using the 'x' button
        document.querySelectorAll('.modal-close-button').forEach(button => {
            button.addEventListener('click', (event) => {
                closeModal(event.target.closest('.modal').id);
            });
        });

        // Close modal if user clicks outside of it
        window.addEventListener('click', (event) => {
            if (event.target === successModal) {
                closeModal('success-modal');
            }
            if (event.target === infoModal) {
                closeModal('info-modal');
            }
            if (event.target === chatModal) {
                closeModal('chat-modal');
            }
            if (event.target === portfolioDetailsModal) {
                closeModal('portfolio-details-modal');
            }
        });

        // --- Dynamic Button Handlers ---
        function openInfoModal(type) {
            const titleElement = document.getElementById('infoModalTitle');
            const messageElement = document.getElementById('infoModalMessage');

            switch (type) {
                case 'training':
                    titleElement.textContent = 'College Training Programs';
                    messageElement.textContent = 'Our training programs are designed to equip students with in-demand skills. We offer flexible modules and experienced trainers. Contact us to discuss a custom curriculum for your institution!';
                    break;
                case 'webPortfolio':
                    titleElement.textContent = 'View Our Web Portfolio';
                    messageElement.textContent = 'Explore our diverse portfolio of custom websites, from e-commerce to corporate solutions. Each project is crafted with precision and a focus on user experience. Visit our dedicated portfolio page for more details!';
                    break;
                case 'applyTrainer':
                    titleElement.textContent = 'Apply to Be a Trainer';
                    messageElement.textContent = 'Are you a passionate expert in tech? Join our team of highly skilled trainers! We offer competitive compensation and a chance to shape the next generation of talent. Please fill out our detailed application form on the "Join Our Team" page.';
                    break;
                case 'allCaseStudies':
                    titleElement.textContent = 'Our Case Studies';
                    messageElement.textContent = 'Dive deeper into our success stories! Our case studies provide detailed insights into how we\'ve helped colleges and businesses achieve their goals. From improved student placements to enhanced online presence, see the impact of our work.';
                    break;
                case 'exploreServices':
                    titleElement.textContent = 'Explore Our Services';
                    messageElement.textContent = 'Thank you for your interest in our services! You can find detailed information about our College Training Programs and Custom Website Development services in the "Our Core Services" section below.';
                    break;
                case 'freeConsultation':
                    titleElement.textContent = 'Get a Free Consultation';
                    messageElement.textContent = 'We\'d love to discuss your needs! Please fill out the contact form at the bottom of the page, and we will get in touch to schedule your free consultation.';
                    break;
                // New Course Details for Courses Section
                case 'courseJava':
                    titleElement.textContent = 'Advanced Java & Spring Boot';
                    messageElement.textContent = 'This course covers core to advanced Java concepts, including object-oriented programming, data structures, and mastering the Spring Boot framework for enterprise application development. Prerequisites: Basic programming knowledge.';
                    break;
                case 'coursePython':
                    titleElement.textContent = 'Python for Data Science';
                    messageElement.textContent = 'Learn Python from scratch, then dive into data manipulation with Pandas, scientific computing with NumPy, data visualization with Matplotlib/Seaborn, and an introduction to Machine Learning algorithms. Prerequisites: None.';
                    break;
                case 'courseReact':
                    titleElement.textContent = 'React JS Frontend Development';
                    messageElement.textContent = 'Build dynamic and responsive user interfaces using React.js. Topics include components, state management (Redux/Context API), routing, and integration with REST APIs. Prerequisites: HTML, CSS, JavaScript.';
                    break;
                case 'courseSQL':
                    titleElement.textContent = 'SQL & Database Management';
                    messageElement.textContent = 'Understand relational database concepts, write complex SQL queries, manage databases, and learn about database design principles. Essential for any developer or data professional. Prerequisites: None.';
                    break;
                case 'courseDSA':
                    titleElement.textContent = 'Data Structures & Algorithms';
                    messageElement.textContent = 'A crucial course for competitive programming and technical interviews. Covers arrays, linked lists, trees, graphs, sorting, searching, and algorithm analysis. Prerequisites: Basic programming in any language (Java/Python preferred).';
                    break;
                case 'courseCloud':
                    titleElement.textContent = 'Cloud Computing Fundamentals';
                    messageElement.textContent = 'An introductory course to cloud computing concepts, services, and deployment models across major providers like AWS, Azure, and Google Cloud. Understand cloud benefits and basic setup. Prerequisites: Basic IT literacy.';
                    break;
                default:
                    titleElement.textContent = 'Information';
                    messageElement.textContent = 'More information coming soon!';
            }
            openModal('info-modal');
        }

        // --- Portfolio Details Modal Logic ---
        function openPortfolioDetailsModal(projectId) {
            const projects = {
                'ecommerce': {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4vhkUk47QrrdD3PndZhxfkh2UuWvRE5gpA2Y0PeR8ZwTuaRTq9BTKB_oxwD9j2g-GFQ&usqp=CAU',
                    title: 'E-commerce Platform for Retailer',
                    description: 'Developed a robust and scalable e-commerce platform for a growing fashion retailer. Features included secure payment gateways, inventory management, customer accounts, and an intuitive product catalog.',
                    challenge: 'The client needed a fast, secure, and user-friendly online store capable of handling high traffic and a large product catalog, replacing an outdated system with poor performance.',
                    solution: 'We built a custom solution using modern frontend frameworks and a reliable backend, integrating with popular payment processors and optimizing for search engines. Implemented lazy loading for images and a CDN for asset delivery.',
                    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'AWS S3', 'Webpack'],
                    results: 'Achieved a 40% increase in online sales within the first three months, reduced page load times by 60%, and significantly improved customer satisfaction rates due to enhanced user experience.'
                },
                'corporate': {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85hGXVK5QcRaRUlkbciGQbWW7abk1un-Ddg&s',
                    title: 'Corporate Website for Tech Firm',
                    description: 'Designed and developed a modern, responsive corporate website for a leading tech consulting firm, focusing on showcasing their services and expertise effectively.',
                    challenge: 'The client required a refreshed brand image online, with a professional yet approachable design that clearly communicated their complex services to diverse clients globally. SEO performance was also critical.',
                    solution: 'We crafted a custom design adhering to brand guidelines, implemented a CMS for easy content updates, and performed extensive SEO optimization including keyword research, technical SEO, and content strategy guidance.',
                    tech: ['HTML5', 'CSS3', 'JavaScript', 'WordPress (Custom Theme)', 'Yoast SEO', 'Google Analytics'],
                    results: 'Increased organic traffic by 80% within six months, improved bounce rate by 15%, and received positive feedback on the modern design and ease of navigation from clients and partners.'
                },
                'dsaTraining': {
                    img: 'https://www.dsaict.eu/web/image/website/1/logo?unique=b9b8e5d',
                    title: 'DSA Training for Engineering College',
                    description: 'Successfully delivered a 6-week intensive Data Structures & Algorithms training program for final-year engineering students, significantly boosting their technical interview readiness.',
                    challenge: 'Students lacked practical problem-solving skills and confidence in DSA, leading to lower conversion rates in campus placements for top tech companies. The college needed a structured and engaging program.',
                    solution: 'Developed a custom curriculum focusing on hands-on coding, daily practice problems, mock interviews, and personalized doubt-solving sessions. Utilized a blend of online labs and in-person lectures.',
                    tech: ['Java', 'Python', 'Competitive Programming Platforms', 'Online Judge Systems', 'LMS Integration'],
                    results: 'A 25% increase in student placements in product-based companies, with 90% of participating students reporting significant improvement in their problem-solving abilities and interview confidence.'
                }
            };

            const project = projects[projectId];
            if (project) {
                document.getElementById('portfolioDetailsImage').src = project.img;
                document.getElementById('portfolioDetailsModalTitle').textContent = project.title;
                document.getElementById('portfolioDetailsDescription').textContent = project.description;
                document.getElementById('portfolioDetailsChallenge').textContent = project.challenge;
                document.getElementById('portfolioDetailsSolution').textContent = project.solution;
                document.getElementById('portfolioDetailsResults').textContent = project.results;

                const techList = document.getElementById('portfolioDetailsTech');
                techList.innerHTML = ''; // Clear previous tech list
                project.tech.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    techList.appendChild(li);
                });

                openModal('portfolio-details-modal');
            } else {
                openInfoModal('allCaseStudies'); // Fallback if project not found
            }
        }


        // --- Contact Form Submission (Frontend only) ---
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            console.log('Contact Form Submitted:', formData);
            // In a real application, you would send formData to a server here (e.g., using fetch API)
            // For demo, we just show a success modal.
            openModal('success-modal'); // Show success modal
            contactForm.reset(); // Clear the form
        });

        // --- Floating Chat Button ---
        const chatButton = document.getElementById('chat-button');
        chatButton.addEventListener('click', () => {
            openModal('chat-modal');
        });


        // --- Dynamic Numbers Counter (On Scroll) ---
        function animateNumber(id, start, end, duration) {
            const obj = document.getElementById(id);
            if (!obj) return;

            let current = start;
            const range = end - start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));

            const timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

        // --- Intersection Observer for Scroll Animations & Number Counters ---
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        const observerOptions = {
            root: null, /* viewport */
            rootMargin: '0px',
            threshold: 0.1 /* 10% of element visible */
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Special handling for numbers section
                    if (entry.target.classList.contains('numbers-section')) {
                        document.querySelectorAll('.number-item h3').forEach(numElement => {
                            const target = parseInt(numElement.dataset.target);
                            // Ensure animation only runs once per element
                            if (!numElement.dataset.animated) {
                                animateNumber(numElement.id, 0, target, 1000); // Animate over 2 seconds
                                numElement.dataset.animated = 'true'; // Mark as animated
                            }
                        });
                    }
                    // For other elements, unobserve immediately after animation
                    if (!entry.target.classList.contains('numbers-section')) {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        animateElements.forEach(element => {
            observer.observe(element);
        });

        // --- Testimonial Carousel Logic ---
        const carousel = document.getElementById('testimonial-carousel');
        const dotsContainer = document.getElementById('testimonial-dots');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            const slides = document.querySelectorAll('.testimonial-card');
            const totalSlides = slides.length;

            if (totalSlides === 0) return; // Prevent errors if no slides

            // Handle wrapping
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            // Calculate offset dynamically based on current card width and margin
            const firstSlide = slides[0];
            // Ensure computed styles are available and parse them
            const slideMarginLeft = parseFloat(getComputedStyle(firstSlide).marginLeft) || 0;
            const slideMarginRight = parseFloat(getComputedStyle(firstSlide).marginRight) || 0;
            const cardWidthWithMargin = firstSlide.offsetWidth + slideMarginLeft + slideMarginRight;
            const offset = -currentSlide * cardWidthWithMargin;
            carousel.style.transform = `translateX(${offset}px)`;

            // Update dots
            document.querySelectorAll('.dot').forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function startCarousel() {
            stopCarousel(); // Clear any existing interval
            slideInterval = setInterval(nextSlide, 2000); // Change slide every 5 seconds
        }

        function stopCarousel() {
            clearInterval(slideInterval);
        }

        // Initialize dots and start carousel when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            // Small delay to ensure elements are rendered before calculating widths
            setTimeout(() => {
                const slides = document.querySelectorAll('.testimonial-card');
                if (slides.length > 0) {
                    dotsContainer.innerHTML = ''; // Clear existing dots
                    for (let i = 0; i < slides.length; i++) {
                        const dot = document.createElement('span');
                        dot.classList.add('dot');
                        dot.dataset.slide = i;
                        dot.addEventListener('click', () => {
                            stopCarousel(); // Stop auto-play on manual navigation
                            showSlide(i);
                            startCarousel(); // Restart auto-play
                        });
                        dotsContainer.appendChild(dot);
                    }
                    showSlide(0); // Show the first slide initially
                    startCarousel(); // Start auto-play
                }
            }, 100);
        });

        // Handle window resize for carousel responsiveness
        window.addEventListener('resize', () => {
            showSlide(currentSlide); // Recalculate position on resize
        });

        // Pause carousel on hover
        if (carousel) {
            carousel.closest('.testimonial-carousel-container').addEventListener('mouseenter', stopCarousel);
            carousel.closest('.testimonial-carousel-container').addEventListener('mouseleave', startCarousel);
        }


        // --- Back to Top Button Logic ---
        const backToTopButton = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // --- Hero Heading Typing Effect Logic ---
        const heroHeadingElement = document.getElementById('hero-heading');
        const fullText = 'Empowering Futures Through <span class="yellow-text">Expert Training</span> & <span class="green-text">Innovative Web Solutions</span>';

        function applyHeroHeadingAnimation() {
            heroHeadingElement.innerHTML = fullText; // Always set the full text

            if (window.innerWidth >= 768) { // Apply typing animation for desktop/tablet
                heroHeadingElement.classList.add('typing-active'); // Add class to apply animation styles
            } else { // For mobile, show full text and no animation
                heroHeadingElement.classList.add('typing-active'); // Remove class to remove animation styles
            }
        }

        // Initialize hero heading on page load
        document.addEventListener('DOMContentLoaded', () => {
            applyHeroHeadingAnimation();
        });

        // Handle hero heading responsiveness on window resize
        let lastScreenWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            const currentScreenWidth = window.innerWidth;
            // Re-trigger animation only if a breakpoint (768px) is crossed
            const breakpointCrossed = (lastScreenWidth < 768 && currentScreenWidth >= 768) ||
                (lastScreenWidth >= 768 && currentScreenWidth < 768);

            if (breakpointCrossed) {
                applyHeroHeadingAnimation();
            }
            lastScreenWidth = currentScreenWidth;
        });


        // --- Dynamic Chatbot Logic (LLM Integration) ---
        const chatInput = document.getElementById('chat-input');
        const sendChatBtn = document.getElementById('send-chat-btn');
        const chatHistoryDiv = document.getElementById('chat-history');

        // chatHistory stores the conversation for the LLM context.
        // It starts with an initial message from the model.
        let chatHistory = [{ role: "model", parts: [{ text: "Hello! How can I help you today?" }] }];

        // Function to display a message in the chat history UI
        function displayMessage(role, text) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', role);
            messageDiv.textContent = text;
            chatHistoryDiv.appendChild(messageDiv);
            chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight; // Auto-scroll to the latest message
        }

        // Function to send a message to the LLM and get a response
        async function sendMessage() {
            const prompt = chatInput.value.trim();
            if (prompt === '') return; // Do not send empty messages

            displayMessage('user', prompt); // Display user's message in UI
            chatHistory.push({ role: "user", parts: [{ text: prompt }] }); // Add user's message to history
            chatInput.value = ''; // Clear the input field

            sendChatBtn.disabled = true; // Disable send button to prevent multiple submissions
            chatInput.disabled = true; // Disable input field
            displayMessage('bot', 'Typing...'); // Show a "Typing..." indicator from the bot

            const payload = { contents: chatHistory };
            const apiKey = ""; // IMPORTANT: Leave this as an empty string. Canvas will inject the key at runtime.
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    // If the API call itself failed (e.g., 4xx, 5xx status codes)
                    const errorBody = await response.text();
                    throw new Error(`API error: ${response.status} ${response.statusText} - ${errorBody}`);
                }

                const result = await response.json();

                // Remove the "Typing..." indicator from the UI
                if (chatHistoryDiv.lastChild && chatHistoryDiv.lastChild.textContent === 'Typing...') {
                    chatHistoryDiv.lastChild.remove();
                }


                // Check if the response contains valid content from the model
                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const botResponse = result.candidates[0].content.parts[0].text;
                    displayMessage('bot', botResponse); // Display the bot's actual response
                    chatHistory.push({ role: "model", parts: [{ text: botResponse }] }); // Add bot's response to history
                } else {
                    displayMessage('bot', 'Sorry, I could not get a meaningful response. Please try again or rephrase.');
                }
            } catch (error) {
                console.error('Error fetching from Gemini API:', error);
                // Ensure typing indicator is removed if an error occurs
                if (chatHistoryDiv.lastChild && chatHistoryDiv.lastChild.textContent === 'Typing...') {
                    chatHistoryDiv.lastChild.remove();
                }
                displayMessage('bot', 'Error connecting to the AI. Please check your internet connection or try again later.');
            } finally {
                sendChatBtn.disabled = false; // Re-enable send button
                chatInput.disabled = false; // Re-enable input field
                chatInput.focus(); // Put focus back on the input for convenience
            }
        }

        // Event listener for send button click
        sendChatBtn.addEventListener('click', sendMessage);
        // Event listener for Enter key press in the input field
        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' && !sendChatBtn.disabled) { // Only send if button is not disabled
                sendMessage();
            }
        });

        // --- Site-wide Search Functionality ---
        const searchIconBtn = document.getElementById('search-icon-btn');
        const searchBar = document.getElementById('search-bar');
        const searchInput = document.getElementById('search-input');
        const searchSubmitBtn = document.getElementById('search-submit-btn');

        searchIconBtn.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = ''; // Clear input when closing
            }
        });

        searchSubmitBtn.addEventListener('click', () => {
            performSearch(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });

        function performSearch(query) {
            query = query.toLowerCase().trim();
            if (!query) {
                alert('Please enter a search term.');
                return;
            }

            // Basic client-side search: highlight matching sections
            const sections = document.querySelectorAll('section');
            let found = false;
            let firstMatchId = '';

            sections.forEach(section => {
                const sectionText = section.textContent.toLowerCase();
                if (sectionText.includes(query)) {
                    if (!found) {
                        firstMatchId = section.id;
                    }
                    found = true;
                    // In a real app, you'd show a results page or more sophisticated highlighting
                    console.log(`Found "${query}" in section: #${section.id}`);
                }
            });

            if (found) {
                alert(`Found results for "${query}". Scrolling to the first match.`);
                if (firstMatchId) {
                    const targetElement = document.getElementById(firstMatchId);
                    if (targetElement) {
                        const headerOffset = document.querySelector('header').offsetHeight;
                        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerOffset - 20; // Add buffer

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }
            } else {
                alert(`No results found for "${query}". Please try a different search term.`);
            }
            searchBar.classList.remove('active'); // Close search bar after search
            searchInput.value = '';
        }

        // --- Interactive FAQ Accordion ---
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isActive = header.classList.contains('active');

                // Close all other active accordions
                document.querySelectorAll('.accordion-header.active').forEach(activeHeader => {
                    if (activeHeader !== header) {
                        activeHeader.classList.remove('active');
                        activeHeader.nextElementSibling.classList.remove('active');
                        activeHeader.nextElementSibling.style.maxHeight = null;
                        activeHeader.nextElementSibling.style.paddingTop = '0';
                        activeHeader.nextElementSibling.style.paddingBottom = '0';
                    }
                });

                // Toggle current accordion
                header.classList.toggle('active', !isActive);
                content.classList.toggle('active', !isActive);

                if (!isActive) {
                    content.style.maxHeight = content.scrollHeight + "px"; // Set max-height to scroll height
                    content.style.paddingTop = '1rem';
                    content.style.paddingBottom = '1.5rem';
                } else {
                    content.style.maxHeight = null; // Collapse
                    content.style.paddingTop = '0';
                    content.style.paddingBottom = '0';
                }
            });
        });
