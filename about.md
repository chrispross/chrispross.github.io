---
layout: default
title: About
permalink: /about/
---
<div class="page" style="padding-top: var(--spacing-lg);">
<style>
  body {
    background: linear-gradient(135deg, #2d7b5e 0%, #1a4a3a 100%);
    min-height: 100vh;
  }
  .site-header {
    background: #245c4a;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .site-title { color: white; }
  .site-title:hover { color: rgba(255, 255, 255, 0.8); }
  .nav-links a { color: rgba(255, 255, 255, 0.7); }
  .nav-links a:hover, .nav-links a.active { color: white; }
  .nav-links a.active::after { background: rgba(255, 255, 255, 0.6); }
  .page-header h1 { color: white; }
  .page-header { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
  .site-footer { border-top: 1px solid rgba(255, 255, 255, 0.1); }
  .site-footer p { color: rgba(255, 255, 255, 0.4); }

  .about-layout {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  .about-left {
    flex: 0 0 55%;
  }

  .about-right {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .about-photo {
    width: 100%;
    border-radius: 20px;
    border: 5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .about-caption {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
    text-align: center;
  }

  .about-bio {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 640px) {
    .about-layout {
      flex-direction: column;
    }
    .about-left {
      flex: none;
      width: 100%;
    }
    .about-bio {
      text-align: center;
      margin-top: 1.5rem;
    }
  }
</style>

<div class="about-layout">
  <div class="about-left">
    <p class="about-caption">On the East Coast Trail in Newfoundland, 2025</p>
    <img src="/assets/images/about.jpeg" alt="Chris Ross on the East Coast Trail" class="about-photo">
  </div>
  <div class="about-right">
    <p class="about-bio">Researcher at the Media Ecosystem Observatory. MA in political science from McGill. From Calgary, based in Montreal. Interested in climate policy, media, and Canadian politics. PCT thruhiker.</p>
  </div>
</div>
</div>
