# Valencia — Portfolio (Next.js + Tailwind CSS)

Portofolio modern milik **Margareta Valencia Suci Handayani** (ML Engineer, Data Analyst & Creative Web Developer) yang telah dimigrasikan ke arsitektur modern **Next.js (App Router)** dan **Tailwind CSS**, dengan mempertahankan 100% konten, visual estetika dark cyber neon, interaktivitas, dan performa tinggi.

---

## 🚀 Fitur & Komponen Utama

1. **Next.js 14 App Router + TypeScript**:
   - Struktur modular berbasis komponen modern di direktori `/components`.
   - Data terpusat dan mudah di-maintain di `/data/portfolio.ts`.
2. **Tailwind CSS & Neon Cyber Theme**:
   - Palette warna konsisten (`#050816`, `#06B6D4`, `#3B82F6`, `#8B5CF6`).
   - Moving cyber grid background, floating ambient orbs, dan noise layer.
3. **Interactive Cursor & Canvas Physics**:
   - Dynamic custom cursor (dot, ring, radial ambient glow tracker) dengan smooth requestAnimationFrame.
   - Particle Canvas Network di Hero section dengan physics & dynamic connection lines.
4. **Interactive Hero Section**:
   - Typewriter animation untuk 3 role ("Creative Web Developer", "Data Science Enthusiast", "Machine Learning Engineer").
   - Floating tech icons orbiting around the heading.
   - Quick CTA buttons (View Projects, Download CV, Get In Touch).
5. **About Section**:
   - Code terminal mockup (`developer.json`) dengan syntax highlighting.
   - Profile photo card dengan status online "Open to Work · Semarang 🇮🇩".
   - Key stats counter (94% Accuracy, 3+ Shipped Projects, 4K+ Training Images, 2+ Papers).
6. **Projects Section**:
   - Filter kategori dinamis (All, Web Development, Data Scientist, Data Analysis).
   - 10 Proyek lengkap dengan preview media di `/public/assets/projects/`.
   - Tombol "+ Case Study" (accordion drawer interaktif).
   - Modal detail interaktif (Problem, Contribution, Result, Tech Stack, Key Features, Live Demo/Source Code).
7. **Skills Bento Grid**:
   - Bento layout dengan kategori Machine Learning, AI & Data Science, Frontend, Backend, Database, serta Dev Ecosystem.
8. **Experience Timeline**:
   - Vertical timeline dengan scroll line fill yang mengisi secara dinamis saat di-scroll.
9. **Certifications Grid**:
   - 6 sertifikasi & penghargaan (UNITY, NVIDIA CLI, BASS, CFLT, BNSP, Karirnex) lengkap dengan link verifikasi.
10. **Contact Section & Footer**:
    - Callout email direct, kartu LinkedIn, GitHub, Resume, dan copyright footer.

---

## 🛠️ Cara Menjalankan

### 1. Jalankan Mode Development (Localhost)

```bash
npm run dev
```

Buka browser di [http://localhost:3000](http://localhost:3000).

### 2. Build untuk Production

```bash
npm run build
npm run start
```

---

## 📁 Struktur Direktori

```
portfolio/
├── app/
│   ├── globals.css          # Styling global, Tailwind directives, custom keyframes & scrollbar
│   ├── layout.tsx           # Root layout dengan Google Fonts (Inter, Sora, JetBrains Mono)
│   └── page.tsx             # Halaman utama menggabungkan semua komponen
├── components/
│   ├── CustomCursor.tsx     # Custom cursor, ring, dan radial glow tracker
│   ├── Navbar.tsx           # Fixed navbar responsif dengan mobile drawer
│   ├── Hero.tsx             # Particle canvas, typewriter, dan floating badges
│   ├── About.tsx            # Terminal developer.json, foto profil, dan stats
│   ├── Projects.tsx         # Filter kategori, list proyek, case study expander
│   ├── ProjectModal.tsx     # Modal detail proyek (aksesibel dengan ESC / backdrop dismiss)
│   ├── Skills.tsx           # Bento grid tech stack
│   ├── Experience.tsx       # Timeline pengalaman dengan scroll fill progress
│   ├── Certifications.tsx   # Grid sertifikasi & pelatihan
│   ├── Contact.tsx          # Section kontak & social links
│   └── Footer.tsx           # Footer copyright
├── data/
│   └── portfolio.ts         # Sumber data lengkap 10 proyek, skills, karir, & sertifikat
├── public/                  # Aset statis (foto.png, Logo.png, CV_en.pdf, assets/projects/*)
├── tailwind.config.js       # Konfigurasi Tailwind CSS
└── package.json
```

