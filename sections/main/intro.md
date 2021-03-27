# Welcome

Intended for a unique and personal touch, Imperfect Design System focuses on creating complex designs that can be adopted by our Postogon team irregardless of skill.


## Useful links

- [Imperfect and Company Github](https://www.github.com/imperfectandcompany.com)

Tailwind
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TailwindCSS Components](https://tailwindcomponents.com/)
- [TailwindCSS Snippets](https://codepen.io/search/pens?q=tailwindcss)

AlpineJS
- [AlpineJS](https://github.com/alpinejs/alpine)

Downloads
- [XAMPP](https://www.apachefriends.org/download.html)
- [Notepad++](https://notepad-plus-plus.org/downloads/)
- [GitHub Desktop](https://desktop.github.com/)
- [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/download-app)

## CDN
CDN stands for content-delivery-network, it allows us to use sources that aren't hosted locally. For example, the ones below are hosted on a server already for us.

### TailwindCSS
```code
lang:html
---
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
```

### AlpineJS
```code
lang:html
---
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.1/dist/alpine.min.js" defer></script>
```

### Postogon Boilerplate

```code
lang: html
---
<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.1/dist/alpine.min.js" defer></script>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
</body>
</html>
```