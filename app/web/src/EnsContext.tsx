import React from 'react'

type EnsData = {
  address: string
  domain: string
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const EnsContext = React.createContext([{}, function () { }])

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
}

const useEns = () => {
  const [ensData, setEnsData] = React.useContext(EnsContext)

  const onChange = ({ address, domain }: EnsData) => {
    // @ts-expect-error magic
    setEnsData({ address, domain })
  }

  return { value: ensData, onChange }
}

export { EnsData, EnsProvider, useEns, ZERO_ADDRESS }
