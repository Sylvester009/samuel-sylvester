# Samuel Sylvester Portfolio

A personal portfolio website built with Next.js and React. The site showcases
Samuel Sylvester's background, experience, selected work, and contact
information.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Turbopack
- Lucide React

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

The project also reports the network address of the development server when
available, for example `http://192.168.1.66:3000`.

## Scripts

```bash
npm run dev -- -p 3000  # Start the development server
npm run build          # Create a production build
npm run start          # Start the production server
npm run lint           # Run ESLint
```

## Project Structure

- `app/page.tsx` - Main portfolio page
- `app/layout.tsx` - Root layout and metadata
- `app/components/` - Header, hero, about, experience, work, and contact sections
- `app/globals.css` - Global Tailwind CSS imports
- `public/` - Static assets

## Editing

Update page content in `app/page.tsx` and the section components in
`app/components/`. Global layout and metadata are defined in `app/layout.tsx`.
