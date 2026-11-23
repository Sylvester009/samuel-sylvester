# Samuel Sylvester Portfolio

A responsive personal portfolio inspired by the Brittany Chiang v4 design.
The site presents Samuel Sylvester's introduction, background, experience,
featured projects, and contact call-to-action.

Some profile, experience, project, social, and email details are demo values
that will be replaced with real information.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Turbopack
- Lucide React

## Features

- Fixed navigation with numbered section links
- Large, responsive hero introduction
- Navy and mint visual theme
- Fixed social and email links on larger screens
- About, experience, work, and contact sections
- Responsive project cards and mobile-friendly layout
- Smooth in-page anchor navigation
- Placeholder profile and project content

## Local Development

Use Node.js and npm, then install dependencies:

```bash
npm install
```

Start the development server on port 3000:

```bash
npm run dev -- -p 3000
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev -- -p 3000  # Start the development server
npm run build          # Create a production build
npm run start          # Start the production server
npm run lint           # Run ESLint
```

## Demo Content

The following values are placeholders:

- `samuel@example.com`
- Demo Studio and the listed experience entries
- Project Showcase and Developer Dashboard project details
- Generic GitHub and LinkedIn links
- The profile placeholder in the About section

## Project Structure

- `app/page.tsx` - Main portfolio page
- `app/layout.tsx` - Root layout and metadata
- `app/components/header.tsx` - Fixed navigation
- `app/components/hero.tsx` - Introductory hero section
- `app/components/about.tsx` - Profile and technology list
- `app/components/experience.tsx` - Demo work experience
- `app/components/work.tsx` - Demo project cards
- `app/components/contact.tsx` - Contact call-to-action
- `app/globals.css` - Global Tailwind CSS imports
- `public/` - Static assets

## Editing

Update demo content directly in the section components under
`app/components/`. Update page composition in `app/page.tsx`, and adjust global
layout and metadata in `app/layout.tsx` and `app/globals.css`.
