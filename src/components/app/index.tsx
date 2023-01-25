import { withContextProvider } from 'contexts/UserContext'
import Routes from 'components/Routes'

function App() {
  return <Routes />
}

export default withContextProvider(App)
