# Mark John Magos | Portfolio

A responsive personal portfolio website built with React.

**Repository:** https://github.com/Mark-john01/Magos-portfolio

## Pages

| Route | Page | What it shows |
|---|---|---|
| `/` | Home | Introduction and links to projects and contact |
| `/about` | About | Background, education timeline, and skills |
| `/projects` | Projects | Project cards with screenshot, description, and links |
| `/contact` | Contact | Email and GitHub links |
| `*` | Not Found | A 404 page for any URL that doesn't exist |

## Features

- Shared layout with the same Header and Footer on every page, using React Router's `Outlet`
- Mobile-first, responsive design for phones, tablets, and desktops
- Mobile navigation menu that opens and closes with a button or the `Escape` key
- Reusable `ProjectCard` component fed by a data file
- Accessibility basics: alt text on images, readable colors, visible keyboard focus, a "Skip to content" link, and proper heading order
- Custom favicon and page title

## Getting Started

Make sure [Node.js](https://nodejs.org/) is installed, then run:

```bash
git clone https://github.com/Mark-john01/Magos-portfolio.git
cd Magos-portfolio
npm install
npm run dev
```

Open the local link shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── assets/          Project screenshots
├── components/      Header, Footer, Layout, ProjectCard
├── data/            projects.js (project list)
├── pages/           Home, About, Projects, Contact, NotFound
├── App.jsx          Routes
├── main.jsx         App entry point
└── index.css        Tailwind import
```
