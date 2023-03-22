import { cn } from './cn'

describe('cn', () => {
  it('should work', () => {
    expect(
      cn(
        'px-2 py-1 bg-red hover:bg-dark-red',
        'p-3 bg-[#B91C1C]',
        { foo: true },
        { bar: false }
      )
    ).toEqual('hover:bg-dark-red p-3 bg-[#B91C1C] foo')
  })
})
