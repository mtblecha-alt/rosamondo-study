# Rosamondo

B2B-Marktplatz für zirkuläre Materialien — wo überschüssige Werkstatt- und Produktionsmaterialien ein neues Leben bekommen.

## Tech Stack

| Layer | Technologie |
|-------|-------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Sprache | React 18, JavaScript (JSX) |

## Schnellstart

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Skripte

| Befehl | Beschreibung |
|--------|-------------|
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Produktions-Build erstellen |
| `npm run start` | Produktionsserver starten |

## Projektstruktur

```
/
├── app/
│   ├── layout.jsx          # Root-Layout mit Metadaten
│   ├── page.jsx            # Startseite
│   ├── globals.css         # Globale Styles & Font-Definitionen
│   └── marktplatz/
│       └── page.jsx        # Marktplatz-Seite mit 3D-Karussell
│
├── components/
│   ├── Header.jsx          # Fixierter Header mit Blur-Effekt & Overlay-Navigation
│   ├── Hero.jsx            # Vollbild-Hero mit Parallax & Maus-Tracking
│   ├── HowItWorks.jsx      # "So funktioniert's"-Sektion
│   ├── Gallery.jsx         # Horizontal scrollbare Bildergalerie
│   ├── Footer.jsx          # Seitenfu�
│   └── RosamondoLogo.jsx   # Animiertes 3D-SVG-Logo
│
├── data/
│   ├── gallery.js          # Galeriebilder (geteilt zwischen Gallery & Marktplatz)
│   └── navigation.js       # Navigationslinks für den Header
│
├── hooks/
│   └── useDragScroll.js    # Drag-to-scroll Hook für horizontale Container
│
└── public/
    ├── fonts/              # Lokale Schriften (MKLatin, HelveticaNeue)
    └── images/             # Statische Bilder
        └── gallery/        # Galeriebilder (gallery-1.png, gallery-2.png)
```

## Design-System

### Schriften

- **MKLatin** (`font-mk-latin`) — Überschriften, Logotext. Dateipfad: `public/fonts/MKLatinLight.ttf`
- **HelveticaNeue** (`font-helvetica`) — Fließtext, UI-Elemente. Fällt auf System-Helvetica zurück.

### Farben

Das gesamte UI verwendet einen Dark-Mode-First-Ansatz:

| Token | Wert | Verwendung |
|-------|------|-----------|
| Hintergrund (dunkel) | `#0a0a0a` | Sektionshintergründe |
| Hintergrund (tief) | `#080808` | Footer, Marktplatz |
| Text | `rgba(255,255,255,0.7–0.8)` | Primärtext |
| Subtile Elemente | `rgba(255,255,255,0.2–0.35)` | Labels, Captions |

### Animationen

Alle Animationen verwenden die `premium`-Easing-Kurve: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

## Externe Ressourcen

- Platzhalterbilder: [Unsplash](https://images.unsplash.com)
- Produktionsbilder: `public/images/gallery/gallery-1.png`, `gallery-2.png`
