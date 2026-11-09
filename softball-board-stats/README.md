# Softball Board Stats

Softball Board Stats is a small, responsive React app for viewing a softball
team roster, player profiles, team statistics, weather, and sample messages.
It is an MVP: team data and messages are examples held in the browser and are
not saved to a database.

## Features

- Dashboard with team size, player stats, weather, and field location sections.
- Searchable roster with links to individual player profiles.
- Player profiles with jersey number, position, and basic stats.
- Sample conversations where you can add messages locally.
- Responsive layouts for mobile, tablet, and desktop.
- React Context for shared team data and local React state for search and
  messages.
- No login, authentication, or admin features.

## Technologies

- React 19 and React DOM
- Vite
- React Router
- Axios
- Open-Meteo Weather API
- Vitest, React Testing Library, and jsdom
- Oxlint

## Requirements

Install Node.js and npm. Then open a terminal in the `softball-board-stats`
folder and install the project packages:

```sh
npm install
```

## Run locally

Start the development server:

```sh
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`).
Use `Ctrl+C` to stop the server.

## Routes

| URL | Page |
| --- | --- |
| `/` | Redirects to the dashboard |
| `/dashboard` | Team overview and weather |
| `/roster` | Searchable player roster |
| `/players/:playerId` | Player profile, for example `/players/1` |
| `/messages` | Sample conversation list |
| `/messages/:conversationId` | Conversation, for example `/messages/1` |
| Any other URL | Not found page |

The main navigation links to Dashboard, Roster, and Messages. Player cards and
conversation links lead to their matching detail pages.

## Project structure

```text
src/
  components/   Reusable navigation, player, stat, weather, and field UI
  context/      Shared team state and the useTeam hook
  pages/        Dashboard, roster, profile, messages, and conversation pages
  utilities/    API helper functions
  test/         Component and interaction tests
  App.jsx       Providers and application routes
  App.css       Component and responsive styles
  index.css     Global styles
  main.jsx      Application entry point
```

## Team data and state

`TeamProvider` in `src/context/TeamContext.jsx` holds the sample player list
using `useState`. Pages access that data with the `useTeam()` hook. Roster
search and conversation messages use local component state. Neither team
changes nor sent messages persist after the app is refreshed.

## Weather API

`src/utilities/weatherApi.js` uses Axios to request current conditions from the
Open-Meteo Forecast API:

```text
https://api.open-meteo.com/v1/forecast
```

The `getCurrentWeather(latitude, longitude)` function requests current
temperature, apparent temperature, humidity, wind speed, and weather code.
`WeatherCard` fetches and displays the response with loading and error states.
The current UI uses New York City as a sample location; update its coordinates
in `src/components/WeatherCard.jsx` to use the team's field. Open-Meteo does
not require an API key for this project.

## Tests and checks

Run the component and interaction tests:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Run lint and create a production build:

```sh
npm run lint
npm run build
```

To preview the production build locally:

```sh
npm run preview
```

Tests cover PlayerCard, roster search, navigation, weather loading and error
states, conversations, and unknown routes.

## Deployment

The app is configured for Vercel using `vercel.json`, which sends page requests
back to the SPA so direct visits to React Router URLs work.

To deploy:

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. If the repository contains other folders, set the Vercel project root to
   `softball-board-stats`.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy, then test the dashboard, roster, player profiles, conversations,
   weather request, and mobile layout using the Vercel URL.

**Deployment URL:** Not deployed yet. Add the Vercel URL here after deployment.

## Screenshots

Screenshots are not included yet. Add screenshots of the dashboard and roster
here after capturing them in the browser.

## Known limitations and next steps

- Player and team data are sample data stored only in React state.
- The weather card currently uses sample coordinates, not the team's field.
- Conversation messages are local examples and disappear on refresh.
- There is no backend, login, or persistent data storage.
- Future improvements could include connecting the real team location,
  persistent team and message data, and adding more player statistics.
