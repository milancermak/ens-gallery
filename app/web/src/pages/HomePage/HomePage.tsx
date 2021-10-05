import { MetaTags, Head } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import { useEns } from 'src/hooks/useEns'
import { ACCOUNT_ADDRESS } from 'src/Mock'
import Gallery from 'src/components/Gallery/Gallery'
import Header from 'src/components/Header/Header'
import Loader from 'src/components/Loader/Loader'
import { NftAssetProps } from 'src/components/NftAsset/NftAsset'

const HomePage = () => {
  const ensInfo = useEns()
  const [nfts, setNfts] = useState(null)

  useEffect(() => {
    ; (async () => {
      const nfts: Array<NftAssetProps> = ACCOUNT_ADDRESS['nfts']
      nfts.sort((a, b) => {
        if (a.contract_address == b.contract_address) {
          return a.token_id.localeCompare(b.token_id)
        }
        return a.contract_address.localeCompare(b.contract_address)
      })

      for (const nft of nfts) {
        if (nft.metadata?.image?.startsWith('ipfs://')) {
          // use Cloudflare's IPFS gateway to access assets in ipfs://
          nft.metadata.image = nft.metadata.image.replace(
            'ipfs://',
            'https://cloudflare-ipfs.com/'
          )
        }
      }

      setNfts(nfts)
    })()
  }, [ensInfo.address])

  return (
    <>
      <Head>
        <link rel="manifest" href="manifest.json" />
      </Head>
      <MetaTags
        title="Home"
      // description="Home description"
      /* you should un-comment description and add a unique description, 155 characters or less
You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      {ensInfo.address && nfts ? (
        <>
          <Header ensInfo={ensInfo}></Header>
          <Gallery images={nfts}></Gallery>
        </>
      ) : (
        <Loader></Loader>
      )}
    </>
  )
}

export default HomePage
