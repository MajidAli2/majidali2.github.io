# Portfolio Web — Majid Ali

Welcome to my personal portfolio website. Built with React + Vite, this site showcases my skills and projects.

## Project Structure

- `public/` — static files (favicon, assets, etc.)
- `src/` — main React code (components, utilities, etc.)
- `index.html` — page entry point
- `package.json` & `package-lock.json` — dependency and script management
- `vite.config.js` — Vite build and dev server config
- `eslint.config.js` — linting rules

## Key Features

- Built with **React + Vite** for fast reload and optimized builds
- **ESLint** configured for consistent code style
- Modular structure ready for growth

## Run Locally

1. Go to the project folder:
```bash
cd portofolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Contact Form Email Setup

The contact form now uses EmailJS instead of FormSubmit, because the FormSubmit host was returning a 521 error.

Create a `.env` file in the project root with these values:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then in EmailJS, make sure your template includes these fields:

- `from_name`
- `from_email`
- `reply_to`
- `message`

Set the template's reply-to field to `{{reply_to}}` and show `{{from_name}}` plus `{{from_email}}` in the email body so the visitor details are visible. The actual From address will still be your EmailJS-connected mailbox because Gmail and EmailJS do not allow spoofing another sender address.

The form in the portfolio will only send once those values are configured.

## Quick Preview

Add your deployment link here if needed.

## Deployment

- **Automatic (added):** A GitHub Actions workflow `deploy.yml` is included at `.github/workflows/deploy.yml`. It builds the Vite site and publishes the `dist/` output to the `gh-pages` branch using the repository's `GITHUB_TOKEN`.
- **GitHub Pages (manual):** To publish directly from this repository using GitHub Pages, go to the repository Settings -> Pages and choose the branch to publish from:
	- Option A (recommended for user site): set `main` branch and folder `/ (root)` to publish the site directly from the repository root.
	- Option B: publish from the `gh-pages` branch if you prefer an automated build-and-deploy workflow (the provided action publishes there).

If you want me to switch the workflow to publish directly from `main` (overwrite `main` contents), tell me and I can update the workflow accordingly.

## About Me

Majid Ali — Computer Science Student | Ethical Hacker | AI Explorer

- **GitHub:** https://github.com/MajidAli2
- **LinkedIn:** https://www.linkedin.com/in/majid-ali-28755738a

---



