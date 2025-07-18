# Contributing to NEXA Digital Marketing

Thank you for your interest in contributing to the NEXA Digital Marketing website! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/your-username/nexa-digital-marketing.git
   cd nexa-digital-marketing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   # Update .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Visit [http://localhost:5173](http://localhost:5173)

## 📝 Development Guidelines

### Code Style

- Use functional components with React Hooks
- Follow the existing code structure and naming conventions
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic

### File Organization

```
src/
├── Components/     # Reusable UI components
├── Pages/         # Page components
├── constants/     # Application constants
├── utils/         # Utility functions
├── assets/        # Static assets
└── styles/        # Global styles
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ContactForm.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: Follow Tailwind conventions

### Code Quality

Before submitting a pull request, ensure your code passes all checks:

```bash
# Lint your code
npm run lint

# Format your code
npm run format

# Check formatting
npm run format:check

# Build the project
npm run build
```

## 🔄 Contributing Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing patterns and conventions
- Test your changes thoroughly
- Update documentation if needed

### 3. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add new contact form validation"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update installation instructions"
git commit -m "style: improve button hover effects"
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: UI/styling changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub with:
- Clear title and description
- Screenshots for UI changes
- Reference to related issues

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment details** (OS, browser, Node.js version)
2. **Steps to reproduce** the issue
3. **Expected behavior**
4. **Actual behavior**
5. **Screenshots** if applicable
6. **Console errors** if any

Use the bug report template:

```markdown
## Bug Description
Brief description of the issue

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., macOS 12.0]
- Browser: [e.g., Chrome 95.0]
- Node.js: [e.g., 18.0.0]

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

We welcome feature suggestions! Please:

1. Check existing issues to avoid duplicates
2. Clearly describe the feature and its benefits
3. Provide use cases and examples
4. Consider backward compatibility

## 🎨 Design Guidelines

### UI/UX Principles

- **Mobile-first**: Design for mobile, enhance for desktop
- **Accessibility**: Follow WCAG 2.1 guidelines
- **Performance**: Optimize images and minimize bundle size
- **Consistency**: Use existing design patterns and components
- **User Experience**: Prioritize usability and clarity

### Color Palette

- **Primary**: Cyan (#0891b2)
- **Secondary**: Gray (#374151)
- **Accent**: Amber (#f59e0b)
- **Success**: Emerald (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Typography

- Use system fonts for better performance
- Maintain consistent font sizes and line heights
- Ensure proper contrast ratios

## 🧪 Testing

### Manual Testing

- Test on different devices and browsers
- Verify responsive design
- Check accessibility with screen readers
- Test dark mode functionality

### Automated Testing

```bash
# Run linting
npm run lint:check

# Check formatting
npm run format:check

# Build for production
npm run build
```

## 📚 Documentation

Help improve our documentation:

- Fix typos and grammar errors
- Add missing information
- Improve clarity and examples
- Update outdated content

## 🏷️ Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release notes
4. Tag the release
5. Deploy to production

## 📞 Getting Help

If you need help:

1. Check the [README.md](./README.md)
2. Search existing [issues](https://github.com/your-username/nexa-digital-marketing/issues)
3. Create a new issue with the "question" label
4. Contact the team at [contact@nexa-digital-marketing.com](mailto:contact@nexa-digital-marketing.com)

## 🎉 Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Hall of Fame section (if applicable)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to NEXA Digital Marketing! 🚀