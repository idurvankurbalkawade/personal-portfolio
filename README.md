# Personal Portfolio

A modern, fast, and responsive developer portfolio built with **Next.js** and **Tailwind CSS** — designed to showcase projects, skills, and experience.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | React Icons |
| Deployment | Vercel |

---

## 📁 Project Structure

```
personal-portfolio/
├── app/
│   ├── layout.js           # Root layout — fonts, metadata
│   ├── page.js             # Home page — renders all sections
│   └── globals.css         # Global styles & Tailwind imports
│
├── components/             # Reusable React components
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section — name, title, CTA
│   ├── About.jsx           # About me section
│   ├── Skills.jsx          # Skills & tech stack badges
│   ├── Projects.jsx        # Projects grid with cards
│   ├── Contact.jsx         # Contact links
│   └── Footer.jsx          # Footer
│
├── data/                   # Content as data files
│   ├── projects.js         # Projects array
│   └── skills.js           # Skills array
│
└── public/                 # Static assets
    └── avatar.png          # Profile photo
```

---

## 📌 Sections

- **Hero** — Introduction, title, and call to action
- **About** — Brief background and story
- **Skills** — Tech stack and tools with icons
- **Projects** — Featured work with live demo and GitHub links
- **Contact** — Email, GitHub, and LinkedIn links

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js 18+** installed on your machine.
Download from: https://nodejs.org

### Installation

1. Clone the repository
```bash
git clone https://github.com/idurvankurbalkawade/personal-portfolio.git
cd personal-portfolio
```

2. Switch to the development branch
```bash
git checkout portfolio-v2
```

3. Install dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

5. Open your browser at
```
http://localhost:3000
```

---

## 🌐 Live Demo

> Coming soon — will be deployed on Vercel

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build production version |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check for errors |

---

Access here - https://personal-portfolio-teal-iota.vercel.app/

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with 💙 using Next.js and Tailwind CSS
