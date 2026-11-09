import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTeam } from '../context/TeamContext.jsx'

function Roster() {
  // Read the shared roster from context.
  const { getPlayers } = useTeam()
  const players = getPlayers()
  const [searchText, setSearchText] = useState('')
  const searchTerm = searchText.trim().toLowerCase()
  const filteredPlayers = players.filter((player) =>
    `${player.name} ${player.position} ${player.jerseyNumber}`
      .toLowerCase()
      .includes(searchTerm),
  )

  return (
    <main>
      <h1>Roster</h1>
      <label htmlFor="player-search">Search players</label>
      <input
        id="player-search"
        type="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search by name, position, or number"
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              #{player.jerseyNumber} {player.name} - {player.position}
            </Link>
          </li>
        ))}
      </ul>
      {filteredPlayers.length === 0 && <p>No players found.</p>}
    </main>
  )
}

export default Roster
