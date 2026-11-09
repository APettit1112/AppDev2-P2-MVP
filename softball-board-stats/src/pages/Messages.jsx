import { Link } from 'react-router-dom'
import { sampleConversations } from '../utilities/sampleConversations.js'

function Messages() {
  return (
    <main className="messages-page">
      <header className="messages-header">
        <p className="dashboard-eyebrow">Team communication</p>
        <h1>Messages</h1>
        <p>Choose a conversation to view and send messages.</p>
      </header>
      <ul className="messages-list">
        {Object.values(sampleConversations).map((conversation) => {
          const latestMessage =
            conversation.messages[conversation.messages.length - 1]

          return (
            <li key={conversation.id}>
              <Link
                className="message-conversation-link"
                to={`/messages/${conversation.id}`}
              >
                <span className="message-conversation-title">
                  {conversation.name}
                </span>
                <span className="message-conversation-participants">
                  {conversation.participants}
                </span>
                <span className="message-conversation-preview">
                  <strong>{latestMessage.sender}:</strong> {latestMessage.text}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Messages
