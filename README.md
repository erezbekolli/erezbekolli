# Erëz Bekolli Portfolio Website

A quiet, editorial architecture portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run Locally

```bash
pnpm install
pnpm dev
```

## Add Projects

Edit `data/projects.ts`. Each project follows a CMS-like structure:

```ts
{
  title: "",
  year: "",
  location: "",
  type: "",
  description: "",
  images: [],
  drawings: [],
  plans: [],
  sections: []
}
```

Add image files under `public/images/` and reference them with paths like `/images/project-name/image.jpg`.

## Deploy

Import the folder into Vercel and deploy. Update `metadataBase` in `app/layout.tsx` and `baseUrl` in `app/sitemap.ts` to your final domain.
