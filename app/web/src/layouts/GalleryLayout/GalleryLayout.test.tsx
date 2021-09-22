import { render } from '@redwoodjs/testing/web'

import GalleryLayout from './GalleryLayout'

describe('GalleryLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GalleryLayout />)
    }).not.toThrow()
  })
})
