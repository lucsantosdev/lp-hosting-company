# AtlasEdge Hosting - Landing Page

**Read this in other languages:** [English](README.md) | [Português](README.pt.md) | [Español](README.es.md)

---

A strategic, minimalist landing page model for a fictional enterprise hosting company. This project showcases modern web design with elegant aesthetics, enterprise messaging, and a lightweight multilingual system.

![AtlasEdge](https://img.shields.io/badge/AtlasEdge-Enterprise%20Hosting-b28b4b?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Minimalist Aesthetic**: Premium color palette with gold accents
- **Elegant Typography**: Playfair Display with custom wordmark logo
- **Smooth Scrolling**: Anchor-based navigation with smooth transitions
- **Custom SVG Icons**: Brand favicon and trust section illustrations
- **Professional Layout**: Enterprise-focused sections and messaging

### 🌍 Multilingual Support (EN / PT / ES)
- **Client-Side Translation**: JavaScript-powered language toggle
- **Three Languages**: English, Portuguese, and Spanish
- **Persistent Choice**: Language preference saved in `localStorage`
- **Dynamic Updates**: All content including placeholders and button values
- **Rotating Metrics**: Localized labels for live-updating statistics

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all device sizes
- **Burger Menu**: Clean navigation for mobile devices
- **Adaptive Grids**: Flexible layouts using CSS Grid
- **Touch-Friendly**: Optimized for mobile interactions

### 🚀 Performance
- **Zero Dependencies**: Pure vanilla JavaScript
- **Lightweight SVGs**: Custom illustrations under 2KB each
- **No Build Process**: Static HTML ready to deploy
- **Fast Load Times**: Minimal external resources

### ♿ Accessibility
- **ARIA Labels**: Proper semantic markup and roles
- **Keyboard Navigation**: Full keyboard support
- **Smooth Scroll**: CSS-based smooth scrolling behavior
- **Focus States**: Clear visual indicators

### 🎯 Sections
1. **Hero Section**: Enterprise value proposition with rotating metrics
2. **About AtlasEdge**: Company introduction with illustrated cards
3. **Enterprise Services**: Core hosting services showcase
4. **Pricing Plans**: Three-tier enterprise pricing structure
5. **Domain Validator**: Portfolio assessment form
6. **Contact Form**: Enterprise consultation request
7. **Footer**: Comprehensive navigation and locations
8. **Developer Credits**: Social links and support option

## 🛠️ Technologies

- **HTML5**: Semantic markup with i18n attributes
- **CSS3**: Modern styling with CSS custom properties
- **JavaScript (ES6+)**: Translation engine and UI interactions
- **Font Awesome v6.2**: Icon library for UI elements
- **SVG**: Custom brand illustrations

## 📦 Dependencies

```html
<!-- Font Awesome Icons -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background Light | `#f7f5f1` | Main background |
| Background Dark | `#0f1a1f` | Hero, footer, dark sections |
| Accent Gold | `#b28b4b` | Primary CTAs, highlights |
| Accent Soft | `#e2d2b5` | Secondary accents, hover states |
| Ink Dark | `#132026` | Headings, primary text |
| Ink Muted | `#5b6770` | Body text, secondary content |
| White | `#ffffff` | Text on dark backgrounds |

## 🌟 Language Toggle Implementation

### How It Works

This project uses a **single-page multilingual approach** with JavaScript translation dictionaries:

```javascript
const translations = {
  en: { nav_about: "About", nav_enterprise: "Enterprise", ... },
  pt: { nav_about: "Sobre", nav_enterprise: "Empresas", ... },
  es: { nav_about: "Nosotros", nav_enterprise: "Empresas", ... }
};
```

HTML elements use `data-i18n` attributes:
```html
<a href="#about" data-i18n="nav_about">About</a>
<input placeholder="Full name" data-i18n-placeholder="contact_name" />
```

### Why This Approach

| Feature | Benefit |
|---------|---------|
| ⚡ **Fast and Simple** | No server needed, no build tooling required |
| 🔍 **SEO Friendly** | Default HTML renders complete English page |
| 🔧 **Low Maintenance** | Centralized dictionary in one file |
| ✅ **Great UX** | Instant updates + localStorage persistence |
| 📦 **Zero Dependencies** | Pure vanilla JavaScript implementation |

### Advantages Over Alternatives

- **vs. Separate HTML files**: No duplicate code, easier to maintain
- **vs. Server-side i18n**: Works offline, no backend required
- **vs. i18n libraries**: No bloat, full control, educational value

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lucsantosdev/lp-hosting-company.git
```

2. Navigate to the project:
```bash
cd lp-hosting-company
```

3. Open `index.html` in your browser:
```bash
# Double-click index.html or use a local server:

# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

4. Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
lp-hosting-company/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── main.js         # Translation engine + UI interactions
├── img/
│   ├── favicon.svg     # Brand favicon
│   ├── trust-*.svg     # About section illustrations
│   └── ...
└── README.md
```

## 🙏 Acknowledgments

- Inspired by enterprise hosting brands and SaaS landing pages
- Color palette designed for premium tech brand positioning
- Translation approach influenced by modern i18n best practices

## 🔮 Possible Future Enhancements

- [ ] Add server-side form handling (PHP/Node.js)
- [ ] Implement analytics tracking
- [ ] Add blog section for content marketing
- [ ] Create backend admin panel for content management
- [ ] Add testimonials carousel with real client quotes
- [ ] Implement dark mode toggle
- [ ] Add image lazy loading for performance
- [ ] Create pricing calculator interactive tool
- [ ] Add live chat integration
- [ ] Browser locale detection for default language

---

## 📄 License

This project is licensed under the MIT License - feel free to use it as a template for your own projects.

## 💬 Connect with Me

Follow my journey and other projects:

| Platform | Link |
|----------|------|
| 💼 **LinkedIn** | [@lucsantosdev](https://www.linkedin.com/in/lucsantosdev) |
| 🐙 **GitHub** | [@lucsantosdev](https://github.com/lucsantosdev) |
| 📧 **Email** | [lucsantosdev@gmail.com](mailto:lucsantosdev@gmail.com) |

## 💛 Support

If you found this project helpful or learned something new, consider supporting my work:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lucsantosdev)

---

⚡ Built with care by [@lucsantosdev](https://github.com/lucsantosdev)
