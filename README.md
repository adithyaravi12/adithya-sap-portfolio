# Adithya Ravi — SAP Portfolio

A responsive professional portfolio highlighting my experience as an SAP Business Systems Analyst across SAP SD, Order-to-Cash, pricing, billing, SAP GTS, and cross-functional delivery in the medical-device industry.

## Live site

- [GitHub Pages](https://adithyaravi12.github.io/adithya-sap-portfolio/)

## Highlights

- Professional introduction and career direction
- Selected SAP projects with outcomes and technology tags
- SAP functional, platform, and delivery expertise
- Professional certification with credential-verification link
- Featured colleague testimonials on the homepage
- Dedicated page for all approved colleague feedback
- Optional Google Sheets and Apps Script testimonial feed
- Responsive layout, accessible navigation, and scroll-reveal animations
- Downloadable resume and direct contact links

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Google Sheets and Google Apps Script (optional)
- GitHub Pages

No framework, build step, or package installation is required.

## Project structure

```text
adithya-sap-portfolio/
├── index.html                  # Main portfolio page
├── feedback.html               # Complete colleague-feedback page
├── style.css                   # Layout, theme, responsive styles, and animations
├── script.js                   # Portfolio data and dynamic rendering
├── README.md
└── assets/
    ├── adithya-ravi-portrait.jpg
    └── Adithya-Ravi-Resume.pdf
    └── SAP_2011_Logo.svg
```

## Customize the portfolio

### Main page content

Edit `index.html` to update:

- Introduction and About content
- Contact and social links
- Professional certification and verification URL
- Resume path
- Career direction

### Projects and expertise

Edit the `projects` and `expertise` arrays near the top of `script.js`. The page renders these entries automatically.

### Testimonials

Testimonials can come from either:

1. The local `testimonials` array in `script.js`
2. An optional Google Apps Script web-app endpoint

To use a live feed, set:

```js
const GOOGLE_SHEETS_FEED_URL =
  "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

The endpoint should return an array in this format:

```json
[
  {
    "quote": "Feedback text",
    "name": "Colleague name",
    "role": "Role · Company",
    "relationship": "How we worked together",
    "approved": true
  }
]
```

Only publish feedback for which the colleague has explicitly provided consent. Replace the current example testimonials and placeholder copy before using the portfolio publicly.

### Portrait and resume

Replace the files in `assets/` while keeping the existing filenames, or update their paths in `index.html`.

### Theme and layout

Edit the CSS variables and component rules in `style.css`. The site uses responsive grid layouts and includes mobile breakpoints.

## Deploy with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder.
5. Save and wait for GitHub Pages to publish the site.

After making changes, commit and push them to `main`. If an older version remains visible, wait for deployment to finish and hard-refresh the browser.

## Contact

- [LinkedIn](https://www.linkedin.com/in/adithyaravi12/)
- [Email](mailto:adithyaravi@proton.me)
