import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const sampleConversations = {
  1: {
    name: 'Team Chat',
    messages: [
      { id: 1, sender: 'Coach', text: 'Practice starts at 5 PM today.' },
      { id: 2, sender: 'Anslie Pettit', text: 'I will be there!' },
    ],
  },
  2: {
    name: 'Game Day Plans',
    messages: [
      { id: 1, sender: 'Coach', text: 'Please arrive 30 minutes early.' },
      { id: 2, sender: 'Hallee Bridge', text: 'Got it. See everyone there.' },
    ],
  },
}

function Conversation() {
  const { conversationId } = useParams()
  const conversation = sampleConversations[conversationId]
  const [messages, setMessages] = useState(conversation?.messages ?? [])
  const [messageText, setMessageText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const text = messageText.trim()

    if (!text) {
      return
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `${Date.now()}`,
        sender: 'You',
        text,
      },
    ])
    setMessageText('')
  }

  if (!conversation) {
    return (
      <main className="conversation-page">
        <h1>Conversation not found</h1>
        <Link to="/messages">Back to messages</Link>
      </main>
    )
  }

  return (
    <main className="conversation-page">
      <Link to="/messages" className="conversation-back">
        Back to messages
      </Link>
      <section className="conversation-card">
        <h1>{conversation.name}</h1>
        <ul className="conversation-messages" aria-live="polite">
          {messages.map((message) => (
            <li className="conversation-message" key={message.id}>
              <strong>{message.sender}</strong>
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
        <form className="conversation-form" onSubmit={handleSubmit}>
          <label htmlFor="message-text">Write a message</label>
          <div className="conversation-input-row">
            <input
              id="message-text"
              type="text"
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              placeholder="Type your message"
            />
            <button type="submit" disabled={!messageText.trim()}>
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Conversation
