# AtlasEdge Hosting - Landing Page

**Lea en otros idiomas:** [English](README.md) | [Português](README.pt.md) | [Español](README.es.md)

---

Un modelo de landing page estratégico y minimalista para una empresa ficticia de alojamiento empresarial. Este proyecto presenta diseño web moderno con estética elegante, mensajes empresariales y un sistema multilingüe ligero.

![AtlasEdge](https://img.shields.io/badge/AtlasEdge-Enterprise%20Hosting-b28b4b?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Características

### 🎨 Diseño
- **Estética Minimalista**: Paleta de colores premium con acentos dorados
- **Tipografía Elegante**: Playfair Display con logotipo personalizado
- **Desplazamiento Suave**: Navegación por anclajes con transiciones suaves
- **Iconos SVG Personalizados**: Favicon de marca e ilustraciones de sección de confianza
- **Diseño Profesional**: Secciones y mensajes enfocados en empresas

### 🌍 Soporte Multilingüe (EN / PT / ES)
- **Traducción del Lado del Cliente**: Alternancia de idioma con JavaScript
- **Tres Idiomas**: Inglés, Portugués y Español
- **Elección Persistente**: Preferencia de idioma guardada en `localStorage`
- **Actualizaciones Dinámicas**: Todo el contenido incluyendo placeholders y valores de botones
- **Métricas Rotativas**: Etiquetas localizadas para estadísticas actualizadas en tiempo real

### 📱 Diseño Responsivo
- **Enfoque Mobile-First**: Optimizado para todos los tamaños de dispositivos
- **Menú Hamburguesa**: Navegación limpia para dispositivos móviles
- **Grids Adaptables**: Diseños flexibles usando CSS Grid
- **Optimizado para Táctil**: Optimizado para interacciones móviles

### 🚀 Rendimiento
- **Cero Dependencias**: JavaScript vanilla puro
- **SVGs Ligeros**: Ilustraciones personalizadas de menos de 2KB cada una
- **Sin Proceso de Build**: HTML estático listo para implementar
- **Carga Rápida**: Recursos externos mínimos

### ♿ Accesibilidad
- **Etiquetas ARIA**: Marcado semántico adecuado y roles
- **Navegación por Teclado**: Soporte completo de teclado
- **Desplazamiento Suave**: Comportamiento de desplazamiento suave basado en CSS
- **Estados de Enfoque**: Indicadores visuales claros

### 🎯 Secciones
1. **Sección Hero**: Propuesta de valor empresarial con métricas rotativas
2. **Acerca de AtlasEdge**: Presentación de la empresa con tarjetas ilustradas
3. **Servicios Empresariales**: Muestra de principales servicios de alojamiento
4. **Planes de Precios**: Estructura de precios empresarial en tres niveles
5. **Validador de Dominio**: Formulario de evaluación de portafolio
6. **Formulario de Contacto**: Solicitud de consultoría empresarial
7. **Pie de Página**: Navegación completa y ubicaciones
8. **Créditos del Desarrollador**: Enlaces sociales y opción de apoyo

## 🛠️ Tecnologías

- **HTML5**: Marcado semántico con atributos i18n
- **CSS3**: Estilización moderna con propiedades personalizadas CSS
- **JavaScript (ES6+)**: Motor de traducción e interacciones de UI
- **Font Awesome v6.2**: Biblioteca de iconos para elementos de UI
- **SVG**: Ilustraciones personalizadas de la marca

## 📦 Dependencias

```html
<!-- Iconos Font Awesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Fondo Claro | `#f7f5f1` | Fondo principal |
| Fondo Oscuro | `#0f1a1f` | Hero, pie de página, secciones oscuras |
| Dorado Accent | `#b28b4b` | CTAs primarios, destacados |
| Accent Suave | `#e2d2b5` | Acentos secundarios, estados hover |
| Tinta Oscura | `#132026` | Títulos, texto primario |
| Tinta Apagada | `#5b6770` | Texto del cuerpo, contenido secundario |
| Blanco | `#ffffff` | Texto en fondos oscuros |

## 🌟 Implementación del Cambio de Idioma

### Cómo Funciona

Este proyecto usa un **enfoque multilingüe de página única** con diccionarios de traducción en JavaScript:

```javascript
const translations = {
  en: { nav_about: "About", nav_enterprise: "Enterprise", ... },
  pt: { nav_about: "Sobre", nav_enterprise: "Empresas", ... },
  es: { nav_about: "Nosotros", nav_enterprise: "Empresas", ... }
};
```

Los elementos HTML usan atributos `data-i18n`:
```html
<a href="#about" data-i18n="nav_about">About</a>
<input placeholder="Full name" data-i18n-placeholder="contact_name" />
```

### Por Qué Este Enfoque

| Característica | Beneficio |
|----------------|-----------|
| ⚡ **Rápido y Simple** | Sin necesidad de servidor, sin herramientas de build |
| 🔍 **Amigable para SEO** | HTML por defecto renderiza página completa en inglés |
| 🔧 **Bajo Mantenimiento** | Diccionario centralizado en un archivo |
| ✅ **Excelente UX** | Actualizaciones instantáneas + persistencia con localStorage |
| 📦 **Cero Dependencias** | Implementación en JavaScript vanilla puro |

### Ventajas Sobre Alternativas

- **vs. Archivos HTML separados**: Sin código duplicado, más fácil de mantener
- **vs. i18n del lado del servidor**: Funciona sin conexión, sin necesidad de backend
- **vs. bibliotecas i18n**: Sin sobrecarga, control total, valor educativo

## 🚀 Empezando

### Instalación

1. Clone el repositorio:
```bash
git clone https://github.com/lucsantosdev/lp-hosting-company.git
```

2. Navegue hasta el proyecto:
```bash
cd lp-hosting-company
```

3. Abra `index.html` en su navegador:
```bash
# Haga doble clic en index.html o use un servidor local:

# Usando Python
python -m http.server 8000

# Usando Node.js (con http-server)
npx http-server
```

4. Visite `http://localhost:8000` en su navegador

## 📁 Estructura del Proyecto

```
lp-hosting-company/
├── index.html          # Archivo HTML principal
├── css/
│   └── styles.css      # Todo el estilo y diseño responsivo
├── js/
│   └── main.js         # Motor de traducción + interacciones de UI
├── img/
│   ├── favicon.svg     # Favicon de la marca
│   ├── trust-*.svg     # Ilustraciones de sección acerca de
│   └── ...
└── README.md
```

## 🙏 Agradecimientos

- Inspirado por marcas de alojamiento empresarial y landing pages SaaS
- Paleta de colores diseñada para posicionamiento premium de marca tech
- Enfoque de traducción influenciado por mejores prácticas modernas de i18n

## 🔮 Posibles Mejoras Futuras

- [ ] Agregar manejo de formularios del lado del servidor (PHP/Node.js)
- [ ] Implementar seguimiento de analytics
- [ ] Agregar sección de blog para marketing de contenido
- [ ] Crear panel de administración backend para gestión de contenido
- [ ] Agregar carrusel de testimonios con citas reales de clientes
- [ ] Implementar alternancia de modo oscuro
- [ ] Agregar carga lazy de imágenes para rendimiento
- [ ] Crear herramienta interactiva de calculadora de precios
- [ ] Agregar integración de chat en vivo
- [ ] Detección de configuración regional del navegador para idioma predeterminado

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - siéntase libre de usarlo como plantilla para sus propios proyectos.

## 💬 Conéctese Conmigo

Siga mi viaje y otros proyectos:

| Plataforma | Enlace |
|------------|--------|
| 💼 **LinkedIn** | [@lucsantosdev](https://www.linkedin.com/in/lucsantosdev) |
| 🐙 **GitHub** | [@lucsantosdev](https://github.com/lucsantosdev) |
| 📧 **Email** | [lucsantosdev@gmail.com](mailto:lucsantosdev@gmail.com) |

## 💛 Apoyo

Si encontró este proyecto útil o aprendió algo nuevo, considere apoyar mi trabajo:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lucsantosdev)

---

⚡ Construido con cariño por [@lucsantosdev](https://github.com/lucsantosdev)
