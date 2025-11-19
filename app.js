document.addEventListener('DOMContentLoaded', () => {

    // === 1. DATA SKILLS ===
    const hardSkills = [
        { 
            name: 'HTML', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
        },
        { 
            name: 'CSS', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
        },
        { 
            name: 'JavaScript', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
        },
        { 
            name: 'PHP', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' 
        },
        { 
            name: 'MySQL', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
        },
        { 
            name: 'Figma', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' 
        },
        { 
            name: 'GitHub', 
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' 
        }
    ];

    const softSkills = [
        'Adaptasi',
        'Kerja Tim',
        'Semangat Belajar',
        'Pemecahan Masalah',
        'Manajemen Waktu',
        'Kreativitas',
        'Teliti dan Detail'
    ];

    // === 2. PROJECT DATA ===
    const projects = [
        {
            id: 0,
            title: "Dapoer Djawa",
            stack: "PHP, MySQL, CSS",
            description: "Sebuah sistem pemesanan dan pembayaran makanan online lengkap untuk Kedai Djawa, diimplementasikan menggunakan PHP, MySQL, HTML, dan CSS. Fitur utamanya mencakup Pemesanan Makanan (dengan keranjang belanja), Pembayaran Online, dan Pelacakan Status Order secara real-time. Sistem ini juga dilengkapi Dashboard Admin untuk mengelola dan memperbarui status pesanan, serta Dashboard Owner untuk memonitor total pendapatan.",
            catatan: "*Catatan: Proyek ini belum di-host karena memerlukan lingkungan server PHP/MySQL; detail implementasi hanya dapat dilihat melalui tangkapan layar (screenshot)",
            images: [
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763299527/Cuplikan_layar_2025-11-16_202310_h1kqcn.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763299527/Cuplikan_layar_2025-11-16_202155_rtslie.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763299527/Cuplikan_layar_2025-11-16_202234_o2etdz.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763299526/Cuplikan_layar_2025-11-16_202252_alvula.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763387383/Cuplikan_layar_2025-11-17_203705_stzg7k.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763387383/Cuplikan_layar_2025-11-17_203720_f1vsoe.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763387382/Cuplikan_layar_2025-11-17_204455_yfdjjz.png",
            ],
            demo_link: null,
            github_link: 'https://github.com/R16-Code/Dapoer_Djawa',
            figma_link: null
        },
        {
            id: 1,
            title: "Moviepedia",
            stack: "PHP, MySQL, Tailwind",
            description: "Moviepedia adalah platform katalog film berbasis web dinamis, dibangun menggunakan PHP native, MySQL, dan styling menggunakan Tailwind CSS. Sistem ini menyediakan fitur penelusuran katalog film dengan filter genre, sistem autentikasi pengguna, fitur Watchlist pribadi untuk menyimpan film favorit, dan tampilan detail film lengkap dengan rating dan trailer YouTube. Dilengkapi juga Dashboard Admin untuk manajemen CRUD (Create, Read, Update, Delete) data film.",
            catatan: "*Catatan: Proyek ini belum di-host karena memerlukan lingkungan server PHP/MySQL; detail implementasi hanya dapat dilihat melalui tangkapan layar (screenshot).",
            images: [
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763302044/Cuplikan_layar_2025-11-16_210445_cmua9x.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763302045/Cuplikan_layar_2025-11-16_210554_oqwd8b.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763302854/Cuplikan_layar_2025-11-16_211628_cye1cs.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763302044/Cuplikan_layar_2025-11-16_210635_b5unow.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763302043/Cuplikan_layar_2025-11-16_210644_sydp9l.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763302044/Cuplikan_layar_2025-11-16_210655_pnxmqx.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763386415/Cuplikan_layar_2025-11-17_203224_yn8qrw.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763386415/Cuplikan_layar_2025-11-17_203236_oxpapv.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763386414/Cuplikan_layar_2025-11-17_203244_ajlaut.png"
            ],
            demo_link: null,
            github_link: "https://github.com/R16-Code/moviepedia",
            figma_link: null
        },
        {
            id: 2,
            title: "AERO",
            stack: "Figma",
            description: "AERO adalah proyek perancangan Sistem Manajemen Tiket Elektronik (ETMS) untuk PT Kereta Api Aero, bertujuan menggantikan sistem tiket manual dan memfasilitasi pembelian online. Fitur utamanya mencakup pembelian tiket online, pembayaran terintegrasi, dan penerbitan E-Tiket digital. Proyek ini juga mencakup Dashboard Admin/Direktur dengan visualisasi data pendapatan dan laporan penjualan strategis.",
            catatan: "*Catatan: Proyek ini merupakan hasil Tugas Akhir mata kuliah Rancang Kebutuhan Perangkat Lunak dan tidak didasarkan pada implementasi kasus nyata (real case) di perusahaan terkait.",
            images: [
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303521/LOGIN_hkmvqt.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303524/DASHBOARD_byo4r7.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303418/iPhone_16_-_9_bnxmuk.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303419/iPhone_16_-_10_vjtknc.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303420/iPhone_16_-_11_venris.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303428/iPhone_16_-_12_ldcsvs.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303519/iPhone_16_-_13_qevy1q.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303520/iPhone_16_-_15_edh0fi.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303521/iPhone_16_-_16_fbcqtq.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303414/iPhone_16_-_6_ogtraa.png",
                "https://res.cloudinary.com/drnnwysol/image/upload/v1763303415/iPhone_16_-_7_wv6hpx.png"
            ],
            demo_link: null,
            github_link: null,
            figma_link: "https://www.figma.com/proto/WyieoHPQBtOYxcjuxNFq4g/Untitled?node-id=0-1&t=9NKCHwbuBpxXPPqH-1"
        },
        {
            id: 3,
            title: "UI/UX Mobile App Food Finder",
            stack: "Figma, Prototyping",
            description: "Desain UI/UX dan prototipe interaktif untuk aplikasi mobile pencari makanan. Proses desain mencakup wireframing, high-fidelity design, dan prototyping di Figma.",
            images: [
                "https://placehold.co/600x800/4A5C6A/CCD0CF?text=Food+Finder+-+Splash&font=poppins",
                "https://placehold.co/600x800/4A5C6A/CCD0CF?text=Food+Finder+-+Home&font=poppins",
                "https://placehold.co/600x800/4A5C6A/CCD0CF?text=Food+Finder+-+Detail&font=poppins",
                "https://placehold.co/600x800/4A5C6A/CCD0CF?text=Food+Finder+-+Map&font=poppins"
            ],
            demo_link: null,
            github_link: null,
            figma_link: "https://www.figma.com/your-design-link"
        },
        {
            id: 4,
            title: "Portfolio v1",
            stack: "HTML, CSS",
            description: "Versi pertama portofolio personal saya. Proyek ini fokus pada penguasaan fundamental HTML semantik dan CSS layouting (Flexbox dan Grid).",
            images: [
                "https://placehold.co/800x600/253745/CCD0CF?text=Portfolio+v1+-+Home&font=poppins",
                "https://placehold.co/800x600/253745/CCD0CF?text=Portfolio+v1+-+Projects&font=poppins"
            ],
            demo_link: null,
            github_link: null,
            figma_link: null
        },
        {
            id: 5,
            title: "To-do App (JavaScript)",
            stack: "HTML, CSS, JavaScript",
            description: "Aplikasi To-do list sederhana menggunakan JavaScript murni. Fitur termasuk menambah, menghapus, dan menandai tugas selesai. Data disimpan di localStorage.",
            images: [
                "https://placehold.co/800x600/4A5C6A/CCD0CF?text=Todo+App+-+List+View&font=poppins",
                "https://placehold.co/800x600/4A5C6A/CCD0CF?text=Todo+App+-+Add+Task&font=poppins",
                "https://placehold.co/800x600/4A5C6A/CCD0CF?text=Todo+App+-+Completed&font=poppins"
            ],
            demo_link: null,
            github_link: null,
            figma_link: null
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
                
                // Cek apakah skill punya logo (hard skills) atau hanya text (soft skills)
                if (typeof skill === 'object' && skill.logo) {
                    // Hard skill dengan logo
                    item.innerHTML = `
                        <img src="${skill.logo}" alt="${skill.name}" class="skill-item__logo">
                        <span class="skill-item__name">${skill.name}</span>
                    `;
                } else {
                    // Soft skill hanya text
                    item.textContent = skill;
                }
                
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
    const modalCarousel = document.getElementById('modal-carousel');
    const modalCarouselTrack = document.getElementById('modal-carousel-track');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');
    const modalStack = document.getElementById('modal-stack');
    const modalDescription = document.getElementById('modal-description');
    const modalCatatan = document.getElementById('modal-catatan');
    const modalDemoLink = document.getElementById('modal-demo-link');
    const modalGithubLink = document.getElementById('modal-github-link');
    const modalFigmaLink = document.getElementById('modal-figma-link');
    
    let lastFocusedElement;
    let currentImageIndex = 0;
    let currentProject = null;

    function updateCarousel() {
        if (!currentProject || !currentProject.images) return;
        
        const offset = -currentImageIndex * 100;
        modalCarouselTrack.style.transform = `translateX(${offset}%)`;
        
        // Update button states
        modalPrevBtn.disabled = currentImageIndex === 0;
        modalNextBtn.disabled = currentImageIndex === currentProject.images.length - 1;
    }

    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }

        currentProject = project;
        currentImageIndex = 0;

        // Simpan elemen yang terakhir di-focus
        lastFocusedElement = document.activeElement;

        // Populate modal content
        modalTitle.textContent = project.title;
        modalStack.textContent = project.stack;
        modalDescription.innerHTML = project.description;
        modalCatatan.innerHTML = project.catatan;

        
        // Build carousel images
        modalCarouselTrack.innerHTML = '';
        if (project.images && project.images.length > 0) {
            project.images.forEach((imgSrc, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgElement.alt = `${project.title} - Screenshot ${index + 1}`;
                imgElement.className = 'modal__carousel-image';
                modalCarouselTrack.appendChild(imgElement);
            });
            
            // Show/hide navigation buttons
            if (project.images.length > 1) {
                modalPrevBtn.style.display = 'flex';
                modalNextBtn.style.display = 'flex';
            } else {
                modalPrevBtn.style.display = 'none';
                modalNextBtn.style.display = 'none';
            }
        }
        
        updateCarousel();
        
        // Set links dengan fallback
        if (project.demo_link) {
            modalDemoLink.href = project.demo_link;
            modalDemoLink.style.display = 'inline-flex';
        } else {
            modalDemoLink.style.display = 'none';
        }
        
        if (project.github_link) {
            modalGithubLink.href = project.github_link;
            modalGithubLink.style.display = 'inline-flex';
        } else {
            modalGithubLink.style.display = 'none';
        }
        
        if (project.figma_link) {
            modalFigmaLink.href = project.figma_link;
            modalFigmaLink.style.display = 'inline-flex';
        } else {
            modalFigmaLink.style.display = 'none';
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
        currentProject = null;
        currentImageIndex = 0;
        
        // Kembalikan focus
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    // Carousel navigation
    modalPrevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateCarousel();
        }
    });

    modalNextBtn.addEventListener('click', () => {
        if (currentProject && currentImageIndex < currentProject.images.length - 1) {
            currentImageIndex++;
            updateCarousel();
        }
    });

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
        
        // Arrow keys untuk navigasi carousel
        if (modal.getAttribute('aria-hidden') === 'false') {
            if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
                currentImageIndex--;
                updateCarousel();
            } else if (e.key === 'ArrowRight' && currentProject && currentImageIndex < currentProject.images.length - 1) {
                currentImageIndex++;
                updateCarousel();
            }
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
        const originalText = copyEmailBtn.textContent;

        copyEmailBtn.addEventListener('click', async () => {
            const email = 'ridhomaulana25@gmail.com';
            
            try {
                await navigator.clipboard.writeText(email);
                
                // Berhasil! Ubah teks
                copyEmailBtn.textContent = 'Copied';
                copyEmailBtn.disabled = true;
                
                // Kembalikan setelah 2 detik
                setTimeout(() => {
                    copyEmailBtn.textContent = originalText;
                    copyEmailBtn.disabled = false;
                }, 2000);
                
            } catch (err) {
                // Ini akan gagal jika Anda membuka dari file:///
                console.error('Gagal menyalin:', err);
                alert('Gagal menyalin. Silakan jalankan dari server (Live Server).');
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
        copyrightEl.innerHTML = `&copy; Copyright ${year} Ridho Nur Maulana. All Rights Reserved`;
    }

    // === 10. LOG INFO (Development) ===
    console.log('Portfolio initialized successfully');
    console.log('Current theme:', currentTheme);
    console.log('Skills carousel loaded');

});