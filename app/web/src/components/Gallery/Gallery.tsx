import type { NftImageProps } from 'src/components/NftImage/NftImage'
import NftImage from 'src/components/NftImage/NftImage'

type GalleryProps = {
  images: NftImageProps[]
}

const Gallery = (props: GalleryProps) => {
  return (
    <div className="container grid grid-cols-3 gap-2 mx-auto">
      {props.images.map((nft) => (
        <NftImage {...nft} key={nft.contract_address + '/' + nft.token_id} />
      ))}
    </div>
  )
}

export default Gallery
