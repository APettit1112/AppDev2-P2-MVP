import { Link } from 'react-router-dom'
import { useTeam } from '../context/TeamContext.jsx'

function Roster() {
  // Read the shared roster from context.
  const { getPlayers } = useTeam()
  const players = getPlayers()

  return (
    <main>
      <h1>Roster</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              #{player.jerseyNumber} {player.name} - {player.position}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Roster
