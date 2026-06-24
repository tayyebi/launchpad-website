# راهنمای ایجاد پست وبلاگ — Blog Post Creation Guide

This document describes the complete workflow for adding a new blog post to the Launchpad website.

## Overview

The blog is a collection of hand-crafted HTML pages (no build system). Each post lives as a standalone `.html` file under `blog/`. The blog index (`blog/index.html`) lists all published posts.

## File Structure

```
blog/
  index.html                          # Blog listing page
  <english-slug>.html                 # Individual blog post
  <english-slug>.html                 # ...
assets/
  css/
    blog.css                          # Blog-specific styles
    design-tokens.css                 # Design tokens (shared)
    styles.css                        # Main site styles (shared)
  js/
    app.js                            # Main site JS (shared)
```

## Step-by-Step Workflow

### 1. Plan the Post

- Choose a topic relevant to time management, productivity, task management, or the Launchpad app.
- Write in Persian (fa-IR).
- Target length: 800–1500 words.
- Mention Launchpad naturally once or twice as a solution where relevant.

### 2. Create the HTML File

Create a new file at `blog/<english-slug>.html`.

**Naming convention:**

- Use **English lowercase slug** (kebab-case).
- No Persian characters in the filename.
- Examples:
  - `best-persian-time-management-app.html`
  - `how-to-manage-time-better.html`

**Use the following template:**

```html
<!doctype html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>عنوان پست - وبلاگ لانچ‌پد</title>
  <meta name="description" content="توضیح کوتاه برای SEO" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.lpad.ir/blog/ENGLISH-SLUG" />
  <meta property="og:title" content="عنوان پست" />
  <meta property="og:description" content="توضیح کوتاه" />
  <meta property="og:url" content="https://www.lpad.ir/blog/ENGLISH-SLUG" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="fa_IR" />
  <meta property="og:site_name" content="لانچ‌پد" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="عنوان پست" />
  <meta name="twitter:description" content="توضیح کوتاه" />

  <!-- Schema.org Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "عنوان پست",
    "description": "توضیح کوتاه",
    "author": {
      "@type": "Person",
      "name": "تیم لانچ‌پد"
    },
    "datePublished": "YYYY-MM-DD",
    "dateModified": "YYYY-MM-DD",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.lpad.ir/blog/ENGLISH-SLUG"
    },
    "publisher": {
      "@type": "Organization",
      "name": "لانچ‌پد",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lpad.ir/assets/images/logo.png"
      }
    }
  }
  </script>

  <link rel="stylesheet" href="../assets/css/design-tokens.css" />
  <link rel="stylesheet" href="../assets/css/styles.css" />
  <link rel="stylesheet" href="../assets/css/blog.css" />
  <link rel="preload" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" /></noscript>
</head>
<body>
  <header id="site-header" role="banner">
    <nav aria-label="ناوبری اصلی">
      <a href="/" class="brand" aria-label="صفحه اصلی لانچ‌پد">
        <span class="brand-dot" aria-hidden="true"></span>
        لانچ‌پد
      </a>
      <ul class="nav-links">
        <li><a href="/#features">ویژگی‌ها</a></li>
        <li><a href="/#gallery">گالری</a></li>
        <li><a href="/blog/">وبلاگ</a></li>
        <li><a href="/#download">دانلود</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article class="blog-post">
      <div class="blog-container">
        <nav class="breadcrumb" aria-label="مسیر راهنما">
          <a href="/">خانه</a>
          <span class="breadcrumb-sep">/</span>
          <a href="/blog/">وبلاگ</a>
          <span class="breadcrumb-sep">/</span>
          <span>عنوان پست</span>
        </nav>

        <header class="post-header">
          <div class="post-meta">
            <time datetime="YYYY-MM-DD">تاریخ شمسی</time>
            <span class="reading-time">خواندن: X دقیقه</span>
          </div>
          <h1>عنوان پست</h1>
        </header>

        <div class="post-cover pattern-N"></div>

        <div class="post-content">
          <!-- BODY CONTENT HERE -->
          <!-- Use <h2> for section headings, <h3> for sub-sections -->
          <!-- Use <p> for paragraphs -->
          <!-- Use <ul>/<ol> for lists -->
          <!-- Use <blockquote> for highlights or tips -->
          <!-- Use <strong> for emphasis -->
        </div>

        <footer class="post-footer">
          <div class="related-posts">
            <h3>مطالب مرتبط</h3>
            <div class="related-grid">
              <!-- Link to 2-3 other posts -->
              <a href="RELATED-POST.html" class="related-card">
                <div class="related-cover pattern-N"></div>
                <span class="related-title">عنوان مطلب مرتبط</span>
              </a>
              <!-- ... -->
            </div>
          </div>
        </footer>
      </div>
    </article>
  </main>

  <footer id="site-footer" role="contentinfo">
    <div class="footer-links">
      <a href="https://github.com/tayyebi/launchpad" rel="nofollow noreferrer" target="_blank">گیت‌هاب</a>
      <a href="https://github.com/tayyebi/launchpad/issues" rel="nofollow noreferrer" target="_blank">پشتیبانی</a>
      <a href="https://cafebazaar.ir/app/ir.lpad.mobile" rel="nofollow noreferrer" target="_blank">کافه بازار</a>
      <a href="/blog/">وبلاگ</a>
    </div>
    <p>کپی‌رایت &copy; ۱۴۰۴ - لانچ‌پد. همه حقوق محفوظ است.</p>
  </footer>

  <script src="../assets/js/app.js" defer></script>
</body>
</html>
```

### 3. Choose a Cover Pattern

Each post needs a visual cover. Instead of real images, use CSS-only gradient patterns.

Available patterns (defined in `assets/css/blog.css`):

| Class         | Colors                          | Vibe              |
|---------------|---------------------------------|-------------------|
| `pattern-1`   | Sky → Blush gradient            | Calm, productive  |
| `pattern-2`   | Blush → Sunset gradient         | Warm, energetic   |
| `pattern-3`   | Sunset → Sky gradient           | Creative, balanced|
| `pattern-4`   | Sky → teal gradient             | Focus, deep work  |
| `pattern-5`   | Purple → Blush gradient         | Thoughtful, calm  |
| `pattern-6`   | Sunset → warm yellow gradient   | Optimistic, fresh |
| `pattern-7`   | Cool blue → Sky gradient        | Professional      |
| `pattern-8`   | Blush → rose gradient           | Friendly, warm    |

Apply the pattern class to the `.post-cover` div. Use different patterns for different posts to create visual variety.

### 4. Writing Content Guidelines

- **Target audience:** Persian-speaking Android users interested in productivity.
- **Tone:** Educational, friendly, practical. Avoid being overly salesy.
- **Launchpad mentions:** 1–2 natural mentions per post. Frame as "one of the good options" rather than "the only option."
- **Structure:** Use clear `<h2>` headings, short paragraphs, bullet points, and blockquotes.
- **SEO:** Include the target keyword in the `<h1>`, first paragraph, and at least one `<h2>`.
- **Persian date:** Use the Solar Hijri calendar (e.g., "۲۴ خرداد ۱۴۰۵").
- **Compute reading time:** 200 words per minute for Persian. Round to nearest minute.

### 5. Update the Blog Index

Open `blog/index.html` and add a new card for the post in the `.blog-grid` section.

Card format:
```html
<article class="blog-card">
  <a href="ENGLISH-SLUG.html" class="card-cover-link">
    <div class="card-cover pattern-N"></div>
  </a>
  <div class="card-body">
    <time datetime="YYYY-MM-DD">تاریخ شمسی</time>
    <h2><a href="ENGLISH-SLUG.html">عنوان پست</a></h2>
    <p>خلاصه‌ای از مطلب در ۱-۲ خط...</p>
    <a href="ENGLISH-SLUG.html" class="read-more">ادامه مطلب</a>
  </div>
</article>
```

**Order:** Newest post first (most recent at the top of the grid).

### 6. Update the Sitemap

Open `sitemap.xml` and add a `<url>` entry for:

- `https://www.lpad.ir/blog/` (blog index)
- `https://www.lpad.ir/blog/ENGLISH-SLUG` (each new post)

Example:
```xml
<url>
  <loc>https://www.lpad.ir/blog/ENGLISH-SLUG</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Set `priority` to `0.8` for individual posts, `0.9` for the blog index.

### 7. Add Breadcrumb Structured Data

Each post should include BreadcrumbList Schema.org JSON-LD in the `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "خانه", "item": "https://www.lpad.ir"},
    {"@type": "ListItem", "position": 2, "name": "وبلاگ", "item": "https://www.lpad.ir/blog/"},
    {"@type": "ListItem", "position": 3, "name": "عنوان پست", "item": "https://www.lpad.ir/blog/ENGLISH-SLUG"}
  ]
}
</script>
```

### 8. Update Related Posts on Other Posts

When adding a new post, consider updating the "مطالب مرتبط" (related posts) section on existing posts to include the new one. Keep 2–3 related links per post.

### 9. Verify

Checklist before committing:

- [ ] Page renders correctly in a browser (RTL layout, fonts)
- [ ] All links work (nav, breadcrumb, related posts, footer)
- [ ] Sitemap includes the new URL
- [ ] Navigation on `index.html` links to `/blog/`
- [ ] Canonical URL is correct
- [ ] Open Graph and Twitter Card meta tags are present
- [ ] Schema.org Article JSON-LD is valid
- [ ] Reading time is computed correctly
- [ ] Persian date is accurate
- [ ] No broken image references (using CSS patterns instead)
- [ ] Responsive: check mobile layout

## Maintenance Notes

- There is no pagination yet. If the blog grows beyond 12 posts, consider adding pagination or a "view older" button in `blog/index.html`.
- No tags or categories system exists yet. Categories can be added later by grouping cards visually or adding filter buttons in the blog index.
- No search functionality. If needed, a simple client-side search can be added to `blog/index.html` using JavaScript.
