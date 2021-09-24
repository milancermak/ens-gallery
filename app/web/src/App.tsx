import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { EnsProvider } from './EnsContext'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <EnsProvider>
        <Routes />
      </EnsProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
