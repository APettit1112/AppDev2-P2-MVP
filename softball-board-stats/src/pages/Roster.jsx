import { useState } from 'react'
import PlayerCard from '../components/PlayerCard.jsx'
import { useTeam } from '../context/TeamContext.jsx'

function Roster() {
  // Read the shared roster from context.
  const { getPlayers } = useTeam()
  const players = getPlayers()
  const [searchText, setSearchText] = useState('')
  const searchTerm = searchText.trim().toLowerCase()
  const filteredPlayers = players.filter((player) =>
    `${player.name} ${player.position}`
      .toLowerCase()
      .includes(searchTerm),
  )

  return (
    <main className="roster-page">
      <header className="roster-header">
        <h1>Roster</h1>
        <p>{players.length} players on the team</p>
      </header>
      <div className="roster-search">
        <label htmlFor="player-search">Search players</label>
        <input
          id="player-search"
          type="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search by name or position"
        />
      </div>
      {filteredPlayers.length > 0 ? (
        <section className="player-grid" aria-label="Team roster">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </section>
      ) : (
        <p role="status">No players found.</p>
      )}
    </main>
  )
}

export default Roster
