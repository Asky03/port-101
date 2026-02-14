# Complete Folder Structure

```
portfolio-nextjs/
│
├── 📁 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout with metadata, Font Awesome
│   ├── page.tsx                     # Home page with JSON-LD schemas
│   ├── globals.css                  # Global styles, animated background
│   ├── sitemap.ts                   # Dynamic sitemap generation
│   └── robots.ts                    # Robots.txt configuration
│
├── 📁 components/                   # React Components
│   │
│   ├── Navbar.tsx                   # Sticky navbar with scroll detection
│   ├── Footer.tsx                   # Footer with current year
│   ├── Preloader.tsx                # Session-based preloader
│   ├── PageTransition.tsx           # Page transition wrapper
│   │
│   ├── 📁 sections/                 # Page Sections
│   │   ├── Hero.tsx                 # Hero section with staggered animations
│   │   ├── Projects.tsx             # Projects grid with filters & search
│   │   └── Connect.tsx              # Contact section with form
│   │
│   └── 📁 ui/                       # Reusable UI Components
│       ├── ProjectCard.tsx          # Individual project card
│       ├── ProjectModal.tsx         # Project detail modal with focus trap
│       └── Toast.tsx                # Toast notification component
│
├── 📁 data/                         # Data Files
│   └── projects.ts                  # Project data array with TypeScript types
│
├── 📁 public/                       # Static Assets (served at /)
│   ├── 📁 images/                   # Images
│   │   └── (your images here)
│   ├── favicon.ico                  # Favicon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest
│
├── 📁 scripts/                      # Utility Scripts
│   └── migrate-assets.js            # Asset migration helper
│
├── 📁 assets/                       # OLD ASSETS (to be migrated)
│   ├── 📁 css/
│   │   └── style.css                # (reference only, now in globals.css)
│   ├── 📁 js/
│   │   └── main.js                  # (reference only, now in components)
│   └── 📁 images/
│       └── (move to public/images/)
│
├── 📄 package.json                  # Dependencies and scripts
├── 📄 package-lock.json             # Dependency lock file
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 .eslintrc.json                # ESLint configuration
├── 📄 next-sitemap.config.js        # Sitemap generation config
├── 📄 vercel.json                   # Vercel deployment config
├── 📄 .gitignore                    # Git ignore rules
│
├── 📄 README.md                     # Main documentation
├── 📄 QUICK_START.md                # 5-minute setup guide
├── 📄 CHANGES.md                    # Detailed changelog
├── 📄 DEPLOYMENT.md                 # Deployment instructions
├── 📄 PROJECT_SUMMARY.md            # Complete project overview
├── 📄 FOLDER_STRUCTURE.md           # This file
│
├── 📁 .next/                        # Next.js build output (generated)
├── 📁 node_modules/                 # Dependencies (generated)
└── 📄 next-env.d.ts                 # Next.js TypeScript types (generated)
```

## File Descriptions

### Core Application Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, Font Awesome, global providers |
| `app/page.tsx` | Home page with Hero, Projects, Connect sections |
| `app/globals.css` | Global styles, CSS variables, animated background |
| `app/sitemap.ts` | Dynamic sitemap for SEO |
| `app/robots.ts` | Robots.txt for search engines |

### Components

| Component | Purpose |
|-----------|---------|
| `Navbar.tsx` | Sticky navigation with scroll effects, active section highlighting |
| `Footer.tsx` | Footer with copyright and current year |
| `Preloader.tsx` | "Routing traffic" preloader (once per session) |
| `PageTransition.tsx` | Smooth page transitions with Framer Motion |

### Section Components

| Section | Purpose |
|---------|---------|
| `Hero.tsx` | Hero section with name, tagline, CTA buttons |
| `Projects.tsx` | Project grid with search, filters, and modal |
| `Connect.tsx` | Contact section with form and social links |

### UI Components

| Component | Purpose |
|-----------|---------|
| `ProjectCard.tsx` | Individual project card with hover effects |
| `ProjectModal.tsx` | Modal for project details (keyboard accessible) |
| `Toast.tsx` | Toast notification for form feedback |

### Data Files

| File | Purpose |
|------|---------|
| `data/projects.ts` | Project data array with TypeScript interfaces |

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `next.config.mjs` | Next.js configuration (images, etc.) |
| `tailwind.config.ts` | Tailwind CSS theme customization |
| `tsconfig.json` | TypeScript compiler options |
| `.eslintrc.json` | ESLint rules |
| `next-sitemap.config.js` | Sitemap generation settings |
| `vercel.json` | Vercel deployment configuration |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main documentation with setup and features |
| `QUICK_START.md` | 5-minute quick start guide |
| `CHANGES.md` | Detailed list of all changes |
| `DEPLOYMENT.md` | Deployment instructions for various platforms |
| `PROJECT_SUMMARY.md` | Complete project overview |
| `FOLDER_STRUCTURE.md` | This file - folder structure reference |

## Import Paths

Next.js uses `@/` as an alias for the root directory:

```typescript
// Instead of:
import Navbar from '../../../components/Navbar';

// Use:
import Navbar from '@/components/Navbar';
```

## Key Directories

### `/app` - Next.js App Router
- All routes and pages
- Server and client components
- Metadata and SEO configuration

### `/components` - React Components
- Reusable UI components
- Section components for pages
- Layout components (Navbar, Footer)

### `/data` - Data Files
- Project data
- Easy to edit and maintain
- TypeScript types for safety

### `/public` - Static Assets
- Served at root URL
- Images, favicons, manifests
- No processing, direct serving

## Generated Directories

These are created automatically:

- `.next/` - Next.js build output
- `node_modules/` - npm dependencies
- `next-env.d.ts` - TypeScript definitions

## Migration Notes

### Old Structure → New Structure

```
assets/css/style.css     → app/globals.css + Tailwind
assets/js/main.js        → components/*.tsx
assets/images/*          → public/images/*
index.html               → app/page.tsx + components/sections/*
```

### What to Keep

- `assets/images/` - Move to `public/images/`
- Favicon files - Move to `public/` root

### What to Remove (After Migration)

- `assets/css/` - Replaced by Tailwind + globals.css
- `assets/js/` - Replaced by React components
- `index.html` - Replaced by Next.js pages

## Size Estimates

| Directory | Approximate Size |
|-----------|------------------|
| `node_modules/` | ~300-400 MB |
| `.next/` | ~50-100 MB |
| `public/` | Depends on images |
| Source code | ~1-2 MB |

## Best Practices

1. **Keep components small** - Each component should do one thing well
2. **Use TypeScript** - Type safety prevents bugs
3. **Organize by feature** - Group related files together
4. **Document changes** - Update docs when adding features
5. **Test locally** - Always test before deploying

## Quick Navigation

- Need to add a project? → `data/projects.ts`
- Need to change colors? → `app/globals.css`
- Need to update metadata? → `app/layout.tsx`
- Need to modify navbar? → `components/Navbar.tsx`
- Need to change contact form? → `components/sections/Connect.tsx`

---

This structure is designed for:
- ✅ Easy maintenance
- ✅ Clear organization
- ✅ Scalability
- ✅ Best practices
- ✅ Developer experience
