# Component Documentation

## Navbar Options

This project includes two navbar options:

### 1. Docusaurus Default Navbar
- Uses the standard Docusaurus navbar component
- Configured via `docusaurus.config.ts`
- Styled with custom CSS in `src/css/custom.css`
- Currently shows only logo and title

### 2. Esy.com Navbar
- Custom navbar matching the main esy.com site
- Located in `src/components/EsyNavbar/`
- Includes:
  - Logo with "The Essay Writing Guide" title
  - Navigation links (Contents, School, Essays, Blog)
  - "Open in Esy" CTA button
  - Mobile responsive menu
  - Hide-on-scroll behavior

### Switching Between Navbars

To switch between the navbars, edit `src/theme/Navbar/index.js`:

```javascript
// Set this to true to use the Esy navbar, false for Docusaurus navbar
const USE_ESY_NAVBAR = false; // Change to true for Esy navbar
```

## Footer

The footer uses the custom Esy.com footer component located in `src/components/Footer/`. This is always active via the theme override system.