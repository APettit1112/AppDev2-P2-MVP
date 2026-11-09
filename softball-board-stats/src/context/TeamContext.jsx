import { createContext, useContext, useState } from 'react'

const TeamContext = createContext(null)

// Sample roster data for the MVP.
const samplePlayers = [
  {
    id: '1',
    name: 'Anslie Pettit',
    position: 'Pitcher',
    stats: { gamesPlayed: 0, atBats: 0, hits: 0, homeRuns: 0 },
  },
  {
    id: '2',
    name: 'Hallee Bridge',
    position: 'Outfielder',
    stats: { gamesPlayed: 0, atBats: 0, hits: 0, homeRuns: 0 },
  },
  {
    id: '3',
    name: 'Shelibie Hutto',
    position: 'Catcher',
    stats: { gamesPlayed: 0, atBats: 0, hits: 0, homeRuns: 0 },
  },
  {
    id: '4',
    name: 'Emma Scott',
    position: 'First Base',
    stats: { gamesPlayed: 0, atBats: 0, hits: 0, homeRuns: 0 },
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
