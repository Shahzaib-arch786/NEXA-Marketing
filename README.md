# NEXA Digital Marketing

> 🚀 **Professional Digital Marketing Agency Website**

A modern, responsive website for NEXA Digital Marketing Agency built with React, Vite, and Tailwind CSS. Featuring a sleek design, dark mode support, and optimized performance for showcasing digital marketing services.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-teal.svg)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Loading** - Optimized with Vite for lightning-fast performance
- 🎯 **SEO Optimized** - Built with SEO best practices
- ♿ **Accessible** - WCAG 2.1 compliant accessibility features
- 🔧 **Developer Friendly** - Modern tooling with ESLint, Prettier, and TypeScript support

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript/JSX
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4, DaisyUI 5
- **Icons**: Lucide React
- **Animations**: TailwindCSS Motion
- **Code Quality**: ESLint, Prettier
- **Development**: Hot Module Replacement (HMR)

## 📁 Project Structure

```
nexa-digital-marketing/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── Components/         # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Cards.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── Pages/             # Page components
│   │   ├── AboutUs.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Dashboard.jsx
│   │   ├── HomeDB.jsx
│   │   ├── OurCommit.jsx
│   │   ├── PricingPage.jsx
│   │   ├── Services.jsx
│   │   └── WhyUs.jsx
│   ├── assets/            # Images, fonts, etc.
│   ├── App.css
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nexa-digital-marketing.git
   cd nexa-digital-marketing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:5173](http://localhost:5173) to see the application.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint and auto-fix issues |
| `npm run lint:check` | Check for linting errors without fixing |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run clean` | Remove build artifacts |
| `npm run build:analyze` | Build with bundle analysis |
| `npm run type-check` | Run TypeScript type checking |

## 🏗️ Building for Production

```bash
# Clean previous builds
npm run clean

# Build the project
npm run build

# Preview the build
npm run preview
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Customization

### Theme Configuration

The project uses Tailwind CSS with DaisyUI for theming. You can customize:

- **Colors**: Edit `tailwind.config.js`
- **Components**: Modify DaisyUI themes
- **Dark Mode**: Handled automatically with user preference persistence

### Adding New Pages

1. Create a new component in `src/Pages/`
2. Import and add it to `src/Pages/Dashboard.jsx`
3. Update navigation in `src/Components/Navbar.jsx`

## 🔧 Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Implement responsive design patterns
- Add proper accessibility attributes

### Component Structure

```jsx
import React from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="tailwind-classes">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team**: NEXA Digital Marketing Team
- **Design**: Modern, professional digital marketing focused design
- **Maintenance**: Active development and updates

## 📞 Support

For support and questions:

- 📧 Email: contact@nexa-digital-marketing.com
- 🌐 Website: [https://nexa-digital-marketing.com](https://nexa-digital-marketing.com)
- 📱 Phone: Contact through website

---

<div align="center">

**Built with ❤️ by NEXA Digital Marketing Team**

[Website](https://nexa-digital-marketing.com) • [Contact](mailto:contact@nexa-digital-marketing.com)

</div>
