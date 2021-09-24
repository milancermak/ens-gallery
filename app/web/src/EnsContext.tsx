import React from 'react'

type EnsData = {
  address: string
  domain: string
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const EnsContext = React.createContext([
  //{ address: ZERO_ADDRESS, domain: '' } as EnsData,
  {},
  function () { },
])

const EnsProvider = ({ children }) => {
  const [ensData, setEnsData] = React.useState({
    address: ZERO_ADDRESS,
    domain: '',
  })

  return (
    <EnsContext.Provider value={[ensData, setEnsData]}>
      {children}
    </EnsContext.Provider>
  )

  /*
  const [address, setAddress] = React.useState(ZERO_ADDRESS)

  return (
    <EnsContext.Provider value={[address, setAddress]}>
      {children}
    </EnsContext.Provider>
  )
  */
}

const useEns = () => {
  const [ensData, setEnsData] = React.useContext(EnsContext)

  const onDomainResolved = ({ address, domain }: EnsData) => {
    console.log(`in onDomainResolved ${address} ${domain}`)
    // @ts-expect-error magic
    setEnsData({ address, domain })
  }
  return { value: ensData, onChange: onDomainResolved }
  //return { value: ensData, setEnsDataC: (o) => setEnsData(o) }

  /*
  const [address, setAddress] = React.useContext(EnsContext)

  const onChange = (value: string) => {
    setAddress(value)
  }

  return { value: address, onChange }
  */
}

export { EnsData, useEns, EnsProvider, ZERO_ADDRESS }
