# Isaac Kelly, Portfolio

Personal portfolio site for Isaac Kelly, a junior software engineer and DevOps graduate based in Melbourne, Australia. Built to showcase projects and skills for full stack, DevOps and data/AI focused roles.

Live site: deployed on Vercel.

## Tech stack

- [React 19](https://react.dev/) with [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- ESLint for linting

## Project structure

```
src/
  components/   UI components (Nav, Hero, About, Skills, Experience, Projects, ProjectCard, Contact, Footer)
  data/         Static content (projects, skills)
  App.jsx       Page composition
  main.jsx      React entry point
  index.css     Tailwind entry point and design tokens
public/
  projects/     Project preview images
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the codebase:

```bash
npm run lint
```

Preview a production build locally:

```bash
npm run preview
```

## Deployment

The site auto-deploys to Vercel from this repository.
