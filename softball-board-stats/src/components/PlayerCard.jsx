import { Link } from 'react-router-dom'

function PlayerCard({ player }) {
  return (
    <article className="player-card">
      <Link to={`/players/${player.id}`} className="player-card-link">
        <h2>{player.name}</h2>
        <p>{player.position}</p>
      </Link>
    </article>
  )
}

export default PlayerCard
