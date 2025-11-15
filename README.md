Portofolio Personal v2 - Ridho Nur Maulana

Ini adalah kode sumber untuk website portofolio personal saya. Dibuat menggunakan HTML, CSS, dan JavaScript murni, tanpa framework atau library eksternal (kecuali Google Fonts).

Website ini dirancang untuk menjadi modern, responsif, dark-mode-first, dan mendukung dua bahasa (Indonesia & Inggris).

Fitur Utama

Desain Responsif: Tampil baik di desktop, tablet, dan mobile.

Dual Theme: Mode Gelap (default) dan Mode Terang. Pilihan disimpan di localStorage.

Bilingual (i18n): Mendukung Bahasa Indonesia (default) dan Inggris. Pilihan disimpan di localStorage.

Animasi Modern: Efek scroll reveal menggunakan IntersectionObserver.

Modal Proyek: Detail proyek muncul dalam modal yang interaktif.

Aksesibilitas: Dibangun dengan HTML semantik dan atribut ARIA (keyboard-friendly, ramah screen reader).

Tanpa Framework: Kode murni untuk performa maksimal dan pemahaman fundamental.

Struktur File

/
├── index.html          (Struktur utama website)
├── styles.css          (Semua styling, dark/light mode)
├── app.js              (Semua logika: theme, i18n, modal, scroll)
│
├── /lang/
│   ├── id.json         (Semua teks Bahasa Indonesia)
│   └── en.json         (Semua teks Bahasa Inggris)
│
├── /assets/
│   ├── CV.pdf          (Placeholder untuk CV Anda)
│   └── profile.png     (Placeholder untuk foto profil)
│
└── README.md           (Dokumentasi ini)


Cara Menggunakan dan Modifikasi

1. Mengganti Konten Teks (About, Hero, dll.)

Semua teks di website ini diatur oleh file JSON di dalam folder /lang/.

Buka /lang/id.json untuk mengubah teks versi Bahasa Indonesia.

Buka /lang/en.json untuk mengubah teks versi Bahasa Inggris.

Anda hanya perlu mencari key yang sesuai (misal: "hero.title": "Ridho Nur Maulana") dan ganti nilainya.

2. Mengubah Bahasa Default

Bahasa default saat ini adalah Bahasa Indonesia (id). Untuk mengubahnya ke Bahasa Inggris:

Buka app.js.

Cari baris ini (sekitar baris 28):

let currentLang = localStorage.getItem('lang') || 'id'; // Default Bahasa Indonesia


Ubah 'id' menjadi 'en':

let currentLang = localStorage.getItem('lang') || 'en'; // Default Bahasa Inggris


3. Mengganti atau Menambah Proyek

Proyek di-load secara semi-dinamis. Anda perlu mengedit 2 tempat:

A. Edit File JSON (Untuk Teks dan Link):

Buka /lang/id.json dan /lang/en.json. Cari bagian "projects.list". Ini adalah sebuah array (daftar) dari proyek.

"list": [
    {
        "id": 0,
        "title": "Landing Page UMKM",
        "stack": "HTML, CSS, JavaScript",
        "description": "Deskripsi lengkap proyek...",
        "image_url": "[https://placehold.co/600x400/](https://placehold.co/600x400/)...",
        "demo_link": "#",
        "github_link": "#"
    },
    {
        "id": 1,
        "title": "Proyek Kedua...",
        "..."
    }
]


Untuk mengubah 6 proyek yang ada: Cukup edit konten di dalam id.json dan en.json. Ganti title, stack, description, image_url, demo_link, dan github_link.

Untuk menambah proyek baru (misal, proyek ke-7):

Salin-tempel (copy-paste) seluruh blok { ... } dari proyek sebelumnya.

Pastikan id berurutan (misal: id: 6).

Tambahkan data proyek baru ini ke id.json dan en.json.

B. Edit File HTML (Untuk Card):

Jika Anda menambah proyek baru (bukan hanya mengedit), Anda juga harus menambahkan card HTML-nya di index.html.

Buka index.html.

Cari id="project-grid".

Salin-tempel (copy-paste) blok <button class="project-card" ...> yang sudah ada.

PENTING: Ubah data-project-id agar sesuai dengan id yang Anda buat di JSON.

<!-- Proyek ke-7 (Contoh) -->
<button class="project-card reveal-on-scroll" data-project-id="6" aria-haspopup="dialog">
    <img src="[https://placehold.co/600x400/](https://placehold.co/600x400/)..." alt="Proyek baru" class="project-card__image" loading="lazy">
    <div class="project-card__content">
        <!-- Teks di sini akan otomatis diganti oleh JS dari JSON -->
        <h3 class="project-card__title" data-i18n-key="projects.list.6.title">Proyek Baru</h3>
        <p class="project-card__stack">Tech Stack Baru</p>
    </div>
</button>


4. Mengganti Kontak dan Link Sosial

Email & WhatsApp: Buka index.html di bagian id="contact". Ganti link wa.me/... dan teksnya. Untuk email, buka app.js dan ganti email di dalam fungsi copyEmailBtn.

Link Sosial (GitHub, Instagram, Discord, dan Whatsapp): Buka index.html di bagian .contact__socials. Ganti href="#" dengan link profil Anda.

Cara Deploy (Vercel / Netlify)

Deploy website statis ini sangat mudah.

Upload folder proyek ini ke repository GitHub Anda.

Buat akun di Netlify atau Vercel.

Login dan pilih "Import Project" atau "Add New Project".

Hubungkan akun GitHub Anda dan pilih repository portofolio ini.

Konfigurasi build (biasanya otomatis terdeteksi):

Build Command: (Kosongkan)

Output Directory: (Kosongkan) atau atur ke / (root)

Klik "Deploy". Website Anda akan live dalam beberapa detik!