# Samuel Sylvester Portfolio

A completed, responsive personal portfolio built with Next.js. It introduces Samuel,
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
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000)
by default. If port 3000 is already in use, stop the process using it or start
the server on a different port with `npm run dev -- -p 3001`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
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
a link to the included resume PDF. The experience tabs support keyboard navigation.

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
├── profile.jpeg        # Additional profile image asset
└── Resume.pdf          # Resume linked from the navigation
```

The GitHub and LinkedIn links are generic placeholders, and the left-rail email
still uses `samuel@example.com`. The contact section and right rail use
`samsylvester09@gmail.com`.

## Editing

Update section content in `app/components/`. The page layout and social rail
are in `app/page.tsx`; site-wide metadata and fonts are in `app/layout.tsx`.
Place images, the resume PDF, and other static assets in `public/`.
