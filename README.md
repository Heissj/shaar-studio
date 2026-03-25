# SHAAR Studio — shaarstudio.com

Street & documentary photography portfolio by Sajjad Sharifi.  
Built with Astro + Decap CMS, deployed on Netlify.

---

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`

---

## Deploy to Netlify (Step by Step)

### 1. Push to GitHub

If you don't have a GitHub account, create one at github.com.

```bash
# In this project folder:
git init
git add .
git commit -m "Initial SHAAR Studio site"

# Create a new repo on github.com (name it "shaar-studio")
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/shaar-studio.git
git branch -M main
git push -u origin main
```

### 2. Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign up with your GitHub account
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** → find and select your `shaar-studio` repository
4. Netlify will auto-detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy site"**
6. Wait ~60 seconds — your site is live!

### 3. Connect Your Domain (shaarstudio.com)

1. In Netlify dashboard → **Domain management** → **Add custom domain**
2. Enter `shaarstudio.com`
3. Netlify will give you nameservers (e.g., `dns1.p01.nsone.net`)
4. Go to your domain registrar (where you bought shaarstudio.com)
5. Change the nameservers to the ones Netlify provided
6. Wait 10-30 minutes for DNS propagation
7. Netlify automatically sets up HTTPS

### 4. Enable the CMS (Admin Panel)

1. In Netlify dashboard → **Integrations** → **Identity** → **Enable Identity**
2. Under Identity settings → **Registration** → set to **Invite only**
3. Under Identity → **Services** → enable **Git Gateway**
4. Go to Identity tab → **Invite users** → enter your email
5. Check your email, click the confirmation link, set a password
6. Now visit `shaarstudio.com/admin` — log in with your email/password

That's it. You can now:
- Upload photos and assign them to Gallery, Kabul Streets, Featured, or About
- Write and edit journal posts with rich text and inline images
- Edit all page text (hero, about, contact, etc.)
- All changes auto-deploy in ~30 seconds

---

## Project Structure

```
shaar-studio/
├── public/
│   ├── admin/           # Decap CMS dashboard
│   │   ├── index.html
│   │   └── config.yml   # CMS field definitions
│   └── images/          # Uploaded photos go here
├── src/
│   ├── components/      # Nav, Footer
│   ├── content/
│   │   ├── journal/     # Markdown blog posts
│   │   └── gallery/     # Photo data (JSON)
│   ├── data/            # Page content (JSON, CMS-editable)
│   ├── layouts/         # Main HTML layout
│   ├── pages/           # Each page of the site
│   └── styles/          # Global CSS
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## How Content Works

- **Photos**: Add via CMS → creates JSON files in `src/content/gallery/`
- **Journal posts**: Write in CMS → creates Markdown files in `src/content/journal/`
- **Page text**: Edit in CMS → updates JSON files in `src/data/`
- **Images**: Uploaded via CMS → stored in `public/images/`

Every change through the CMS creates a Git commit, triggers a Netlify rebuild, and your site updates automatically.

---

## Costs

- **Netlify Free Tier**: hosting, CDN, identity, forms — $0/month
- **Domain**: whatever you already pay for shaarstudio.com
- **Total**: $0/month

---

Built with care by Sajjad Sharifi. SHAAR (شهر) means city.
