# Samuel Sylvester Portfolio

A responsive personal portfolio built with Next.js. It introduces Samuel,
highlights frontend experience at Ductape Technologies, shares selected
projects, and provides contact links. The visual design is inspired by
[Brittany Chiang's v4 portfolio](https://v4.brittanychiang.com/).

## Tech Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Turbopack
- Geist fonts via `next/font`

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev -- -p 3000
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is already
in use, stop the process using it or choose another port, for example:

```bash
npm run dev -- -p 3001
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev -- -p 3000` | Start the development server on port 3000 |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Portfolio Sections

- **Home:** Introduction and link to the project section
- **About:** Background, Nine Realms learning journey, technologies, and profile photo
- **Experience:** Frontend Developer role at Ductape Technologies
- **Work:** Erastos Backend, Meatopia, and Kindred project cards
- **Contact:** Email call-to-action

The navigation includes a responsive mobile menu, numbered section links, and
a resume link. The experience tabs support keyboard navigation.

## Featured Projects

- **Erastos Backend:** Go REST API for library books using Gin and pgx. The
  handlers currently operate on in-memory sample data; they do not persist
  changes to PostgreSQL.
- **Meatopia:** E-commerce platform with product search and filtering, a
  persistent cart, Paystack payments, an owner dashboard, and order emails.
- **Kindred:** Professional networking platform that models members,
  organizations, projects, and skills as a graph, with multi-hop discovery.

## Project Structure

```text
app/
├── components/
│   ├── about.tsx       # Bio, technology list, and profile photo
│   ├── contact.tsx     # Contact section
│   ├── experience.tsx  # Work history and keyboard-accessible tabs
│   ├── header.tsx      # Desktop navigation and mobile menu
│   ├── hero.tsx        # Introduction
│   └── work.tsx        # Featured project cards
├── globals.css         # Tailwind theme and global styles
├── layout.tsx          # Root layout, fonts, and metadata
└── page.tsx            # Page composition and social links
public/
├── me.png              # Profile image used in About
└── profile.jpeg        # Additional profile image asset
```

## Content and Links to Review

- The GitHub and LinkedIn links in the page's left social rail currently point
  to generic profile pages; replace them with the correct profile URLs.
- The left-rail email link still uses `samuel@example.com`; the contact section
  and right rail use `samsylvester09@gmail.com`.
- The navigation points to `/resume.pdf`, but that file is not currently in
  `public/`. Add the resume there or update/remove the link.
- Erastos Backend links to its GitHub repository. Add verified repository or
  live-site links for Meatopia and Kindred when available.

## Editing

Update section content in `app/components/`. The page layout and social rail
are in `app/page.tsx`; site-wide metadata and fonts are in `app/layout.tsx`.
Place images, the resume PDF, and other static assets in `public/`.
