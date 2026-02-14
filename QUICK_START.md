# Quick Start Guide

Get your upgraded portfolio running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This installs Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and other dependencies.

## Step 2: Migrate Assets

Your images need to move from `assets/` to `public/`:

### Option A: Automatic (Recommended)

```bash
node scripts/migrate-assets.js
```

### Option B: Manual

1. Copy `assets/images/*` to `public/images/`
2. Copy favicon files to `public/` root:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - site.webmanifest

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Verify Everything Works

Check these features:
- ✅ Preloader shows (once per session)
- ✅ Navbar scrolls smoothly
- ✅ Active section highlights in nav
- ✅ Project cards hover effects
- ✅ Project modal opens/closes
- ✅ Search and filters work
- ✅ Contact form validates
- ✅ All external links work

## Step 5: Customize (Optional)

### Update Projects

Edit `data/projects.ts` to add/modify your projects.

### Update Personal Info

- **Name**: `app/layout.tsx`, `app/page.tsx`
- **Email**: `components/sections/Connect.tsx`
- **Social Links**: `components/Navbar.tsx`, `components/sections/Connect.tsx`

### Change Site URL

Update in these files:
- `next-sitemap.config.js`
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`

## Step 6: Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

Test the production build locally:

```bash
npm run start
```

## Step 7: Deploy to Vercel

### Quick Deploy

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

Done! Your site will be live in ~2 minutes.

## Troubleshooting

### Port 3000 already in use

```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

### Preloader won't show again

Clear sessionStorage in browser DevTools:
```javascript
sessionStorage.clear()
```

### Images not showing

- Verify images are in `public/` folder
- Check file paths are correct
- Restart dev server

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## File Structure

```
portfolio-nextjs/
├── app/              # Next.js pages and routes
├── components/       # React components
├── data/            # Project data
├── public/          # Static assets (images, favicons)
├── scripts/         # Utility scripts
└── package.json     # Dependencies
```

## Need Help?

- 📖 Read `README.md` for detailed documentation
- 📝 Check `CHANGES.md` to see what changed
- 🚀 See `DEPLOYMENT.md` for deployment options
- 📊 Review `PROJECT_SUMMARY.md` for complete overview

## What's Next?

1. ✅ Customize your projects
2. ✅ Update personal information
3. ✅ Test on mobile devices
4. ✅ Run Lighthouse audit
5. ✅ Deploy to Vercel
6. ✅ Submit sitemap to Google Search Console
7. ✅ Share your portfolio!

---

**You're all set!** Your premium portfolio is ready to impress. 🎉
