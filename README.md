# Pawfront

## Setup and Running

### Install Dependencies

```bash
npm install
```

### Add .env

sent via email

```
VITE_DOG_API_KEY=
```

### Dev Server

```bash
npm run dev
```

### Run Tests

```bash
npx vitest
```

## Architecture

- **React + TypeScript** for view layer
- **TanStack Router** for route management
- **TanStack Query** for API fetching and server state management
- **Tailwind CSS** for utility styling
- **Vite** for build/dev
- **ESLint + Prettier** for enforced code quality and formatting
- **Jest + React Testing Library + axe-core** for unit and accessibility testing
- **API** - using (thedogapi)[https://api.thedogapi.com/v1]

## Testing

## Accesibility

- validated with [axe]
- keyboard nav
- semantic HTML
- not fully WCAG compliant

## Limitations and Improvements

- more functionality: search, filter, etc.
- error handling: retry button for better ux
- a11y only focuses on essential roles and labels, a lot more could be done with screen readers

### Performance and Scaling

- image optimization: lazy loading, webp
- performance monitoring: web vitals
- performance: react.memo in specific cases
- bundle analysis for more code splitting
- better axios error handling and retry logic and rate limiting
- error monitoring with 3rd party integration
- centralized configuration: constants for refetch, # of skeleton cards, etc. for maintainability

## File Directory

In-file documentation and comments.

### src/api

### src/components

- ErrorBoundary

### src/features/breeds/

### src/routes

### src/styles
