import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { useEffect } from 'react'
import { EnsProvider, useEns } from './EnsContext'
import { ethers } from 'ethers'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

import './index.css'

const App = () => {
  const { onChange } = useEns()

  const parseDomain = (): string => {
    const url = new URL(document.URL)
    if (url.hostname == 'localhost') return 'dcinvestor.eth'
    const demo = url.searchParams.get('d')
    if (demo) return demo

    let domain = url.hostname
    if (domain.endsWith('.link') || domain.endsWith('.limo')) {
      domain = domain.substring(0, domain.length - 5)
    }
    // assuming the app is available on a subdomain (e.g. gallery.anon.eth)
    // TODO: how does ens resolve the subdomains?
    domain = domain.substring(domain.indexOf('.') + 1, domain.length)

    return domain
  }

  useEffect(() => {
    ; (async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
      )
      const ens = new ENS({ provider, ensAddress: getEnsAddress('1') })

      const domain = parseDomain()
      const address = await ens.name(domain).getAddress()
      console.log(`Resolved ${domain} to ${address}`)
      onChange({ address, domain })
    })()
  })

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <EnsProvider>
          <Routes />
        </EnsProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
