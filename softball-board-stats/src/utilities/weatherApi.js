import axios from 'axios'

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast'

export async function getCurrentWeather(latitude, longitude) {
  const response = await axios.get(WEATHER_API_URL, {
    params: {
      latitude,
      longitude,
      current:
        'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m',
      timezone: 'auto',
    },
  })

  return response.data.current
}
