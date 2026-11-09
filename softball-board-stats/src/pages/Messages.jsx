import { Link } from 'react-router-dom'

function Messages() {
  return (
    <main>
      <h1>Messages</h1>
      <ul>
        <li>
          <Link to="/messages/1">Open Conversation 1</Link>
        </li>
      </ul>
    </main>
  )
}

export default Messages
