# chrispross.github.io

Personal website built with Jekyll.

## Local Development

### Prerequisites

- Ruby (2.7+)
- Bundler (`gem install bundler`)

### Setup

```bash
cd chrispross.github.io
bundle install
```

### Run locally

```bash
bundle exec jekyll serve
```

Then open http://localhost:4000

## Adding Content

### Blog Posts

Create a new file in `_posts/` with this naming format:
```
YYYY-MM-DD-your-post-title.md
```

Example front matter:
```yaml
---
layout: post
title: "Your Post Title"
description: "A brief description."
date: 2026-01-15
---
```

### Projects

Create a new file in `_work/` (any name ending in `.md`):

```yaml
---
layout: project
title: "Project Name"
description: "Brief description shown in the grid."
tags: [Tag1, Tag2]
link: https://example.com
---
```

## Deploying to GitHub Pages

1. Create a repository named `chrispross.github.io` on GitHub
2. Push this code to the `main` branch
3. Go to Settings > Pages and select "Deploy from a branch" with `main`
4. Your site will be live at https://chrispross.github.io

## File Structure

```
├── _config.yml      # Site configuration
├── _layouts/        # Page templates
├── _includes/       # Reusable components (header, footer)
├── _posts/          # Blog posts
├── _work/           # Portfolio projects
├── assets/
│   ├── css/         # Styles
│   └── js/          # JavaScript
├── index.html       # Home page
├── about.md         # About page
├── work.html        # Work/portfolio page
├── writing.html     # Blog archive page
└── contact.md       # Contact page
```

## Customization

- **Colors**: Edit CSS variables in `assets/css/main.css`
- **Navigation**: Edit `_includes/header.html`
- **Site info**: Edit `_config.yml`
