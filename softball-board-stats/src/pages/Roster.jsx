import { Link } from 'react-router-dom'

function Roster() {
  return (
    <main>
      <h1>Roster</h1>
      <ul>
        <li>
          <Link to="/players/1">View Player 1</Link>
        </li>
      </ul>
    </main>
  )
}

export default Roster
