import type { FC } from 'react'
import styled from '@emotion/styled'
import { sanitizeHtml } from '@cbltodon/utils'

export interface CommonRichContentProps {
  className?: string
  html: string
}

const StyledCommonRichContent = styled.div`
  a {
    color: #53b3cb;
    text-decoration-line: underline;
    .invisible {
      display: none;
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  b {
    font-weight: 700;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

export const CommonRichContent: FC<CommonRichContentProps> = ({
  className,
  html
}) => {
  return (
    <StyledCommonRichContent
      className={className}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(html)
      }}
    />
  )
}

export default CommonRichContent
