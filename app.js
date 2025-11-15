document.addEventListener('DOMContentLoaded', () => {

    // === 1. DATA SKILLS ===
    const hardSkills = [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'MySQL',
        'UI/UX Design',
        'Figma',
        'Wireframing',
        'Prototyping',
        'Microsoft Office',
        'GitHub'
    ];

    const softSkills = [
        'Adaptasi',
        'Kerja Tim',
        'Komunikasi',
        'Semangat Belajar',
        'Pemecahan Masalah',
        'Manajemen Waktu',
        'Kreativitas',
        'Detail Oriented'
    ];

    // === 2. PROJECT DATA ===
    const projects = [
        {
            id: 0,
            title: "Landing Page UMKM",
            stack: "HTML, CSS, JavaScript",
            description: "Sebuah landing page modern dan responsif yang dirancang untuk mempromosikan produk UMKM lokal. Fokus pada desain yang bersih, call-to-action yang jelas, dan optimasi kecepatan load.",
            image_url: "https://placehold.co/600x400/253745/CCD0CF?text=Landing+Page&font=poppins",
            demo_link: "#",
            github_link: "#"
        },
        {
            id: 1,
            title: "Sistem Kasir Sederhana (PHP)",
            stack: "PHP, MySQL, CSS",
            description: "Aplikasi kasir (Point of Sale) berbasis web sederhana yang dibuat dengan PHP natif dan database MySQL. Fitur termasuk manajemen produk, pencatatan transaksi, dan laporan penjualan sederhana.",
            image_url: "https://placehold.co/600x400/4A5C6A/CCD0CF?text=Sistem+Kasir&font=poppins",
            demo_link: "#",
            github_link: "#"
        },
        {
            id: 2,
            title: "Dashboard Monitoring Data",
            stack: "JavaScript, Chart.js, CSS",
            description: "Frontend untuk dashboard admin yang menampilkan visualisasi data menggunakan Chart.js. Data diambil dari API (dummy) dan ditampilkan dalam bentuk grafik bar, line, dan pie.",
            image_url: "https://placehold.co/600x400/253745/CCD0CF?text=Dashboard&font=poppins",
            demo_link: "#",
            github_link: "#"
        },
        {
            id: 3,
            title: "UI/UX Mobile App Food Finder",
            stack: "Figma, Prototyping",
            description: "Desain UI/UX dan prototipe interaktif untuk aplikasi mobile pencari makanan. Proses desain mencakup wireframing, high-fidelity design, dan prototyping di Figma.",
            image_url: "https://placehold.co/600x400/4A5C6A/CCD0CF?text=UI+UX+Design&font=poppins",
            demo_link: "#",
            github_link: "#"
        },
        {
            id: 4,
            title: "Portfolio v1",
            stack: "HTML, CSS",
            description: "Versi pertama portofolio personal saya. Proyek ini fokus pada penguasaan fundamental HTML semantik dan CSS layouting (Flexbox dan Grid).",
            image_url: "https://placehold.co/600x400/253745/CCD0CF?text=Portfolio+v1&font=poppins",
            demo_link: "#",
            github_link: "#"
        },
        {
            id: 5,
            title: "To-do App (JavaScript)",
            stack: "HTML, CSS, JavaScript",
            description: "Aplikasi To-do list sederhana menggunakan JavaScript murni. Fitur termasuk menambah, menghapus, dan menandai tugas selesai. Data disimpan di localStorage.",
            image_url: "https://placehold.co/600x400/4A5C6A/CCD0CF?text=Todo+App&font=poppins",
            demo_link: "#",
            github_link: "#"
        }
    ];

    // === 3. INITIALIZE CAROUSEL ===
    function initCarousel(skills, trackId) {
        const track = document.getElementById(trackId);
        if (!track) return;

        // Clear existing content
        track.innerHTML = '';

        // Create skill items twice untuk infinite loop
        const createSkillItems = () => {
            return skills.map(skill => {
                const item = document.createElement('div');
                item.className = 'skill-item';
                item.textContent = skill;
                return item;
            });
        };

        // Tambahkan items 2x untuk seamless loop
        const items1 = createSkillItems();
        const items2 = createSkillItems();
        
        items1.forEach(item => track.appendChild(item));
        items2.forEach(item => track.appendChild(item));
    }

    // Initialize both carousels
    initCarousel(hardSkills, 'hardskills-track');
    initCarousel(softSkills, 'softskills-track');

    // === 4. PENGATUR TEMA (THEME TOGGLER) ===
    const themeToggle = document.getElementById('theme-toggle');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme');

    // Inisialisasi tema saat load
    if (!currentTheme) {
        currentTheme = systemPrefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButtonAria(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButtonAria(newTheme);
    });

    function updateThemeButtonAria(theme) {
        const newLabel = theme === 'dark' 
            ? 'Ganti ke Light Mode' 
            : 'Ganti ke Dark Mode';
        themeToggle.setAttribute('aria-label', newLabel);
    }

    // === 5. ANIMASI SCROLL REVEAL (IntersectionObserver) ===
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // === 6. MODAL PROYEK ===
    const modal = document.getElementById('project-modal');
    const modalOverlay = modal.querySelector('.modal__overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalStack = document.getElementById('modal-stack');
    const modalDescription = document.getElementById('modal-description');
    const modalDemoLink = document.getElementById('modal-demo-link');
    const modalGithubLink = document.getElementById('modal-github-link');
    
    let lastFocusedElement;

    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }

        // Simpan elemen yang terakhir di-focus
        lastFocusedElement = document.activeElement;

        // Populate modal content
        modalTitle.textContent = project.title;
        modalImage.src = project.image_url;
        modalImage.alt = `Screenshot proyek ${project.title}`;
        modalStack.textContent = project.stack;
        modalDescription.innerHTML = project.description;
        
        // Set link dengan fallback
        if (project.demo_link && project.demo_link !== '#') {
            modalDemoLink.href = project.demo_link;
            modalDemoLink.style.display = 'inline-flex';
        } else {
            modalDemoLink.style.display = 'none';
        }
        
        if (project.github_link && project.github_link !== '#') {
            modalGithubLink.href = project.github_link;
            modalGithubLink.style.display = 'inline-flex';
        } else {
            modalGithubLink.style.display = 'none';
        }

        // Tampilkan modal
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus ke tombol close
        setTimeout(() => {
            modalCloseBtn.focus();
        }, 100);
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Kembalikan focus
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    // Event listener untuk membuka modal dari card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.getAttribute('data-project-id'));
            if (!isNaN(projectId)) {
                openModal(projectId);
            }
        });
        
        // Keyboard support untuk card
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = parseInt(card.getAttribute('data-project-id'));
                if (!isNaN(projectId)) {
                    openModal(projectId);
                }
            }
        });
    });
    
    // Event listener untuk menutup modal
    modalOverlay.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);

    // ESC key untuk tutup modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });

    // Trap focus di dalam modal
    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || modal.getAttribute('aria-hidden') === 'true') return;

        const focusableElements = modal.querySelectorAll(
            'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    });

    // === 7. TOMBOL "COPY EMAIL" ===
    const copyEmailBtn = document.getElementById('copy-email-btn');
    
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            const email = 'ridhomaulana25@gmail.com';
            
            try {
                await navigator.clipboard.writeText(email);
                
                // Simpan teks original
                const originalText = copyEmailBtn.textContent;
                
                // Update teks tombol
                copyEmailBtn.textContent = 'Tersalin!';
                copyEmailBtn.disabled = true;
                copyEmailBtn.style.opacity = '0.7';
                
                // Reset setelah 2 detik
                setTimeout(() => {
                    copyEmailBtn.textContent = originalText;
                    copyEmailBtn.disabled = false;
                    copyEmailBtn.style.opacity = '1';
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy email:', err);
                
                // Fallback: manual selection
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                
                // Tampilkan feedback
                alert(`Email disalin: ${email}`);
            }
        });
    }

    // === 8. SMOOTH SCROLL UNTUK ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip jika href hanya "#"
            if (href === '#' || !href) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === 9. UPDATE COPYRIGHT YEAR ===
    const copyrightEl = document.getElementById('footer-copyright');
    if (copyrightEl) {
        const year = new Date().getFullYear();
        copyrightEl.innerHTML = `&copy; ${year} Ridho Nur Maulana. Dibuat dengan cinta.`;
    }

    // === 10. LOG INFO (Development) ===
    console.log('Portfolio initialized successfully');
    console.log('Current theme:', currentTheme);
    console.log('Skills carousel loaded');

});