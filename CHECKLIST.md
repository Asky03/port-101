# Pre-Launch Checklist

Use this checklist before deploying your portfolio to production.

## 📦 Setup & Installation

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] No installation errors
- [ ] Dev server runs (`npm run dev`)

## 🖼️ Assets Migration

- [ ] Images moved from `assets/images/` to `public/images/`
- [ ] Favicon files in `public/` root
- [ ] All images load correctly
- [ ] No broken image links

## ✏️ Content Customization

### Personal Information
- [ ] Name updated in `app/layout.tsx`
- [ ] Name updated in `app/page.tsx`
- [ ] Email updated in `components/sections/Connect.tsx`
- [ ] GitHub link correct in `components/Navbar.tsx`
- [ ] LinkedIn link correct in `components/Navbar.tsx`
- [ ] Social links correct in `components/sections/Connect.tsx`

### Projects
- [ ] All projects added/updated in `data/projects.ts`
- [ ] Project titles accurate
- [ ] Project descriptions clear
- [ ] Categories correct
- [ ] Tech stacks listed
- [ ] GitHub links working
- [ ] Live demo links working (or removed if N/A)
- [ ] Optional fields filled (whatIBuilt, challenges, learnings)

### SEO
- [ ] Site URL updated in `next-sitemap.config.js`
- [ ] Site URL updated in `app/layout.tsx` (metadataBase)
- [ ] Site URL updated in `app/sitemap.ts`
- [ ] Meta description accurate
- [ ] Keywords relevant
- [ ] OpenGraph image added (optional)

## 🎨 Visual Testing

### Desktop (1920x1080)
- [ ] Navbar displays correctly
- [ ] Hero section looks good
- [ ] Projects grid aligned
- [ ] Contact form centered
- [ ] Footer displays correctly
- [ ] No horizontal scroll

### Tablet (768x1024)
- [ ] Responsive layout works
- [ ] Images scale properly
- [ ] Text readable
- [ ] Buttons accessible

### Mobile (375x667)
- [ ] Mobile menu works
- [ ] Cards stack vertically
- [ ] Form inputs full width
- [ ] Touch targets large enough
- [ ] No text overflow

## ✨ Functionality Testing

### Navigation
- [ ] Navbar sticky on scroll
- [ ] Navbar blur increases on scroll
- [ ] Active section highlights correctly
- [ ] Smooth scroll to sections works
- [ ] Mobile menu opens/closes
- [ ] All nav links work

### Preloader
- [ ] Shows on first visit
- [ ] Progress bar animates
- [ ] Completes in 2-3 seconds
- [ ] Doesn't show on refresh (sessionStorage)
- [ ] Can be cleared with `sessionStorage.clear()`

### Hero Section
- [ ] Name displays correctly
- [ ] Tagline visible
- [ ] CTA buttons work
- [ ] Hover effects smooth
- [ ] Animations trigger

### Projects Section
- [ ] All projects display
- [ ] Search filters projects
- [ ] Category filters work
- [ ] "All" shows all projects
- [ ] Cards hover effects work
- [ ] Modal opens on click
- [ ] Modal shows correct data
- [ ] Modal closes on X button
- [ ] Modal closes on ESC key
- [ ] Modal closes on backdrop click
- [ ] Focus trap works in modal
- [ ] Code/Live links work

### Connect Section
- [ ] Email button works
- [ ] GitHub link opens in new tab
- [ ] LinkedIn link opens in new tab
- [ ] Form validates empty fields
- [ ] Form validates email format
- [ ] Form validates message length
- [ ] Error messages display
- [ ] Submit opens email client
- [ ] Toast notification shows
- [ ] Form resets after submit

## ⚡ Performance Testing

### Build
- [ ] Production build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build size reasonable (<5MB)

### Lighthouse Audit
- [ ] Performance score 90+
- [ ] Accessibility score 90+
- [ ] Best Practices score 90+
- [ ] SEO score 90+

### Loading
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

## ♿ Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus visible on all elements
- [ ] Modal focus trap works
- [ ] ESC closes modal
- [ ] Enter/Space activates buttons
- [ ] No keyboard traps

### Screen Reader
- [ ] All images have alt text
- [ ] ARIA labels present
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Form labels associated
- [ ] Error messages announced

### Visual
- [ ] Color contrast sufficient (4.5:1 minimum)
- [ ] Text readable at 200% zoom
- [ ] No text in images
- [ ] Focus indicators visible

## 🔍 SEO Testing

### Meta Tags
- [ ] Title tag present on all pages
- [ ] Meta description present
- [ ] OpenGraph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URL set

### Structured Data
- [ ] JSON-LD Person schema valid
- [ ] JSON-LD WebSite schema valid
- [ ] Test with [Schema Validator](https://validator.schema.org/)

### Technical SEO
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] No broken links
- [ ] HTTPS enabled (after deployment)
- [ ] Mobile-friendly (Google test)

## 🔒 Security

- [ ] No API keys in code
- [ ] No sensitive data exposed
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Form has basic validation
- [ ] No console errors in production

## 🌐 Browser Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet

## 📱 Device Testing

- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)

## 🚀 Pre-Deployment

### Code Quality
- [ ] No console.log statements
- [ ] No commented-out code
- [ ] No TODO comments
- [ ] Code formatted consistently
- [ ] TypeScript strict mode passes

### Git
- [ ] All changes committed
- [ ] Meaningful commit messages
- [ ] .gitignore configured
- [ ] No sensitive files tracked
- [ ] Pushed to GitHub

### Environment
- [ ] Environment variables set (if any)
- [ ] Site URL configured
- [ ] Email address correct
- [ ] Social links correct

## 🎯 Post-Deployment

### Verification
- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] All links work
- [ ] Images load
- [ ] Forms work
- [ ] No console errors

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership
- [ ] Check indexing status

### Analytics (Optional)
- [ ] Google Analytics configured
- [ ] Vercel Analytics enabled
- [ ] Tracking working

### Social Sharing
- [ ] Test OpenGraph preview (Facebook Debugger)
- [ ] Test Twitter Card preview (Twitter Validator)
- [ ] Share on LinkedIn
- [ ] Share on Twitter

## 📊 Monitoring

### First Week
- [ ] Check Lighthouse scores
- [ ] Monitor Core Web Vitals
- [ ] Check for errors in console
- [ ] Review analytics data
- [ ] Test on different devices

### Ongoing
- [ ] Update projects regularly
- [ ] Keep dependencies updated
- [ ] Monitor performance
- [ ] Respond to feedback
- [ ] Fix bugs promptly

## ✅ Final Checks

- [ ] Everything above completed
- [ ] Tested on multiple devices
- [ ] No critical issues
- [ ] Ready to share
- [ ] Proud of the result! 🎉

---

## Quick Test Commands

```bash
# Install and build
npm install
npm run build

# Run production locally
npm run start

# Lint check
npm run lint

# Clear preloader (for testing)
# In browser console:
sessionStorage.clear()
```

## Common Issues

### Preloader won't show again
```javascript
// In browser console:
sessionStorage.clear()
// Then refresh
```

### Images not loading
- Check files are in `public/` folder
- Verify paths are correct
- Restart dev server

### Build fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port already in use
```bash
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

---

**Once all items are checked, you're ready to launch!** 🚀
