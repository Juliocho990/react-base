import { render, screen, waitFor } from '@testing-library/react'

import { StateContext } from 'contexts/UserContext'
import { UserState } from 'contexts/UserContext/reducer'

import PATHS from './paths'

import Routes from '.'

function WrappedRoutes({ userState }: { userState: UserState }) {
  return (
    <StateContext.Provider value={userState}>
      <Routes />
    </StateContext.Provider>
  )
}

// Since The BrowserRouter component is inside out Router, we can't use memory history.
// That's why we use window to navigate

describe('when there is a user', () => {
  const userState = { user: { id: 1, sessionToken: 'token' } }

  test('shows Home screen when being on the Home path', async () => {
    window.history.pushState({}, '', `${PATHS.Home}`)
    render(<WrappedRoutes userState={userState} />)

    await waitFor(() => {
      expect(screen.getByText(/Home works!/i)).toBeInTheDocument()
    })
  })
})
