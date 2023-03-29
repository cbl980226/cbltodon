import { sanitizeHtml } from './sanitize-html'

describe('sanitize-html', () => {
  it('should work', () => {
    expect(
      sanitizeHtml(
        `<a href="foo.html" target="_blank">bar</a><img src="test.png">`
      )
    ).toEqual(
      `<a href="foo.html" target="_blank">bar</a><img src="test.png" />`
    )
  })
})
