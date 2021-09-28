import { render } from '@redwoodjs/testing/web'

import NftAsset from './NftAsset'

describe('NftAsset', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NftAsset />)
    }).not.toThrow()
  })
})
