import { Link } from 'react-router-dom'

function Messages() {
  return (
    <main>
      <h1>Messages</h1>
      <ul>
        <li>
          <Link to="/messages/1">Team Chat</Link>
        </li>
        <li>
          <Link to="/messages/2">Game Day Plans</Link>
        </li>
      </ul>
    </main>
  )
}

export default Messages
