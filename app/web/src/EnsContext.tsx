import React from 'react'

type EnsData = {
  address: string
  domain: string
}

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const EnsContext = React.createContext({ address: ZERO_ADDRESS, domain: '' })

const useEns = () => {
  React.useContext(EnsContext)
}

const EnsProvider = ({
  value = { address: ZERO_ADDRESS, domain: '' },
  children,
}) => {
  console.log(document.URL)

  return <EnsContext.Provider value={value}>{children}</EnsContext.Provider>
}

export { EnsData, useEns, EnsProvider, ZERO_ADDRESS }
