import { render, screen } from '@testing-library/react';
import Home from '../src/pages';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('render correct background color', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#222222'
    })
  })
})