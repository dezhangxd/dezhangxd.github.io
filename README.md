# Personal Academic Homepage

Bilingual (ZH/EN) multi-page academic homepage built with pure HTML/CSS/JavaScript.

## Project Structure

```
homepage/
├── index.html
├── publications.html
├── competitions.html
├── honors.html
├── activities.html
├── cv.html
├── css/
│   └── main.css
├── js/
│   ├── i18n.js
│   ├── main.js
│   └── data/
│       ├── profile.js
│       ├── publications.js
│       ├── competitions.js
│       ├── honors.js
│       ├── talks.js
│       ├── service.js
│       └── patents.js
├── images/
├── slides/
└── codes/
```

## Local Preview

```bash
python3 -m http.server 8765
```

Then visit: `http://localhost:8765`

## Where to Edit Content

- Profile / bio / contact / education / news: `js/data/profile.js`
- Publications: `js/data/publications.js`
- Competitions: `js/data/competitions.js`
- Honors: `js/data/honors.js`
- Talks: `js/data/talks.js`
- Academic service: `js/data/service.js`
- Patents: `js/data/patents.js`

## CV and PDF Export

- Open `cv.html`
- Click `Print / PDF` (or `Cmd+P`)
- Recommend:
  - Paper: A4
  - Scale: 100%
  - Disable browser headers/footers
  - Destination: Save as PDF

## Deploy to GitHub Pages

1. Push this folder to repository `dezhangxd/dezhangxd.github.io` (branch `main`)
2. In GitHub: `Settings -> Pages`
3. Source: `Deploy from a branch`
4. Branch: `main` / folder: `/ (root)`

## Reuse This Template

If you want to build your own homepage based on this template:

1. **Create your own repo**
   - Recommended repo name: `<your-username>.github.io`
   - Copy all files from this project into your repo

2. **Replace your personal data**
   - Edit all files in `js/data/`
   - At minimum update:
     - `profile.js` (name, title, affiliation, contact, bio, education, news)
     - `publications.js`
     - `competitions.js`
     - `honors.js`
     - `talks.js`
     - `service.js`
     - `patents.js`

3. **Replace static assets**
   - Put your photo and figures under `images/`
   - Update file paths referenced in `js/data/*.js`
   - Replace slides/material links if needed

4. **Verify locally**
   - Run:
     ```bash
     python3 -m http.server 8765
     ```
   - Check `index.html`, `cv.html`, and print/PDF export
   - Confirm both Chinese/English modes render correctly

5. **Publish**
   - Push to GitHub
   - Enable GitHub Pages (`Settings -> Pages -> main /(root)`)
   - Visit `https://<your-username>.github.io`

## Language Switch

Use the top-right language button. Preference is stored in `localStorage`.
