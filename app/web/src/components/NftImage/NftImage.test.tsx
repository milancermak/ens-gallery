import { render } from '@redwoodjs/testing/web'

import NftImage from './NftImage'

describe('NftImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NftImage />)
    }).not.toThrow()
  })
})
