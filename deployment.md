
---

# 🚀 Deployment & Production Guide

This guide ensures your **Hatti Dashboard** is properly optimized, secured, and live on your preferred hosting provider.

---

## 🛠️ 1. Pre-Deployment Configuration

### **Environment Variables (`.env`)**

Vite only exposes variables prefixed with `VITE_`. Ensure your `.env.production` is set up:

```bash
VITE_API_URL=https://api.yourdomain.com
VITE_FIREBASE_ID=your_id_here

```

### **Manual Build Test**

Always run a local build test to ensure there are no TypeScript or Linting errors before pushing to production:

```bash
npm run build
# OR
yarn build

```

This generates a `/dist` folder containing optimized assets.

---

## 🌐 2. Hosting Options (Step-by-Step)

### **A. Vercel / Netlify (Recommended)**

These platforms are the best for React/Vite apps because they handle SSL and Global CDN automatically.

1. **Link Repository:** Connect your GitHub/GitLab.
2. **Settings:**
* **Build Command:** `npm run build`
* **Output Directory:** `dist`


3. **SPA Handling:** * For **Netlify**, create a `public/_redirects` file: `/* /index.html 200`
* For **Vercel**, it handles this automatically via the `vercel.json` file.



### **B. Shared Hosting / cPanel**

1. Run `npm run build`.
2. Upload the **contents** of the `/dist` folder to your `public_html`.
3. Create/Edit a `.htaccess` file to prevent 404 errors on refresh:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

```

---

## 🏗️ 3. Advanced Server Config (Nginx)

If you are using a **VPS (Ubuntu/DigitalOcean)**, use this block for maximum performance:

```nginx
server {
    listen 80;
    server_name yourdashboard.com;
    root /var/www/hatti/dist;

    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    # Cache static assets for better speed
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}

```

---

## ✅ 4. Final Production Checklist

| Status | Checkpoint | Why? |
| --- | --- | --- |
| ☐ | **HTTPS Enabled** | Required for security and PWA features. |
| ☐ | **Console Logs** | Remove `console.log` in production for security. |
| ☐ | **Favicon & Meta** | Ensure your custom logo appears in browser tabs. |
| ☐ | **API Endpoint** | Verify the build is hitting the LIVE API, not localhost. |

---

## 📝 5. Troubleshooting

* **Issue: Blank Page on Refresh?** Your server isn't configured for Single Page Apps (SPA). Refer to the `.htaccess` or `Nginx` section above.
* **Issue: Styles look broken?** Ensure all assets are being loaded from the correct base path in `vite.config.ts`.

---

