import { withContextProvider } from 'contexts/UserContext'
import Router from 'components/router'

function App() {
  return <Router />
}

export default withContextProvider(App)
