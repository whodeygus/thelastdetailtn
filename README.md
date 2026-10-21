# The Last Detail TN

This is the official website repository for **The Last Detail TN**, a wedding day-of coordination business run by Cameron Puckett.

## Structure

```
thelastdetailtn/
│
├── index.html               # Main site code
├── /assets/                 # Images and favicon
│   ├── hero.jpg             # Cameron’s headshot for homepage hero
│   ├── owner-portrait.jpg   # Portrait for About section
│   ├── favicon.svg          # Site favicon
│   └── /gallery/            # Wedding gallery photos
│       ├── 1.jpg
│       ├── 2.jpg
│       └── ...etc
```

## Deployment

1. Upload this repo to **GitHub** (via GitHub Desktop or web interface).
2. Go to [Vercel](https://vercel.com), create a new project, and connect it to your GitHub repo.
3. Vercel will auto-detect the static site and deploy it instantly.
4. Add your domain purchased on Namecheap to the project in Vercel's Domain settings.

## Styles (Tailwind)

The page uses a pre-built Tailwind stylesheet at `assets/styles.css` (faster than loading
Tailwind in the browser, which Google penalizes on page speed). Colors and fonts live in
`tailwind.config.js`.

If you add or change Tailwind classes in `index.html`, rebuild the CSS and bump the `?v=` number
on the `styles.css` link in `index.html`:

```
npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind/input.css -o assets/styles.css --minify
```

## SEO checklist

- `robots.txt` and `sitemap.xml` are at the site root. Update `<lastmod>` in the sitemap when
  content changes, and submit `https://www.thelastdetailtn.com/sitemap.xml` in Google Search Console.
- Business details for Google live in the JSON-LD block in `index.html`. When available, add the
  business phone (`"telephone"`), email, and real social profile URLs (`"sameAs": [...]`).
- If you edit the FAQ, keep the FAQ JSON-LD in the `<head>` matching the visible questions.
- Give new gallery photos descriptive `alt` text (what it is + where), plus an 800px version for `srcset`.
