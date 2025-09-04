# Pawfront

A simple SPA exploring information about dog breeds.

## Setup and Running

### Install Dependencies

```bash
npm install
```

### Add .env

```
VITE_DOG_API_KEY=
```

\*Key sent via email

### Dev Server

```bash
npm run dev
```

### Run Tests

```bash
npx vitest
```

---

## Architecture

- **React + TypeScript** for view layer
- **TanStack Router** for route management
- **TanStack Query** for API fetching and server state management
- **Tailwind CSS** for utility styling
- **Vite** for build/dev
- **ESLint + Prettier** for enforced code quality and formatting
- **Vitest + React Testing Library + axe-core** for unit and accessibility testing
- **API** - using (thedogapi)[https://api.thedogapi.com/v1]

TanStack Router and Query were very easy add-ons for a Vite project. They're also commonly used with React + TypeScript and would easily handle fetching loading/error states.

Axios was used for the actual fetch.

---

## Testing

Unit testing should cover most critical functionality of the app, as it's fairly small and simple.

Vitest was chosen, again for its integration with Vite.

axe and user-event cover the main user interactions (clicking a card to open the detail page).

E2E tests felt like overkill for such a small project, but would definitely be one of the first things to add if this were expanded.

---

## Accessibility

As a requirement, accessibility was mainly implemented through semantic HTML, aria-roles, and keyboard navigation.

Validated with axe tests, primarily on the list of cards.

---

## Limitations and Improvements

### Additional Functionality

The app has very bare bones functionality and not much user interaction. I opted to focus more on code quality, organization, and maintainability than adding additional features. But a more complete project would have search or filtering, especially as the TextChips lend themselves well to filtering.

### Error Handling

UX could definitely be improved around error states, such as adding retry buttons or more detailed error causes/messages.

### Accessibility

The focus was on being accessible and passing an audit without being fully WCAG compliant.

A lot more work could be done with aria attrs and screen readers.

### Performance and Scaling

For a quick MVP, I focused more on structuring files for future extensibility and writing code that would follow single responsibility principles.

Quite a few optimizations could be made if the project were to scale, especially:

- image optimization: creating a lazy loading component with good fallbacks, webp formats (limited by the API's CDN itself)
- performance monitoring: more robust web vitals reporting, right now it just does simple logging
- bundle analysis for more code splitting
- integrating live error monitoring and reporting with a 3rd party tool
- centralized configuration for constants: refetch time out, # of skeleton cards, etc.

Memoization:

- I tend to avoid premature optimization. For a relatively small data set of static and known quantity displayed on a straightforward card component, memoization may actually cause more performance issues. If the list or data set were to scale, I'd first measure performance with React Profiler before deciding to use any memoization techniques.

API Rate Limiting:

- the AxiosClient could definitely be improved to handle any errors when fetching data. I did use React Query for a 15 min timeout on refreshing data, but rate-limiting or throttling additional retry attempts would be critical in a production app.

## File Directory

Further documentation and comments can be found in each file.

### src/api

- functions and code to set up Axios client and access the API key

### src/components

- shared/reusable components

### src/features/breeds/

- pages and components related to the Dog Breed list
- custom hooks to fetch all breeds or find a single breed by ID
- types and consts related to the breeds feature

### src/routes

- file-based routing paths

### src/styles

- tailwind css - could probably benefit from more robust normalized css
