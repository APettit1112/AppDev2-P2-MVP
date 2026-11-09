import { createContext, useContext, useState } from 'react'

const TeamContext = createContext(null)

// Sample roster data for the MVP.
const samplePlayers = [
  {
    id: '1',
    name: 'Jordan Lee',
    position: 'Pitcher',
    jerseyNumber: 1,
    stats: { gamesPlayed: 12, atBats: 30, hits: 11, homeRuns: 2 },
  },
  {
    id: '2',
    name: 'Casey Morgan',
    position: 'Catcher',
    jerseyNumber: 2,
    stats: { gamesPlayed: 10, atBats: 24, hits: 8, homeRuns: 1 },
  },
  {
    id: '3',
    name: 'Riley Carter',
    position: 'Shortstop',
    jerseyNumber: 7,
    stats: { gamesPlayed: 11, atBats: 28, hits: 10, homeRuns: 3 },
  },
]

export function TeamProvider({ children }) {
  // Keep shared player data in React state.
  const [players, setPlayers] = useState(samplePlayers)

  // Provide simple ways to read the roster.
  function getPlayers() {
    return players
  }

  function getPlayerById(playerId) {
    return players.find((player) => player.id === playerId)
  }

  return (
    <TeamContext.Provider
      value={{ players, setPlayers, getPlayers, getPlayerById }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export function useTeam() {
  const context = useContext(TeamContext)

  // Make sure this hook is used inside the provider.
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider')
  }

  return context
}
