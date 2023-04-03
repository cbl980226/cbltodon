import SanitizeHTML from 'sanitize-html'

export function sanitizeHtml(text: string) {
  return SanitizeHTML(text, {
    allowedTags: SanitizeHTML.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      a: ['href', 'name', 'target', 'class'],
      span: ['class'],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading']
    }
  })
}
