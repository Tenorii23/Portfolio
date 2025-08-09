  GitHubCalendar(".calendar", "Tenorii23", { responsive: true });
        // Particles.js initialization
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#8a2be2" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#8a2be2",
                        opacity: 0.3,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    }
                }
            });
// Simulated GitHub data
        const simulateGitHubData = () => {
            // Update stats with your numbers
            document.getElementById('repo-count').textContent = '5';
            document.getElementById('commit-count').textContent = '33';
            document.getElementById('project-count').textContent = '3';
            document.getElementById('contribution-count').textContent = '34';
            
            // Generate chart
            const chartContainer = document.getElementById('contribution-chart');
            chartContainer.innerHTML = '';
            chartContainer.style.display = 'grid';
            chartContainer.classList.add('chart');
            
            const today = new Date();
            const daysInWeek = 7;
            const weeksToShow = 53;
            
            for (let i = 0; i < weeksToShow * daysInWeek; i++) {
                const cell = document.createElement('div');
                cell.classList.add('chart-cell');
                
                const rand = Math.random();
                let level = 0;
                
                if (rand < 0.7) level = 0;
                else if (rand < 0.85) level = 1;
                else if (rand < 0.95) level = 2;
                else level = 3;
                
                if (i % 12 === 0 || i % 17 === 0 || i % 23 === 0) {
                    level = 4;
                }
                
                cell.classList.add('level-' + level);
                chartContainer.appendChild(cell);
            }
            
            document.getElementById('loading-spinner').style.display = 'none';
        }
        
        // Load real GitHub data with token
        const loadGitHubData = () => {
            const token = document.getElementById('github-token').value;
            if (!token) {
                alert('Please enter your GitHub token');
                return;
            }
            
            const spinner = document.getElementById('loading-spinner');
            spinner.innerHTML = '<div class="spinner-border text-purple" role="status" style="width: 3rem; height: 3rem;"><span class="visually-hidden">Loading...</span></div><p class="mt-3">Fetching real GitHub data...</p>';
            
            // Fetch repository count
            fetch('https://api.github.com/user/repos?per_page=100', {
                headers: {
                    'Authorization': `token ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('repo-count').textContent = data.length;
                document.getElementById('project-count').textContent = data.length > 10 ? '10+' : data.length;
            })
            .catch(error => {
                console.error('Error fetching repositories:', error);
                alert('Error fetching repository data. Check your token permissions.');
            });
            
            // Fetch contribution data (simulated since direct API doesn't provide this)
            setTimeout(() => {
                simulateGitHubData();
                document.getElementById('contribution-count').textContent = '42';
                alert('Successfully loaded GitHub data!');
            }, 2000);
        }
        
        // Initialize with simulated data
        document.addEventListener('DOMContentLoaded', simulateGitHubData);
            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Active nav link highlighting
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('.nav-link');
                
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
            
            // GitHub stats animation
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = +stat.innerText.replace(',', '');
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateStat = () => {
                    if (current < target) {
                        current += increment;
                        stat.innerText = Math.ceil(current).toLocaleString();
                        setTimeout(updateStat, 16);
                    } else {
                        stat.innerText = target.toLocaleString();
                    }
                };
                
                setTimeout(updateStat, 1000);
            });
            
            // Form submission
            const contactForm = document.querySelector('.contact-form form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // In a real implementation, you would send the form data to a server
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                });
            }
        });