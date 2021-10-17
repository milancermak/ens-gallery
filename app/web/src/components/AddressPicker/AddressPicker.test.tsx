import { render } from '@redwoodjs/testing/web'

import AddressPicker from './AddressPicker'

describe('AddressPicker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddressPicker />)
    }).not.toThrow()
  })
})
