import { ApolloProvider } from '@apollo/client'
import CoinProvider from './context/CoinContext'
import Home from './pages/Home'
import { client } from './services/api'

function App() {

  return (
    <CoinProvider>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </CoinProvider>

  )
}

export default App
