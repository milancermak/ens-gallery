import React from 'react'
// TODO: explore react-ens-address maybe it's enough?
import { ethers } from 'ethers'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

type EnsInfo = {
  address?: string
  domain?: string
}

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
  domain = domain.substring(domain.indexOf('.') + 1, domain.length)

  return domain
}

const resolveDomain = async (): Promise<EnsInfo> => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
  )
  const ens = new ENS({ provider, ensAddress: getEnsAddress('1') })

  const domain = parseDomain()
  const address = await ens.name(domain).getAddress()
  //console.log(`Resolved ${domain} to ${address}`)

  return { address, domain }
}

// TODO: maybe use a reducer here?
const useEns = () => {
  const [ensInfo, setEnsInfo] = React.useState<EnsInfo>({
    address: null,
    domain: null,
  })

  React.useEffect(() => {
    ; (async () => {
      const resolvedInfo: EnsInfo = await resolveDomain()
      setEnsInfo(resolvedInfo)
    })()
  }, [ensInfo.domain])

  return ensInfo
}

export { EnsInfo, useEns }
