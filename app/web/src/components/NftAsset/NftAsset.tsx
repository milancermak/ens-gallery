import { useState } from 'react'

type NftAssetMetadata = {
  description?: string
  image?: string
  name?: string
}

export type NftAssetProps = {
  contract_address: string
  token_id: string
  metadata: NftAssetMetadata | undefined
}

const NftAsset = (nft: NftAssetProps) => {
  const [imageFailedToLoad, setImageFailedToLoad] = useState(false)

  if (nft.metadata?.image) {
    return (
      <div className="w-full rounded hover:shadow-2xl">
        {imageFailedToLoad ? (
          /* eslint-disable-next-line jsx-a11y/media-has-caption */
          <video src={nft.metadata?.image}></video>
        ) : (
          <img
            className="object-contain object-center h-full"
            src={nft.metadata.image}
            alt={nft.metadata?.name || 'NFT'}
            onError={() => setImageFailedToLoad(true)}
          />
        )}
      </div>
    )
  }
  return <></>
}

export default NftAsset
