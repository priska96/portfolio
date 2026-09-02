# Priska Kohnen — Portfolio

Personal engineering portfolio for Priska Kohnen, Senior Frontend Developer and Frontend Team Lead. The site presents selected case studies across healthcare, autonomous mobility, AI-enabled education and earlier full-stack work.

Live site: [priska96.github.io/portfolio](https://priska96.github.io/portfolio/)

## Technology

- React 18 and TypeScript
- React Router with dedicated case-study routes
- Create React App / React Scripts
- CSS-based responsive layout and typography
- `fslightbox-react` for project-media previews
- GitHub Pages deployment through `gh-pages`

## Project structure

```text
src/
├── pages/
│   ├── about-me/        About section and skill groups
│   ├── contact/         Contact section
│   ├── experience/      Professional timeline
│   └── projects/
│       ├── Projects.tsx        Project overview
│       ├── ProjectDetail.tsx   Shared case-study page
│       └── project-data.ts     Project, case-study and experience content
├── images/              Portfolio images and compressed videos
├── App.tsx              Routes and home-page composition
└── App.css              Shared design system and responsive styles

public/
├── 404.html             GitHub Pages fallback for client-side routes
├── index.html           HTML shell and route restoration script
├── logo192.png
└── logo512.png          Favicon and application icon
```

Project cards, detail-page content, technology stacks and experience data are maintained centrally in `src/pages/projects/project-data.ts`.

## Local development

Requirements:

- Node.js 18 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm start
```

The portfolio is then available at [http://localhost:3000/portfolio](http://localhost:3000/portfolio). React Router uses `/portfolio` as its basename to match the GitHub Pages project URL.

## Available commands

```bash
npm start       # Start the local development server
npm test        # Run the test suite in watch mode
npm run build   # Create an optimized production build in build/
npm run deploy  # Build and publish build/ to the gh-pages branch
```

Run a production build before publishing significant changes:

```bash
npm run build
```

## Deploying to GitHub Pages

The repository is configured as a GitHub Pages project site:

- Repository: `priska96/portfolio`
- Public URL: `https://priska96.github.io/portfolio/`
- Build base URL: the `homepage` value in `package.json`
- Router base URL: `basename="/portfolio"` in `src/index.tsx`

### 1. Commit and push the source branch

Make sure the current application code is committed and available on GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

The current source branch is `master`. If the repository's default branch is renamed later, use that branch name instead.

### 2. Publish the production build

Run:

```bash
npm run deploy
```

The `predeploy` script automatically runs `npm run build`. The `gh-pages` package then publishes the contents of `build/` to the `gh-pages` branch. The generated build directory itself does not need to be committed to the source branch.

### 3. Configure GitHub Pages

In the GitHub repository, open **Settings → Pages** and select:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

Save the configuration. GitHub may need a few minutes to update the live site after a deployment.

### 4. Verify the deployment

Check both the homepage and a direct case-study URL:

```text
https://priska96.github.io/portfolio/
https://priska96.github.io/portfolio/work/expo-nfc-module
```

GitHub Pages does not natively redirect unknown paths to a single-page application. `public/404.html` therefore redirects direct requests back to the application, while the script in `public/index.html` restores the original React Router path. Keep both scripts when changing the HTML template.

## Deploying under a different repository name

If the repository or public path changes, update all of the following before deploying:

1. `homepage` in `package.json`
2. `basename` in `src/index.tsx`
3. `pathSegmentsToKeep` in `public/404.html`
4. Canonical and Open Graph URLs in `public/index.html`

For a project site such as `/portfolio`, `pathSegmentsToKeep` remains `1`. A root user site such as `username.github.io` requires a different base-path configuration.

## Media

Keep portfolio videos compressed before committing them. GitHub recommends files below 50 MB and rejects individual files larger than 100 MB. Mobile demonstrations do not need their original device-capture resolution when displayed in the site's narrow media containers.

The currently used video extensions are declared in `src/custom.d.ts` so TypeScript can import them as asset URLs.
