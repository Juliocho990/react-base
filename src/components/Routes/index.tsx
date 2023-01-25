import {
  BrowserRouter as Router,
  Routes as RoutesSwitch,
  Route,
  Navigate
} from 'react-router-dom'

import { useSelector } from 'contexts/UserContext'

import { ROUTES } from './constants'
import styles from './styles.module.scss'

function Routes() {
  const user = useSelector((state) => state.user)

  return (
    <Router>
      <div className={styles.container}>
        <RoutesSwitch>
          {ROUTES.map(({ redirectTo, path, element, ...config }) => (
            <Route
              key={path}
              path={path}
              element={
                redirectTo?.(user) ? (
                  <Navigate to={redirectTo?.(user) as string} />
                ) : (
                  element
                )
              }
              {...config}
            />
          ))}
        </RoutesSwitch>
      </div>
    </Router>
  )
}

export default Routes
