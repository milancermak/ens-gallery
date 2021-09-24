import type { NftImageProps } from 'src/components/NftImage/NftImage'
import NftImage from 'src/components/NftImage/NftImage'
//import { EnsData, useEns } from 'src/EnsContext'

type GalleryProps = {
  images: NftImageProps[]
}

const Gallery = (props: GalleryProps) => {
  //const ens: EnsData = useEns()
  //console.log(`I know about domain ${ens.domain} at address ${ens.address}`)

  return (
    <div className="container grid grid-cols-3 gap-2 mx-auto">
      {props.images.map((nft) => (
        <NftImage {...nft} key={nft.contract_address + '/' + nft.token_id} />
      ))}
    </div>
  )
}

export default Gallery
