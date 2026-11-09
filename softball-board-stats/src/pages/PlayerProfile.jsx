import { Link, useParams } from 'react-router-dom'
import { useTeam } from '../context/TeamContext.jsx'

function PlayerProfile() {
  const { playerId } = useParams()
  // Find the player selected by the URL.
  const { getPlayerById } = useTeam()
  const player = getPlayerById(playerId)

  if (!player) {
    return (
      <main>
        <h1>Player not found</h1>
        <Link to="/roster">Back to roster</Link>
      </main>
    )
  }

  return (
    <main>
      <h1>{player.name}</h1>
      <p>Jersey number: {player.jerseyNumber}</p>
      <p>Position: {player.position}</p>
      <h2>Season stats</h2>
      <p>Games played: {player.stats.gamesPlayed}</p>
      <p>At bats: {player.stats.atBats}</p>
      <p>Hits: {player.stats.hits}</p>
      <p>Home runs: {player.stats.homeRuns}</p>
      <Link to="/roster">Back to roster</Link>
    </main>
  )
}

export default PlayerProfile
