import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import { useEns } from 'src/hooks/useEns'
import { ACCOUNT_ADDRESS } from 'src/Mock'
import Gallery from 'src/components/Gallery/Gallery'

const HomePage = () => {
  const ensInfo = useEns()
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    ; (async () => {
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
  }, [ensInfo.address])

  return (
    <>
      <MetaTags
        title="Home"
      // description="Home description"
      /* you should un-comment description and add a unique description, 155 characters or less
You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>
        Gallery for {ensInfo.domain} @ {ensInfo.address}
      </h1>

      <Gallery images={nfts}></Gallery>
    </>
  )
}

export default HomePage
