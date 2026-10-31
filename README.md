# NEON VAGRANT — Static Website Prototype

A zero-backend HTML/CSS/JS prototype for the Neon Vagrant setting.

## Run it locally

Open `index.html` in a browser. For best results (and to avoid some browser restrictions), serve the folder with any simple local web server.

Examples:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing for free

This folder is ready for GitHub Pages, Cloudflare Pages, Netlify, or any basic static hosting service.

### GitHub Pages quick path
1. Create a public GitHub repository.
2. Upload everything in this folder to the repository root.
3. Open repository **Settings → Pages**.
4. Choose **Deploy from a branch** and select the main branch / root folder.
5. GitHub will provide the live URL.

## Art assets to add

The site deliberately works without the files below. Missing images are replaced by labelled placeholders.

### Main imagery
- `assets/hero-neon-vagrant.jpg` — wide homepage key art
- `assets/ship-neon-vagrant.jpg` — ship exterior reference

### Neon Vagrant crew — mugshots (300×400)
- `assets/mugshot-mara.jpg`
- `assets/mugshot-jett.jpg`
- `assets/mugshot-boone.jpg`
- `assets/mugshot-ivo.jpg`
- `assets/mugshot-calder.jpg`
- `assets/mugshot-sabine.jpg`
- `assets/mugshot-pip-human.jpg`

### Neon Vagrant crew — large reference images
- `assets/reference-mara.jpg`
- `assets/reference-jett.jpg`
- `assets/reference-boone.jpg`
- `assets/reference-ivo.jpg`
- `assets/reference-calder.jpg`
- `assets/reference-sabine.jpg`
- `assets/reference-pip.jpg`

### Wider Galaxy — icons / profile cards
- `assets/id-veda.jpg` — official Space Patrol ID
- `assets/capture-mercy.jpg` — digital enforcement capture
- `assets/mugshot-cass.jpg`
- `assets/mugshot-beck.jpg`
- `assets/mugshot-orion.jpg`
- `assets/magazine-celestine.jpg` — business magazine cover

### Wider Galaxy — large reference images
- `assets/reference-veda.jpg`
- `assets/reference-mercy.jpg`
- `assets/reference-cass.jpg`
- `assets/reference-beck.jpg`
- `assets/reference-orion.jpg`
- `assets/reference-celestine.jpg`

### Optional location art
The initial four location cards use CSS placeholders. If you decide to keep these locations, you can wire dedicated images into the HTML later:
- Port Meridian — neutral orbital trade hub
- Helix Crown — pristine Asterion commercial station
- Gallows Moon — dusty frontier settlement
- Vesper Run — famous racing world / orbital speedway

## Main content areas

- **Home** — story tone, setting hook, Asterion / independent transit premise
- **The Vagrant** — ship overview + crew mugshot gallery + dynamic bios
- **The Galaxy** — Space Patrol, Asterion, Starbreakers + external character dossiers
- **Places of Note** — starter location cards
- **M.E.R.C.Y. cut-ins** — randomized black-market survival tips triggered on load and navigation

## Editing bios

All character data is stored near the top of `script.js`. Each character contains:
- name
- role
- status
- mugshot path
- reference-art path
- biography
- quote
- dossier metadata

You can add new characters by copying one object and adding it to either the `crew` or `galaxyPeople` arrays.

## Design notes

The site intentionally leans toward:
- chunky shipboard terminal UI
- retro-futurist space-western rather than sleek cyberpunk
- muted navy / charcoal foundation
- cyan + amber warning accents
- light CRT scanlines
- dossier / booking / corporate-file visual language

The CSS is all in `style.css`; no framework or build process is required.
