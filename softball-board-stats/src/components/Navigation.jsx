import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="app-nav" aria-label="Main navigation">
      <h1 className="app-nav-title">Softball Board Stats</h1>
      {/* Links to the main app pages. */}
      <ul className="app-nav-list">
        <li>
          <NavLink className="app-nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="app-nav-link" to="/roster">
            Roster
          </NavLink>
        </li>
        <li>
          <NavLink className="app-nav-link" to="/messages">
            Messages
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
