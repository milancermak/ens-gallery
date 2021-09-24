import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
// TODO: explore react-ens-address maybe it's enough?
import ENS, { getEnsAddress } from '@ensdomains/ensjs'
import { ethers } from 'ethers'
import { ACCOUNT_ADDRESS } from 'src/Mock'
import Gallery from 'src/components/Gallery/Gallery'

const HomePage = () => {
  const [ensDomain, setEnsDomain] = useState('')
  const [domainAddr, setDomainAddr] = useState('')
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    ; (async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
      )
      const ens = new ENS({ provider, ensAddress: getEnsAddress('1') })
      // TODO: using this for dev purposes, switch to document.URL when going live
      //       then, check for the subdomain higher since I'm assuming the app
      //       will run on sth like gallery.anon.eth (so want anon.eth to resolve)
      //
      //       support eth.limo as well was eth.link
      // const url = new URL(document.URL)
      let host = 'dcinvestor.eth.link'

      if (host.endsWith('.link')) {
        host = host.substring(0, host.length - 5)
      }

      setEnsDomain(host)

      const resolvedAddress = await ens.name(ensDomain).getAddress()
      //console.log(`Address for ${ensDomain} is ${resolvedAddress}`)

      setDomainAddr(resolvedAddress)
      setNfts(ACCOUNT_ADDRESS.nfts)
      /*
        .then((addr: string) => {
          console.log(`Address for ${ethDomain} is ${addr}`)

          /*
        const accountNfts = `https://api.nftport.xyz/account/${addr}/nfts?chain=ethereum&include=metadata`
        fetch(accountNfts, {
          headers: {
            Accept: 'application/json',
            Authorization: process.env.NFTPORT_API_KEY,
          },
        })

          .then((response: Response) => {
            return response.json()
          })

          Promise.resolve(ACCOUNT_ADDRESS)
            .then((json: any) => json['nfts'])
            .then(
              (nfts: Array<{ contract_address: string; token_id: string }>) => {
                console.log(`Got ${nfts.length} results`)
                console.log(JSON.stringify(nfts[0]))
              }
            )
          })
          */
    })()
  }, [ensDomain])

  return (
    <>
      <MetaTags
        title="Home"
      // description="Home description"
      /* you should un-comment description and add a unique description, 155 characters or less
You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>
        Gallery for {ensDomain} @ {domainAddr}
      </h1>

      <Gallery images={nfts}></Gallery>
    </>
  )
}

export default HomePage
