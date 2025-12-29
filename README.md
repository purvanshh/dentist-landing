# 🦷 DentCare Pro - Modern Dental Practice Landing Page

A premium, modern dental clinic landing page built with Next.js 16, React 19, and cutting-edge web technologies. Features smooth animations, 3D elements, and a luxurious design aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC?logo=tailwind-css)

## ✨ Features

- **Modern UI/UX** - Premium glassmorphism design with smooth animations
- **3D Elements** - Interactive 3D tooth model using React Three Fiber
- **Smooth Scrolling** - Buttery smooth scroll experience with Lenis
- **Framer Motion** - Fluid page transitions and micro-interactions
- **GSAP Animations** - Advanced scroll-triggered animations
- **Fully Responsive** - Optimized for all device sizes
- **TypeScript** - Full type safety throughout the codebase

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) | 3D graphics |
| [GSAP](https://greensock.com/gsap/) | Advanced animations |
| [Lenis](https://lenis.studiofreight.com/) | Smooth scrolling |
| [Lucide React](https://lucide.dev/) | Icon library |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/3d-dentist.git
   cd 3d-dentist
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
3d-dentist/
├── app/
│   ├── components/
│   │   ├── 3d/           # 3D components (FloatingTooth, FallbackTooth)
│   │   ├── effects/      # Visual effects
│   │   ├── sections/     # Page sections (Hero, About, Services, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── lib/                  # Utility functions
├── public/
│   └── models/           # 3D model assets
└── ...config files
```

## 🎨 Sections

- **Hero** - Eye-catching hero section with floating 3D tooth
- **About** - Clinic introduction and values
- **Services** - Dental services offered
- **Stories** - Patient testimonials
- **Team** - Meet the dental professionals
- **Blog** - Latest articles and news
- **Contact** - Contact form and information

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/3d-dentist)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and React Three Fiber
