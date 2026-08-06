# "Dad" App

This will be a one-page *static* web application that lets users view a handful of JPEG photos (4 to start) that are in the /photos subdirectory. Photo filenames will be numbered (e.g. "/photos/2.jpg"), and the number of photos will be preset as a Javascript constant at the top of the application code, so there's no need to scan the /photos folder - which wouldn't be possible anyway with a frontend-only application.

So here's what I want from the app:

- As mentioned before, this is static HTML+CSS+JS, with no backend component. We won't even build static files dynamically... just create static HTML, CSS, and JS resources we can host on a public server
- The app is called "Dad" (it's for my father), but don't call it that in the interface or HTML;  we'll just call it "Photo Viewer"
- App will have a clean, material feel with sans-serif fonts
- If external tools/libraries/styles are used, include them via CDN-hosted resources
- This is a single page application. When the page loads, show ALL of the photos in a photo grid. Make it responsive, though... if on a mobile device, show only 1 photo per row. Otherwise, I imagine we'll fit in 3x2 or 2x2.
- User should be able to zoom into a photo by pinch-zooming in the native browser. In other words, don't restrict page zoom to 100% (as is common with a lot of modern responsive web apps)
- Each photo should have a white border and a subtle drop shadow
- In addition, show a number circle above the top-left corner of each photo ("1", "2", "3", "4", etc.). This should have white text and a dark gray background for the circle.


## Prerequisites
- CapRover with GitHub webhook (for deployment)

## CapRover Deployment

### One-time setup

1. Add the `captain-definition` file to your repo root (already included)
2. In CapRover, create an app named `dad`
3. Enable "Enable Deploy Webhook" on the app
4. Point your domain `dad.app.ryanroper.com` to the app in CapRover

### Deploy

Push to your GitHub repo. CapRover will auto-deploy via webhook.

## 5. Architecture

- **No build step** — vanilla JS ES modules served directly
- **No client framework** — vanilla DOM manipulation
- **No SSR** — static HTML + client-side rendering
