import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../utilities/weatherApi.js'

const sampleLocation = {
  name: 'New York City (sample location)',
  latitude: 40.7128,
  longitude: -74.006,
}

const weatherDescriptions = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Moderate rain showers',
  82: 'Heavy rain showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with heavy hail',
}

function WeatherCard() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadWeather() {
      try {
        const currentWeather = await getCurrentWeather(
          sampleLocation.latitude,
          sampleLocation.longitude,
        )

        if (isMounted) {
          setWeather(currentWeather)
        }
      } catch {
        if (isMounted) {
          setError('Weather information is unavailable right now.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadWeather()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <article className="dashboard-card weather-card">
      <h2>Weather</h2>
      <p className="weather-location">{sampleLocation.name}</p>
      {loading && <p role="status">Loading current weather...</p>}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && weather && (
        <div className="weather-details">
          <p className="weather-temperature">
            {Math.round(weather.temperature_2m)}°C
          </p>
          <p>
            {weatherDescriptions[weather.weather_code] ?? 'Current conditions'}
          </p>
          <p>Feels like {Math.round(weather.apparent_temperature)}°C</p>
          <p>Humidity: {weather.relative_humidity_2m}%</p>
          <p>Wind: {Math.round(weather.wind_speed_10m)} km/h</p>
        </div>
      )}
    </article>
  )
}

export default WeatherCard
