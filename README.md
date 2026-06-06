# TallGirl Fashion

TallGirl Fashion is a desktop-first fashion ecommerce concept for tall women. It focuses on a high-end editorial shopping experience with minimal navigation, oversized black-and-white imagery, product filtering, fit guidance, and a local cart flow.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React client components for search, filtering, cart state, and add-to-cart behavior

## Core Features

- Fixed luxury-style navigation with category links and search
- Editorial homepage with hero, new arrivals, tall jeans, lookbook, best sellers, newsletter, and size guide sections
- Product listing page with category filtering, height-fit filtering, keyword search, sorting, and four-column desktop grid
- Product detail pages with large image gallery, size selection, quantity control, height-fit guidance, fit notes, and add-to-cart
- Cart page using localStorage to persist selected items
- Supporting About and Size Guide pages to make the store feel like a complete ecommerce product
- Local image assets under `public/images`, so the project does not depend on remote image URLs during demos

## Routes

- `/` homepage
- `/products` product listing, search, filter, and sort
- `/products/[slug]` product detail pages
- `/cart` cart
- `/about` brand, shipping, and returns
- `/size-guide` tall-fit sizing reference

## Local Development

```bash
npm install
npm run dev -- --port 3020
```

Open `http://127.0.0.1:3020`.

## Build Check

```bash
npm run build
```

## Project Highlights For Interviews

- Designed a niche ecommerce experience around a clear user segment: tall women shopping for better proportions.
- Built reusable components for header, footer, product cards, product grids, listing controls, cart, and add-to-cart flow.
- Modeled product data with category, editorial tag, height fit, and fit notes to support both merchandising and product-detail UX.
- Implemented client-side search, filters, sorting, cart persistence, and live cart count without a backend.
- Used a restrained visual system to match a luxury fashion direction: black-and-white imagery, large whitespace, thin typography, and minimal UI chrome.
