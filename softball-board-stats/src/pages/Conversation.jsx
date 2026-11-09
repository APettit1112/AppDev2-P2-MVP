import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { sampleConversations } from '../utilities/sampleConversations.js'

function Conversation() {
  const { conversationId } = useParams()
  const conversation = sampleConversations[conversationId]
  const [conversationMessages, setConversationMessages] = useState({})
  const [messageText, setMessageText] = useState('')
  const messages = conversation
    ? (conversationMessages[conversationId] ?? conversation.messages)
    : []

  function handleSubmit(event) {
    event.preventDefault()
    const text = messageText.trim()

    if (!text) {
      return
    }

    setConversationMessages((currentMessages) => ({
      ...currentMessages,
      [conversationId]: [
        ...messages,
        { id: `${Date.now()}`, sender: 'You', text },
      ],
    }))
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
        <header className="conversation-header">
          <p className="dashboard-eyebrow">Team messages</p>
          <h1>{conversation.name}</h1>
          <p>{conversation.participants}</p>
        </header>
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
              autoComplete="off"
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
