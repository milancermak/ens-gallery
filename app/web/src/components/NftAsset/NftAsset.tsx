import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

type NftAssetMetadata = {
  collection_name?: string
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
  const { ref, inView } = useInView({
    rootMargin: '200px',
    threshold: 0,
  })

  if (nft.metadata?.image) {
    return (
      <div className="relative group w-full rounded z-auto" ref={ref}>
        {imageFailedToLoad ? (
          // if an image failed to load, we'll try to render an video tag

          /* eslint-disable-next-line jsx-a11y/media-has-caption */
          <video src={nft.metadata?.image}></video>
        ) : inView ? (
          // lazy load the images:
          // when the image is in view, render the img tag,
          // otherwise show just a simple loading message
          <img
            className="object-scale-down object-center h-full w-full"
            src={nft.metadata.image}
            alt={nft.metadata?.name || 'NFT'}
            onError={() => setImageFailedToLoad(true)}
          />
        ) : (
          <p className="h-full w-full">Loading {nft.metadata?.name || 'NFT'}</p>
        )}
        <div className="absolute flex flex-col justify-center select-none w-full bottom-0 h-14 z-10 px-1 opacity-0 transition duration-300 ease-in-out group-hover:bg-gray-100 group-hover:visible group-hover:opacity-90">
          <p className="text-center tracking-wide font-sans font-medium">
            {nft.metadata.name}
          </p>
        </div>
      </div>
    )
  }
  return <></>
}

export default NftAsset
