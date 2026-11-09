import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import StatCard from '../components/StatCard.jsx'

describe('StatCard', () => {
  it('renders the statistic label and value', () => {
    render(<StatCard label="Players" value={4} />)

    expect(screen.getByRole('heading', { name: 'Players' })).toBeVisible()
    expect(screen.getByText('4')).toBeVisible()
  })
})
