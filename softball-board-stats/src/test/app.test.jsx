import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App.jsx'
import PlayerCard from '../components/PlayerCard.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
import { getCurrentWeather } from '../utilities/weatherApi.js'

vi.mock('../utilities/weatherApi.js', () => ({
  getCurrentWeather: vi.fn(),
}))

const sampleWeather = {
  temperature_2m: 22,
  apparent_temperature: 21,
  relative_humidity_2m: 55,
  wind_speed_10m: 8,
  weather_code: 1,
}

function renderAtPath(path) {
  window.history.replaceState({}, '', path)
  return render(<App />)
}

beforeEach(() => {
  vi.mocked(getCurrentWeather).mockResolvedValue(sampleWeather)
})

describe('PlayerCard', () => {
  it('renders the player and links to their profile', () => {
    const player = {
      id: '1',
      name: 'Anslie Pettit',
      position: 'Pitcher',
    }

    render(
      <MemoryRouter>
        <PlayerCard player={player} />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Anslie Pettit' })).toBeVisible()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/players/1')
    expect(screen.getByText('Pitcher')).toBeVisible()
  })
})

describe('roster and navigation', () => {
  it('filters roster players and links each card to its profile', () => {
    renderAtPath('/roster')

    expect(screen.getByRole('heading', { name: 'Roster' })).toBeVisible()
    expect(screen.getByRole('link', { name: /Anslie Pettit/ })).toHaveAttribute(
      'href',
      '/players/1',
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Search players' }), {
      target: { value: 'hallee' },
    })

    expect(screen.getByRole('link', { name: /Hallee Bridge/ })).toBeVisible()
    expect(
      screen.queryByRole('link', { name: /Anslie Pettit/ }),
    ).not.toBeInTheDocument()
  })

  it('navigates between main pages and opens a conversation', () => {
    renderAtPath('/dashboard')

    fireEvent.click(screen.getByRole('link', { name: 'Roster' }))
    expect(screen.getByRole('heading', { name: 'Roster' })).toBeVisible()

    fireEvent.click(screen.getByRole('link', { name: 'Messages' }))
    expect(screen.getByRole('link', { name: 'Team Chat' })).toBeVisible()

    fireEvent.click(screen.getByRole('link', { name: 'Team Chat' }))
    expect(
      screen.getByText('Practice starts at 5 PM today.'),
    ).toBeVisible()
  })

  it('shows a not found page for an unknown route', () => {
    renderAtPath('/unknown')

    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Go to dashboard' })).toHaveAttribute(
      'href',
      '/dashboard',
    )
  })
})

describe('weather card', () => {
  it('shows a loading state then displays current weather', async () => {
    let finishRequest
    vi.mocked(getCurrentWeather).mockReturnValue(
      new Promise((resolve) => {
        finishRequest = resolve
      }),
    )

    render(<WeatherCard />)

    expect(screen.getByRole('status')).toHaveTextContent(
      'Loading current weather',
    )
    finishRequest(sampleWeather)

    expect(await screen.findByText('22°C')).toBeVisible()
    expect(screen.getByText('Mainly clear')).toBeVisible()
  })

  it('shows an error when the weather request fails', async () => {
    vi.mocked(getCurrentWeather).mockRejectedValue(new Error('Network error'))

    render(<WeatherCard />)

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Weather information is unavailable',
    )
  })
})

describe('conversation form', () => {
  it('adds a message to the current conversation', () => {
    renderAtPath('/messages/1')

    fireEvent.change(screen.getByRole('textbox', { name: 'Write a message' }), {
      target: { value: 'See you at practice' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByText('See you at practice')).toBeVisible()
  })
})
