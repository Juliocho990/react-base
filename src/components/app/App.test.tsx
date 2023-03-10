import { render, screen } from '@testing-library/react'

import App from '.'

jest.mock(
  'components/router',
  () =>
    function Routes() {
      return <span>Routes</span>
    }
)

test('renders without errors', () => {
  render(<App />)
  expect(screen.getByText('Routes')).toBeInTheDocument()
})
