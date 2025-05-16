# Project Documentation

## Overview
This is a React-based web application built with modern web technologies. The project uses Vite as the build tool and includes various features for creating a dynamic and responsive user interface.

## Technology Stack

### Core Technologies
- React 18.3.1
- Vite 5.2.8
- Node.js 20.18.0

### Key Dependencies
- **State Management**: Redux Toolkit (@reduxjs/toolkit)
- **Routing**: React Router DOM (react-router-dom)
- **Styling**: TailwindCSS
- **UI Components & Icons**:
  - FontAwesome
  - Lucide React
  - React Icons
- **Animation & Effects**:
  - Framer Motion
  - GSAP
  - React CountUp
- **Data Visualization**: ECharts
- **HTTP Client**: Axios
- **SEO & Meta**: React Helmet Async

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- Jest for testing
- PostCSS for CSS processing

## Project Structure
```
├── src/
│   ├── assets/         # Static assets
│   ├── Component/      # Reusable components
│   ├── pages/          # Page components
│   ├── Routes/         # Route definitions
│   ├── store/          # Redux store configuration
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Public static files
├── .husky/            # Git hooks configuration
└── configuration files
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── eslint.config.js
    └── .prettierrc
```

## Available Scripts

- `npm start` or `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check code formatting

## Development Setup

1. **Prerequisites**
   - Node.js 20.18.0
   - npm (comes with Node.js)

2. **Installation**
   ```bash
   npm install
   ```

3. **Development**
   ```bash
   npm run dev
   ```

4. **Building for Production**
   ```bash
   npm run build
   ```

## Code Quality Tools

### ESLint
The project uses ESLint for code linting with the following plugins:
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- eslint-plugin-prettier

### Prettier
Code formatting is handled by Prettier with a custom configuration in `.prettierrc`.

### Husky
Git hooks are managed by Husky to ensure code quality before commits.

## Styling
- TailwindCSS is used for utility-first CSS
- Custom CSS can be added in `src/index.css` and `src/App.css`
- Font configurations are in `src/fonts.css`

## State Management
Redux Toolkit is used for state management, with the store configuration located in the `src/store` directory.

## Routing
React Router DOM is implemented for navigation, with route definitions in the `src/Routes` directory.

## Testing
Jest and React Testing Library are set up for testing components and functionality.

## Performance Optimization
- Vite for fast development and optimized builds
- Code splitting through React Router
- PWA support through vite-plugin-pwa

## Security
- DOMPurify for sanitizing HTML content
- Environment variables support through dotenv

## Browser Support
The application is built with modern web standards and should work in all modern browsers.

## Contributing
1. Follow the code style guidelines (ESLint + Prettier)
2. Write tests for new features
3. Update documentation as needed
4. Use conventional commit messages

## License
This project is private and proprietary.

---

For more detailed information about specific components or features, please refer to the respective component documentation or contact the development team. 