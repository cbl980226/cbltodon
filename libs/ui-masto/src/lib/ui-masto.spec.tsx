import { render } from '@testing-library/react'

import UiMasto from './ui-masto'

describe('UiMasto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiMasto />)
    expect(baseElement).toBeTruthy()
  })
})
