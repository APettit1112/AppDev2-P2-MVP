import FieldLocation from '../components/FieldLocation.jsx'
import StatCard from '../components/StatCard.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
import { useTeam } from '../context/TeamContext.jsx'

function Dashboard() {
  const { getPlayers } = useTeam()
  const players = getPlayers()
  const totalHits = players.reduce((total, player) => total + player.stats.hits, 0)
  const totalHomeRuns = players.reduce(
    (total, player) => total + player.stats.homeRuns,
    0,
  )

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <p className="dashboard-eyebrow">Team overview</p>
        <h1>Softball Board Stats</h1>
        <p>A quick look at your team and season so far.</p>
      </header>

      <section className="dashboard-stats" aria-label="Team statistics">
        <StatCard label="Players" value={players.length} />
        <StatCard label="Hits" value={totalHits} />
        <StatCard label="Home runs" value={totalHomeRuns} />
      </section>

      <section className="dashboard-cards" aria-label="Team information">
        <WeatherCard />
        <FieldLocation />
      </section>
    </main>
  )
}

export default Dashboard
