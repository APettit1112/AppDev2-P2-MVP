function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <h2>{label}</h2>
      <p className="stat-card-value">{value}</p>
    </article>
  )
}

export default StatCard
