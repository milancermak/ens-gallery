import { render } from '@redwoodjs/testing/web'

import Gallery from './Gallery'

describe('Gallery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gallery />)
    }).not.toThrow()
  })
})
