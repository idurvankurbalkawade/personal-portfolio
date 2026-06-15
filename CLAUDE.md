# CLAUDE.md — Personal Portfolio Project

## Project Overview
Personal developer portfolio for **Durvankur Balkawade**, a Software Engineer
specializing in Agentic AI systems (Python, FastAPI, LangChain, LangGraph).
Built with Next.js and Tailwind CSS, deployed on Vercel.

## Tech Stack
- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS
- Animations: Framer Motion (planned)
- Icons: Inline SVGs (GitHub, LinkedIn) — React Icons planned for Skills
- Deployment: Vercel

## Project Structure
```
personal-portfolio/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata
│   ├── page.tsx          # Home page — imports & renders all sections
│   └── globals.css       # Global styles + Tailwind directives
│
├── components/
│   ├── Navbar.tsx         # Fixed top navbar, desktop links + mobile menu
│   ├── Hero.tsx           # Split-layout hero with typing animation
│   ├── Skills.tsx         # Skills grid with tech badges
│   ├── About.tsx          # (planned)
│   ├── Projects.tsx       # (planned)
│   ├── Contact.tsx        # (planned)
│   └── Footer.tsx         # (planned)
│
├── data/
│   ├── projects.ts        # (planned) project entries
│   └── skills.ts          # (planned) skills list
│
└── public/                 # Static assets (avatar, favicon, cv.pdf)
```

## Design System
| Token | Value | Usage |
|---|---|---|
| Background (primary) | `#0a192f` | Page/section background |
| Background (secondary) | `#112240` | Cards, badges, inner circles |
| Accent | `#64ffda` | Highlights, links, buttons, borders |
| Text primary | `#ffffff` | Headings |
| Text secondary | `text-gray-400` | Body text, nav links |
| Border accent | `border-[#64ffda]/20` or `/30` | Dividers, card borders |

## Section IDs (must match Navbar links)
- `#home` → Hero
- `#about` → About
- `#skills` → Skills
- `#projects` → Projects
- `#contact` → Contact

## Owner Details
- Name: Durvankur Balkawade
- Initials: DB
- Role: Software Engineer
- Roles cycling in Hero typing animation: "Software Engineer", "AI Engineer", "Python Developer"
- Specialization: Agentic AI, Python, FastAPI, LangChain, LangGraph
- GitHub: github.com/idurvankurbalkawade
- LinkedIn: (add your profile URL)

## Component Notes
- **Navbar.tsx** — `"use client"`, uses `useState` for mobile menu toggle,
  uses `next/link` for nav links, fixed position with `bg-[#0a192f]`.
- **Hero.tsx** — `"use client"`, uses `useState` + `useEffect` with
  `setInterval` for cycling role text every ~2s. Split layout:
  left = text/buttons/socials, right = avatar circle + floating tech badges.
- **Skills.tsx** — grid of skill cards with emoji + name, hover scale effect.

## Coding Conventions
- Use `"use client"` for any component using `useState`/`useEffect`.
- TypeScript (`.tsx`) for all components.
- Tailwind CSS only — no inline styles or separate CSS files (except `globals.css`).
- Use `next/link` for all internal/section navigation.
- Keep components in `components/`, content data in `data/`.
- When asked for changes to a specific file, edit only that file —
  do not rewrite unrelated components.

## Branch Strategy
- `main` → original static (HTML/CSS) portfolio — untouched
- `portfolio-v2` → new Next.js portfolio (default branch)
- `feature/*` → individual feature branches, merged via PR into `portfolio-v2`

## Current Status
- [x] Project scaffolded with Next.js + Tailwind
- [x] Navbar — desktop + mobile menu
- [x] Hero — split layout, typing animation, avatar + badges
- [x] Skills section
- [ ] About section
- [ ] Projects section (data/projects.ts + cards)
- [ ] Contact section
- [ ] Footer
- [ ] Framer Motion scroll animations
- [ ] Vercel deployment + custom domain

## Common Commands
```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # run ESLint

git add .
git commit -m "message"
git push origin <branch-name>
```