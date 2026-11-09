import { Link, useParams } from 'react-router-dom'
import { useTeam } from '../context/TeamContext.jsx'

function PlayerProfile() {
  const { playerId } = useParams()
  // Find the player selected by the URL.
  const { getPlayerById } = useTeam()
  const player = getPlayerById(playerId)

  if (!player) {
    return (
      <main className="player-profile">
        <h1>Player not found</h1>
        <Link to="/roster">Back to roster</Link>
      </main>
    )
  }

  return (
    <main className="player-profile">
      <Link className="player-profile-back" to="/roster">
        Back to roster
      </Link>
      <section className="player-profile-card">
        <p className="dashboard-eyebrow">Player profile</p>
        <h1>{player.name}</h1>
        <p className="player-profile-position">
          #{player.jerseyNumber} · {player.position}
        </p>

        <h2>Season stats</h2>
        <dl className="player-profile-stats">
          <div>
            <dt>Games played</dt>
            <dd>{player.stats.gamesPlayed}</dd>
          </div>
          <div>
            <dt>At bats</dt>
            <dd>{player.stats.atBats}</dd>
          </div>
          <div>
            <dt>Hits</dt>
            <dd>{player.stats.hits}</dd>
          </div>
          <div>
            <dt>Home runs</dt>
            <dd>{player.stats.homeRuns}</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default PlayerProfile
