import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found-page">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/dashboard">Go to dashboard</Link>
    </main>
  )
}

export default NotFound
