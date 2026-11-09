# Softball Board Stats

## Project overview

Softball Board Stats is a React application for viewing a softball team's
roster, player profiles, team statistics, weather, and sample conversations.
It was created as a college project MVP to practice building a responsive
single-page application.

## Main features

- Dashboard showing the number of players and summary statistics.
- Searchable roster with links to each player's profile.
- Player profiles with jersey number, position, and basic statistics.
- Two sample conversations with a local message input.
- Current weather from Open-Meteo, displayed with loading and error states.
- Responsive layouts for different screen sizes.

Team and conversation information is sample data held in React state. New
messages and data changes are not saved after refreshing the application. The
weather card currently uses New York City as a sample location. The field
location section is a placeholder.

## Technologies

- **React** - builds the user interface.
- **Vite** - runs the development server and creates production builds.
- **React Router** - handles page navigation without full page reloads.
- **Context API** - shares team/player data between components.
- **Axios** - sends the weather request.
- **Open-Meteo** - provides current weather data without an API key.
- **Vitest and React Testing Library** - test components and interactions.

## Project structure

```text
src/
  components/   Reusable navigation, player, statistic, weather, and field components
  context/      Shared team data and the useTeam hook
  pages/        Dashboard, roster, player profile, messages, and conversation pages
  utilities/    Open-Meteo API helper
  test/         Component and interaction tests
  App.jsx       Context provider and application routes
  App.css       Component and responsive styles
  index.css     Global styles
  main.jsx      React entry point
```

## Installation

Install [Node.js](https://nodejs.org/) and npm. In a terminal, change to the
`softball-board-stats` project folder and install dependencies:

```sh
npm install
```

## Run locally

Start the Vite development server:

```sh
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Routes

| URL | Page |
| --- | --- |
| `/` | Redirects to the dashboard |
| `/dashboard` | Team dashboard and weather |
| `/roster` | Searchable roster |
| `/players/:playerId` | Player details, such as `/players/1` |
| `/messages` | Sample conversation list |
| `/messages/:conversationId` | Conversation, such as `/messages/1` |
| Any unmatched URL | Not found page |

## Weather API

The API helper is in `src/utilities/weatherApi.js`. It requests current
temperature, apparent temperature, humidity, wind speed, and weather code from
the Open-Meteo Forecast API:

```text
https://api.open-meteo.com/v1/forecast
```

The sample coordinates are configured in `src/components/WeatherCard.jsx`.
No API key or environment variable is needed.

## Run tests

Run all unit tests once:

```sh
npm test
```

Run tests in watch mode while developing:

```sh
npm run test:watch
```

## Deployed application

[Open Softball Board Stats on Vercel](https://appdev2-p2-mvpdeployed-f9p1.vercel.app)
