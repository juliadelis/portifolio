# JDelis Portfolio

A multilingual portfolio website, built with Next.js App Router. The project presents selected case studies, a complete projects index, animated landing sections, and a contact flow powered by Resend.

The codebase is structured as a production portfolio rather than a template: project pages have custom visual systems, reusable case-study sections, localized content, and a dedicated `/projects` archive with category filtering.

## Table of Contents

- [Product Overview](#product-overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Internationalization](#internationalization)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

## Product Overview

This portfolio is designed to communicate both design sensibility and frontend implementation ability. It includes:

- a homepage with hero, featured projects, about, and contact sections;
- a full projects page with accumulated category filters;
- detailed case-study pages for JDelis, ERA Principle, Elysius, and Horsing Around;
- bilingual content in English and Portuguese;
- custom visual sections per project, including color systems, logo galleries, website galleries, and final project/code CTAs.

The visual direction uses a restrained dark portfolio shell, light case-study pages, strong project imagery, and motion for transitions and scroll-based emphasis.

## Core Features

- **Next.js App Router** using `src/app`.
- **Reusable project cards** with full-card navigation.
- **Featured homepage project list** limited to the latest three projects.
- **Full project archive** at `/projects` with multi-select category filtering.
- **Case study templates** composed from reusable sections such as `ProjectHeader`, `CaseStudyScroll`, `LogotypeProjects`, and `EndingProject`.
- **Project-specific galleries** for individual case studies.
- **Internationalization** with `i18next` and `react-i18next`.
- **Contact form API route** using Resend.
- **Motion layer** powered by Framer Motion.
- **Tailwind CSS styling** with project-specific utility composition.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14.1.0 |
| Runtime UI | React 18 |
| Styling | Tailwind CSS, Sass modules for selected sections |
| Animation | Framer Motion, Lenis |
| Icons | Heroicons, React Icons |
| Internationalization | i18next, react-i18next |
| Email | Resend |
| Deployment target | Vercel |

## Screenshots

Current visual preview using assets from the project:

### Homepage

![JDelis homepage visual](public/docs/homepage.png)

### Projects

![JDelis projects visual](public/docs/project-index.png)

### Case Study Detail

![Horsing Around web gallery](public/docs/horsing-around-case-study.png)

![Horsing Around saddle visual](public/docs/era-principle-case-study.png)

## Project Structure

```text
src/
  app/
    api/create_four/              Contact form API route
    page.js                       Homepage
    layout.js                     Root layout and global i18n import
    projects/
      page.js                     Full project archive
      elysius/                    Elysius case study
      era-principle/              ERA Principle case study
      horsing-around/             Horsing Around case study
      portifolio/                 JDelis portfolio case study

  components/
    Navbar.jsx                    Main navigation and language switcher
    HeroSectionNew.jsx            Homepage hero
    ProjectsSectionNew.jsx        Featured homepage projects
    ProjectCard.jsx               Reusable project card
    AboutSectionNew.jsx           Homepage about section
    EmailSection.jsx              Contact form
    projects/                     Shared case-study components

public/
  images/                         Static project and brand assets
  locales/
    en/translation.json           English copy
    pt/translation.json           Portuguese copy
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with featured content |
| `/projects` | Full projects archive with category filters |
| `/projects/horsing-around` | Horsing Around application case study |
| `/projects/elysius` | Elysius website case study |
| `/projects/era-principle` | ERA Principle website case study |
| `/projects/portifolio` | JDelis portfolio case study |

## Internationalization

Translations live in:

```text
public/locales/en/translation.json
public/locales/pt/translation.json
```

The i18n instance is configured in:

```text
src/i18n.js
```

Translations are imported synchronously into the i18n resource bundle. This is intentional: it prevents server/client hydration mismatches where the server renders translation keys and the client renders translated text.

When adding copy:

1. Add the same key to both locale files.
2. Use `const { t } = useTranslation(["translation"])` in client components.
3. Avoid using untranslated fallback strings in rendered UI unless they are intentional.


## Deployment

The project is configured for Vercel. The `vercel.json` file defines:

```json
{
  "name": "portfolio",
  "alias": ["juliadelis.com", "www.juliadelis.com"]
}
```


