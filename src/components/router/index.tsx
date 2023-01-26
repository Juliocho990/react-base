import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useSelector } from 'contexts/UserContext'

import { ROUTES } from './constants'
import styles from './styles.module.scss'

function Router() {
  const user = useSelector((state) => state.user)

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router
