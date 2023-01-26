import Home from 'pages/Home'

import { User } from 'contexts/UserContext/reducer'

import PATHS from './paths'

export interface Route {
  path: string
  element: React.LazyExoticComponent<any>
  redirectTo?: (user: User | null) => string | undefined
  title?: string
  description?: string
}

const MAIN_PUBLIC_PATH = PATHS.Home

const DESCENDANT_ROUTE_INDICATOR = '*'

export const ROUTES = [
  {
    path: `${PATHS.Home}${DESCENDANT_ROUTE_INDICATOR}`,
    element: <Home />,
    redirectTo: (user: User | null) => (user ? MAIN_PUBLIC_PATH : undefined)
  }
]
