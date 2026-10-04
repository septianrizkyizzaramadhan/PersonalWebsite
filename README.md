<div align="center">

# Septian Rizky Izza Ramadhan

**Web Developer berbasis di Boyolali.**

Membangun website modern, cepat, dan clean untuk UMKM, personal brand, dan bisnis lokal.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-0F766E?style=flat-square)](#lisensi)

[Live Demo](https://rephy.vercel.app) · [Projects](#projects) · [Contact](#contact)

</div>

---

## Tentang

Ini adalah website personal portfolio saya. Menampilkan profil, skills, project, dan layanan yang saya tawarkan sebagai web developer.

Dibangun sebagai **single-page static site** — ringan, cepat, dan mudah di-deploy. Tanpa backend, tanpa database.

## Fitur

- Hero dengan tipografi editorial dan grid pattern
- Marquee strip berjalan dengan tech stack
- Skills section dengan logo brand berwarna (React, Next.js, Node.js, dll)
- Projects showcase dengan browser mockup preview
- Services section dengan card dan bullet points
- Contact section dengan email, WhatsApp, GitHub, dan Instagram
- Scroll reveal animation (subtle, tidak berlebihan)
- Mobile-first responsive

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Styling
- **Lucide React** — Icon set

Tanpa state management library, tanpa router, tanpa animasi library.

## Design System

| Token | Nilai | Fungsi |
|---|---|---|
| `ink` | `#0A0A0A` | Text utama, dark section |
| `paper` | `#FAFAFA` | Background |
| `muted` | `#737373` | Text sekunder |
| `line` | `#E5E5E5` | Border |
| `accent` | `#14B8A6` | Teal — accent utama |
| `accent-deep` | `#0F766E` | Teal gelap — section |

**Tipografi:**
- **Inter** — body & display
- **JetBrains Mono** — label, code, nomor section

## Struktur Project

```
PersonalWebsite/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── BrowserMockup.jsx
│   │       ├── Container.jsx
│   │       ├── Marquee.jsx
│   │       ├── ProjectPreview.jsx
│   │       ├── Section.jsx
│   │       └── TechIcon.jsx
│   ├── data/
│   │   ├── profile.js          # Info personal & services
│   │   └── projects.js         # Daftar project
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── lib/
│   │   └── cn.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

**Prinsip arsitektur:**
- Semua konten pribadi terpusat di `data/profile.js` dan `data/projects.js`
- Section-based architecture — satu file per section
- UI primitives reusable di `components/ui/`

## Cara Menjalankan

### Prasyarat
- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
git clone https://github.com/septianrizkyizzaramadhan/PersonalWebsite.git
cd PersonalWebsite
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
npm run preview
```

## Konfigurasi Konten

Semua konten personal ada di **`src/data/profile.js`**:

```js
export const profile = {
  name: 'Septian Rizky Izza Ramadhan',
  handle: 'rephy',
  role: 'Web Developer',
  location: 'Boyolali, Indonesia',
  bio: '...',
  email: '...',
  whatsapp: '...',
  socials: { ... },
  skills: { ... },
}
```

Daftar project ada di **`src/data/projects.js`**. Untuk menambah project baru, tinggal tambah object baru ke array:

```js
{
  id: 2,
  title: 'Nama Project',
  description: '...',
  tags: ['React', 'Node.js'],
  live: 'https://...',
  repo: 'https://github.com/...',
  year: '2025',
  preview: 'generic',
  url: 'nama-project.vercel.app',
}
```

## Deploy

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Atau connect repo GitHub di [vercel.com](https://vercel.com):
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

Atau connect repo GitHub di dashboard Netlify:
- Build command: `npm run build`
- Publish directory: `dist`

## Kontak

- Email: [septianrizkyizzaramadhan@gmail.com](mailto:septianrizkyizzaramadhan@gmail.com)
- WhatsApp: [-](https://wa.me/6281234567890)
- GitHub: [@septianrizkyizzaramadhan](https://github.com/septianrizkyizzaramadhan)
- Instagram: [@rizkyxyz67](https://instagram.com/rizkyxzy67)

## Lisensi

MIT © 2026 Septian Rizky Izza Ramadhan (REPHY)