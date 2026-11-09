import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import { TeamProvider } from './context/TeamContext.jsx'
import Conversation from './pages/Conversation.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Messages from './pages/Messages.jsx'
import PlayerProfile from './pages/PlayerProfile.jsx'
import Roster from './pages/Roster.jsx'
import './App.css'

function App() {
  return (
    <TeamProvider>
      <BrowserRouter>
        <div className="app">
          <Navigation />
          {/* Match each URL to its page component. */}
          <Routes>
            {/* Send the app's starting URL to the dashboard. */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roster" element={<Roster />} />
            {/* The URL segment identifies the player or conversation. */}
            <Route path="/players/:playerId" element={<PlayerProfile />} />
            <Route path="/messages" element={<Messages />} />
            <Route
              path="/messages/:conversationId"
              element={<Conversation />}
            />
            {/* Send unknown URLs to a working page. */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TeamProvider>
  )
}

export default App
