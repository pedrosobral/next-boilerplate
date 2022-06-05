import {render, screen} from '@testing-library/react'
import Home from '../src/pages'

describe('Home', () => {
  it('snapshot', () => {
    const {container} = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
