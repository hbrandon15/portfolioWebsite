# Brandon Hernandez Portfolio

A personal and professional portfolio website built with [Astro](https://astro.build), featuring responsive design, custom components, and automated deployment to GitHub Pages with support for a custom domain. This site showcases both my software development work and my photography business.

## 🚀 Features

- Built with Astro for fast, modern static site generation
- Responsive design and custom layouts
- Automated deployment via GitHub Actions
- Supports custom domains (e.g., [bhdz.dev](https://bhdz.dev))
- Showcases both professional projects and photography business
- Easy to update and maintain

## 🗂️ Project Structure

```text
/
├── public/
│   └── css/
│       └── styles.css
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── projects.astro
│       └── photography.astro
├── astro.config.mjs
└── package.json
```

## 🧑‍💻 Local Development

Install dependencies and start the local dev server:

```sh
npm install
npm run dev
```

Visit [localhost:4321](http://localhost:4321) to view the site locally.

## 🏗️ Building & Deploying

To build the site for production:

```sh
npm run build
```

The output will be in the `dist/` folder.

Deployment is automated via GitHub Actions. Every push to `main` triggers a build and deploy to GitHub Pages.

## 🌐 Custom Domain

To use a custom domain, add a `CNAME` file in the `public/` folder with your domain name (e.g., `bhdz.dev`).

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🔄 Deployment status

This repo is configured to deploy via GitHub Actions to GitHub Pages.

---

**Made with Astro 🚀 by Brandon Hernandez**
