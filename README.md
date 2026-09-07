# CloudNova — S3 + CloudFront Demo Website

A responsive, animated static website designed for an AWS S3 + CloudFront demo.

## Files

- `index.html` — main website
- `style.css` — responsive styling and animations
- `script.js` — scroll animations, mobile navigation and deployment simulation

## Run locally

Open `index.html` directly in a browser, or use a local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Upload to S3

Upload all three files to the root of your S3 bucket:

```text
index.html
style.css
script.js
```

For a production-style CloudFront setup, use CloudFront with the S3 bucket as the origin. Prefer CloudFront Origin Access Control (OAC) and keep the S3 bucket private rather than enabling the legacy public website endpoint.

## Demo architecture

User Browser
    |
    v
CloudFront (HTTPS / CDN / Cache)
    |
    v
Amazon S3 (Static Assets)

## Optional next step

Add GitHub Actions to upload changed files to S3 and create a CloudFront invalidation automatically after every push.
