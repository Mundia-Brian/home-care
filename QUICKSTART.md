# 🚀 Quick Start Guide - Rohi HomeCare

## Local Development (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit: http://localhost:5000
```

## Deploy to Vercel (10 minutes)

### Method 1: Automated Script ⚡
```bash
./deploy-vercel.sh
```

### Method 2: Vercel Dashboard 🖱️

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects settings)

3. **Done!** 🎉
   - Your site is live at: `https://your-project.vercel.app`

### Method 3: Vercel CLI 💻
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Environment Variables (Optional)

Add in Vercel Dashboard → Settings → Environment Variables:

```
NODE_ENV=production
PORT=5000
DATABASE_URL=<your-database-url>
ALLOWED_ORIGINS=https://yourdomain.com
```

## Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., rohihomecare.co.ke)
3. Update DNS records as shown by Vercel
4. Wait for DNS propagation (5-30 minutes)

## Testing Checklist

After deployment, test:
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] WhatsApp button opens chat
- [ ] Phone links work on mobile
- [ ] Email links work
- [ ] Responsive design on mobile/tablet
- [ ] All pages load correctly

## Troubleshooting

### Build fails?
```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run check
```

### Contact form not working?
- Check browser console for errors
- Verify API endpoint is accessible
- Check Vercel function logs

### 404 errors?
- Verify vercel.json routing configuration
- Check build output directory

## Support

- 📖 Full docs: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🔒 Security: See [SECURITY.md](./SECURITY.md)
- 📋 All changes: See [IMPROVEMENTS.md](./IMPROVEMENTS.md)
- 📊 Summary: See [SUMMARY.md](./SUMMARY.md)

## Quick Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run check        # TypeScript type check
./deploy-vercel.sh   # Deploy to Vercel
```

## What's Next?

1. ✅ Deploy to Vercel
2. 🌐 Add custom domain
3. 📧 Set up email service (SendGrid)
4. 📊 Add analytics (Vercel Analytics)
5. 🔍 Set up error tracking (Sentry)
6. 💾 Connect database (Neon PostgreSQL)

---

**Need help?** Check the detailed guides in the documentation files or contact support.
