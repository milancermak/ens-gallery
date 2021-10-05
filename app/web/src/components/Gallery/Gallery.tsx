import type { NftAssetProps } from 'src/components/NftAsset/NftAsset'
import NftAsset from 'src/components/NftAsset/NftAsset'

type GalleryProps = {
  images: NftAssetProps[]
}

const Gallery = (props: GalleryProps) => {
  // TODO: deal with empty galleries
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 md:px-32 mx-auto mb-12">
      {props.images.map((nft) => (
        <NftAsset {...nft} key={nft.contract_address + '/' + nft.token_id} />
      ))}
    </div>
  )
}

export default Gallery
