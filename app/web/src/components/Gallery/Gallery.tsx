import type { NftImageProps } from 'src/components/NftImage/NftImage'
import NftImage from 'src/components/NftImage/NftImage'

type GalleryProps = {
  images: NftImageProps[]
}

const Gallery = (props: GalleryProps) => {
  // TODO: add some kind of grouping - NFTs from the same address should appear close together
  //       maybe even separate heading, from metadata, so it can be linked to?
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-32 mx-auto">
      {props.images.map((nft) => (
        <NftImage {...nft} key={nft.contract_address + '/' + nft.token_id} />
      ))}
    </div>
  )
}

export default Gallery
