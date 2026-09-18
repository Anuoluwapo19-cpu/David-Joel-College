# David Joel Schools Website

The official single-page website for David Joel Schools. It presents the school's history, values, branches, admissions information, news and events, school anthem and pledge, memories, and contact details.

## Features

- Responsive single-page layout for desktop, tablet, and mobile screens
- Fixed navigation with a mobile menu
- School overview, mandate, vision, mission, and principles
- Founder and achievement sections
- Four school branch locations in Ibadan
- Admission information, entrance examination details, and bus stations
- Interactive news and upcoming-events tabs
- School anthem and pledge section
- School memories video section
- Contact information and Formspree-powered contact form
- Instagram and Facebook links
- Automatic copyright year in the footer
- XML sitemap for `https://davidjoelschools.com/`

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Poppins
- Formspree for contact-form submissions

There is no build tool, package manager, or backend in this repository.

## Project Structure

```text
.
├── index.html       # Page content and layout
├── style.css        # Styling, layout, animations, and responsive rules
├── index.js         # Menu, news tabs, event slider, and footer year behavior
├── images/          # School photos and event video
├── favicon.png      # Browser favicon
└── sitemap.xml      # Search-engine sitemap
```

## Run Locally

Because this is a static website, it can be opened directly in a browser:

1. Open `index.html` in a browser.
2. Or serve the project directory with any static web server.

For example, with Python installed:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

Using a local server is recommended because it provides a more realistic environment for loading media and testing links.

## Main Page Sections

The navigation links to these sections in `index.html`:

- `#home` - hero section and school highlights
- `#about` - background, mandate, vision, mission, and principles
- `#why-choose` - reasons to choose David Joel Schools
- `#history` - founders and recognition
- `#branches` - school locations and available levels
- `#admission` - admission, examinations, and transportation
- `#news` - interactive school news and event content
- `#anthem` - school anthem and pledge
- `#events` - school memories video
- `#contact` - addresses, phone numbers, email, and contact form

## JavaScript Behavior

`index.js` provides the site's client-side interactions:

- Toggles the mobile navigation menu
- Closes the mobile menu after a navigation link is selected
- Inserts the current year into the footer
- Controls the event slider when multiple slides are present
- Switches between the news and upcoming-event tabs

## Updating Content

- Edit page text and section content in `index.html`.
- Replace or add photos and videos in `images/` and update their paths in `index.html`.
- Update colors, spacing, typography, responsive breakpoints, and layout in `style.css`.
- Update interactive behavior in `index.js`.
- Keep the section IDs in `index.html` synchronized with the navigation links.

## External Services and Links

- The contact form submits to the Formspree endpoint configured in `index.html`.
- Admission enquiries use `admissions@davidjoelschools.com`.
- General enquiries use `info@davidjoelschools.com`.
- Social links point to the school's Instagram and Facebook profiles.
- The site references `https://davidjoelschools.com/` in the sitemap and footer.

Before deploying a change, confirm that these addresses, social URLs, the Formspree endpoint, and the public domain are still correct.

## Hosting

The project source is maintained on GitHub, deployed with Netlify, and published through a custom domain. There is no compilation step or environment configuration required for the current version.
