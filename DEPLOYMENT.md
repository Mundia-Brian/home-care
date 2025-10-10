# Rohi HomeCare - Deployment Guide

## Vercel Deployment

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available at https://vercel.com)

### Step 1: Prepare Your Repository
1. Push your code to a Git repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Configure project settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

5. Add Environment Variables (if needed):
   - `NODE_ENV=production`
   - `DATABASE_URL=<your-database-url>` (optional)

6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

### Environment Variables
Add these in Vercel dashboard under Settings → Environment Variables:

```
NODE_ENV=production
PORT=5000
DATABASE_URL=<your-neon-db-url>  # Optional, if using database
```

### Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify contact form submission works
- [ ] Check WhatsApp button links
- [ ] Test phone number links
- [ ] Verify email links
- [ ] Test responsive design on mobile
- [ ] Check all navigation links

### Troubleshooting

#### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

#### 404 Errors
- Verify `vercel.json` routing configuration
- Check that build output is in `dist/public`

#### API Routes Not Working
- Ensure API routes are prefixed with `/api`
- Check server/routes.ts is properly configured
- Verify serverless function limits (10s timeout on free tier)

### Performance Optimization
1. Enable Vercel Analytics (free)
2. Use Vercel Image Optimization for images
3. Enable Edge Caching for static assets

### Continuous Deployment
Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

### Alternative Deployment Options

#### Netlify
1. Similar to Vercel, connect your Git repo
2. Build command: `npm run build`
3. Publish directory: `dist/public`

#### Railway
1. Connect GitHub repository
2. Railway auto-detects Node.js
3. Add environment variables
4. Deploy automatically

#### Traditional VPS (DigitalOcean, AWS, etc.)
```bash
# On server
git clone <your-repo>
cd RohiHomeCare
npm install
npm run build
npm start
```

Use PM2 for process management:
```bash
npm install -g pm2
pm2 start dist/index.js --name rohi-homecare
pm2 save
pm2 startup
```

### Monitoring
- Use Vercel Analytics for traffic insights
- Set up error tracking (Sentry, LogRocket)
- Monitor uptime (UptimeRobot, Pingdom)

### Support
For deployment issues, check:
- Vercel Documentation: https://vercel.com/docs
- GitHub Issues: Create an issue in your repository
