# Koray Dental Studio — Modern Showcase & Weekly Blog Platform

A visually bold, motion-rich, mobile-first showcase website and weekly dental health blog for **Koray Dental Studio**, built with **Astro 7**, **TypeScript**, and **Tailwind CSS v4**.

Designed for instant deployment on **Vercel**, with built-in dual-language support (**Turkish** default and **English**), seamless scalability to **4+ languages**, and architectural hooks ready for a future moderated patient-experience social community platform.

---

## 💎 Key Features & Visual Identity

### 1. Refined Dental Identity & Theming
- **Palette**: Pure dental ceramic / porcelain white (`#F8FAFC`, `#FFFFFF`) in light mode; deep obsidian slate and cosmic navy (`#070B13`, `#0D1424`) in dark mode.
- **Accents**: Precision bio-cyan (`#0284C7`, `#38BDF8`) and clinical mint teal (`#0D9488`, `#2DD4BF`), evoking medical hygiene, advanced technology, and aesthetic serenity.
- **Typography**: Paired display typography (**Outfit** for high-impact geometric titles) with readable body typography (**Plus Jakarta Sans** for medical clarity) and **JetBrains Mono** for technical badges and data.
- **Theme Toggle**: Accessible dark/light toggle in the header, initialized with an anti-FOUC (Flash of Unstyled Content) inline script that respects system preferences (`prefers-color-scheme`) and persists user choices in `localStorage`.

### 2. Localization & Multi-Language Architecture (i18n)
- **Active Locales**: **Turkish (`tr`)** as the default root (`/`, `/blog`, `/blog/[slug]`) and **English (`en`)** as prefixed routes (`/en`, `/en/blog`, `/en/blog/[slug]`).
- **Language Switcher**: Built-in switcher in the navigation bar with flags, active indicator, and smooth path translation.
- **Scale to 4+ Languages**: All translations and language registry entries live in `src/i18n/config.ts` and `src/i18n/translations.ts`. Adding new locales (e.g. German `de`, Arabic `ar` with RTL support, Russian `ru`) requires **zero component rewrites**.

### 3. Rich Motion & Mobile-First Animations
1. **Interactive Hero Carousel**:
   - Showcases 3 signature treatments: *Digital Smile Design (DSD)*, *Flapless 3D Guided Implants*, and *Clear Aligners*.
   - Features touch/swipe detection on mobile (`touchstart` / `touchend`), desktop prev/next controls, pagination indicators, auto-play (5.5s), and pause-on-hover.
2. **Cursor-Following Ambient Glow**:
   - Fluid 60fps radial aura that tracks the mouse pointer using linear interpolation (`lerp`) and `requestAnimationFrame`.
   - **Mobile-safe adaptation**: On coarse/touch devices, automatically switches to a gentle breathing background glow, preventing battery drain and touch interference.
3. **Cryptographic Character Scramble Effect**:
   - Matrix/cyber character decoding animation on badges and headlines (`[data-scramble]`), resolving randomized glyphs cleanly into legible text.
4. **Coordinated Section Scroll Reveal**:
   - Staggered entrance reveals powered by an optimized `IntersectionObserver`.
5. **Accessibility**:
   - Full compliance with `prefers-reduced-motion: reduce`. All animations gracefully fall back to static layouts.

### 4. Interactive Contact Form & Floating WhatsApp
- **Appointment Inquiry Form**:
  - Validates full name, phone number, email, desired treatment, date, and KVKK/GDPR consent with instant visual feedback.
  - Realistic simulated API submission with button spinner state and generation of a unique reference tracking ID (e.g., `KRY-2026-8941`).
  - Includes a one-click button in the confirmation modal to immediately forward the request details to WhatsApp.
- **Floating WhatsApp Concierge**:
  - Fixed bubble with pulsating status badge ("Çevrimiçi" / "Online").
  - Dynamically injects pre-filled localized messages (e.g., Turkish or English) and opens directly in the WhatsApp app or web client.
  - Hover/click popup preview card with clinic response time indicator ("Genellikle 5 dakika içinde yanıt verilir").

### 5. Working Weekly Blog (Phase 1)
- **Homepage Showcase Section**: Main page displays latest weekly articles with week badges (*Hafta 47 / Week 47*), categories, read times, and dates.
- **Dedicated Blog Listing**: `/blog` (TR) and `/en/blog` (EN).
- **Article Reader**: Clean prose layout with typography, author card, tags, direct booking banner, and Phase 2 community placeholders.
- Powered by modern **Astro Content Layer** (`src/content.config.ts`) and Markdown/MDX files under `src/content/blog/`.

---

## 📁 Project Structure

```
koraynew/
├── public/                     # Static assets (favicons, badges)
├── src/
│   ├── components/
│   │   ├── AppointmentForm.astro    # Interactive booking form & contact cards
│   │   ├── ClinicTech.astro         # In-house lab, 3D scanner & smile simulator
│   │   ├── DoctorProfile.astro      # Dr. Koray Altun credentials & philosophy
│   │   ├── FloatingWhatsApp.astro   # Localized floating WhatsApp bubble
│   │   ├── Footer.astro             # Clinic hours, legal, newsletter, credits
│   │   ├── Header.astro             # Nav, theme toggle, language switcher
│   │   ├── Hero.astro               # Motion carousel, scramble badge, metrics
│   │   ├── Treatments.astro         # Interactive service filter & cards
│   │   └── WeeklyBlogShowcase.astro # Homepage weekly blog grid
│   ├── content/
│   │   └── blog/
│   │       ├── en/             # English weekly articles (Week 44 - Week 47)
│   │       └── tr/             # Turkish weekly articles (Hafta 44 - Hafta 47)
│   ├── i18n/
│   │   ├── config.ts           # Supported locales, flags, RTL config
│   │   ├── translations.ts     # Dictionaries for TR and EN
│   │   └── utils.ts            # Route helpers (getLangFromUrl, useTranslations)
│   ├── layouts/
│   │   └── Layout.astro        # Base layout, SEO meta, theme script, cursor glow
│   ├── pages/
│   │   ├── index.astro         # Turkish single-page showcase (/)
│   │   ├── blog/
│   │   │   ├── index.astro     # Turkish blog listing (/blog)
│   │   │   └── [slug].astro    # Turkish article detail (/blog/[slug])
│   │   └── en/
│   │       ├── index.astro     # English single-page showcase (/en)
│   │       └── blog/
│   │           ├── index.astro # English blog listing (/en/blog)
│   │           └── [slug].astro# English article detail (/en/blog/[slug])
│   ├── scripts/
│   │   ├── cursorGlow.ts       # Pointer tracking & mobile aura fallback
│   │   ├── scrambleText.ts     # Cryptographic text decoder animation
│   │   └── scrollReveal.ts     # Viewport intersection observer
│   └── styles/
│   │   └── global.css          # Tailwind CSS v4 entry, theme variables & utilities
├── content.config.ts           # Astro Content Layer collection definitions
├── astro.config.mjs            # Astro configuration (i18n routing, Tailwind, MDX)
├── package.json
└── vercel.json                 # Vercel deployment routing configuration
```

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js `v20+` or `v22+`
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
Per the project rules, run in background mode:
```bash
npx astro dev --background
```
- **Check Server Status**: `npx astro dev status`
- **View Server Logs**: `npx astro dev logs`
- **Stop Server**: `npx astro dev stop`

Access the local server at `http://localhost:4321`.

### 4. Build for Production
```bash
npm run build
```
Generates static HTML and assets in `dist/`.

---

## 📝 How to Manage & Add a Weekly Blog Post

Right now, blog content is managed via **Astro Content Collections** using Markdown/MDX files.

### Step-by-Step: Adding a New Weekly Article

1. **For Turkish:** Create a file in `src/content/blog/tr/`:
   ```markdown
   ---
   title: "Hafta 48: Zirkonyum Kaplamalarda Doğal Işık Geçirgenliği"
   description: "Metal desteksiz tam seramik zirkonyumların doğal diş minesini nasıl taklit ettiği üzerine klinik analiz."
   pubDate: 2026-11-23
   weekNumber: 48
   author: "Dr. Dt. Koray Altun"
   authorRole: "Estetik Diş Hekimi"
   category: "Estetik Diş Hekimliği"
   readingTime: "4 dk"
   tags: ["Zirkonyum", "Estetik", "Gülüş Tasarımı"]
   lang: "tr"
   featured: true
   communityCommentsCount: 0
   allowPatientQuestions: true
   ---

   # Makale Başlığı...
   İçerik buraya yazılır...
   ```

2. **For English:** Create the corresponding file in `src/content/blog/en/`:
   ```markdown
   ---
   title: "Week 48: Optical Translucency in Modern Zirconia Restorations"
   description: "A clinical analysis of metal-free ceramic restorations mimicking natural enamel vitality."
   pubDate: 2026-11-23
   weekNumber: 48
   author: "Dr. Koray Altun, DDS, MSc"
   authorRole: "Cosmetic Dental Surgeon"
   category: "Cosmetic Dentistry"
   readingTime: "4 min"
   tags: ["Zirconia", "Aesthetics", "Smile Design"]
   lang: "en"
   featured: true
   communityCommentsCount: 0
   allowPatientQuestions: true
   ---

   # Article Content...
   ```

3. Save the file. Astro automatically hot-reloads and registers the new URL (`/blog/hafta-48-...` or `/en/blog/week-48-...`).

---

## 🗄️ Admin Panel & Headless CMS Integration

While file-based Markdown is optimal for version control, speed, and zero hosting costs, a full visual Admin UI can be connected in the future:

1. **Decap CMS (formerly Netlify CMS) / Static CMS**:
   - A drop-in git-based admin panel accessible at `/admin`.
   - Edits commit directly to GitHub, triggering automatic Vercel re-deploys.
2. **Headless CMS (Strapi, Directus, Sanity, Payload CMS)**:
   - Astro 5+ / 7 Content Layer supports custom loaders.
   - For example, replacing `loader: glob(...)` with `loader: sanityLoader(...)` or `loader: strapiLoader(...)` pulls articles directly from an external database or CMS API at build time or via On-Demand ISR.

---

## 🌍 How to Add 2+ More Languages (Scaling to 4+ Locales)

1. Open `src/i18n/config.ts`:
   - Set `active: true` for the target language (e.g., `de` for German or `ar` for Arabic).
   - Add the locale code to `activeLocales`: `export const activeLocales: SupportedLocale[] = ['tr', 'en', 'de', 'ar'];`.
2. Open `src/i18n/translations.ts`:
   - Add the translation dictionary for `de` or `ar` under `ui`.
3. Open `astro.config.mjs`:
   - Add the locale to the `i18n.locales` array: `locales: ['tr', 'en', 'de', 'ar']`.
4. Create pages under `src/pages/[locale]/`:
   - e.g. `src/pages/de/index.astro`, `src/pages/de/blog/index.astro`, `src/pages/de/blog/[slug].astro`.
5. That is all! All components (`Header`, `Hero`, `Treatments`, `AppointmentForm`, `Footer`, `FloatingWhatsApp`) consume the locale via `Astro.props.lang` and automatically render the correct dictionary entries and direction (`dir="ltr"` or `dir="rtl"`).

---

## 🤝 Phase 2 Roadmap: Moderated Patient-Experience Community

The codebase includes architectural schemas designed for Phase 2:
- `communityCommentsCount` and `allowPatientQuestions` frontmatter flags in `src/content.config.ts`.
- Interactive patient community cards in `src/pages/blog/[slug].astro`.
- **Phase 2 Implementation Plan**:
  - Connect **Supabase** or **Firebase Firestore** for patient profile authentication and treatment recovery logs.
  - Implement a **Moderation Dashboard** where clinical coordinators review and approve patient reviews and recovery photos before they go live.
  - Add peer-to-peer discussion threads under weekly blog topics and treatment guides.

---

## 🚢 Deploying to Vercel

### Method 1: Vercel Git Integration (Recommended)
1. Push this repository to GitHub or GitLab.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects **Astro**.
4. Click **Deploy**. Vercel will run `npm run build` and publish your site globally with high-performance CDN edge caching.

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel
```
