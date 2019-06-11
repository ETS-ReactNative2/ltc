import * as React from 'react'

import styled from 'styled-components'

const ImageWrapper = styled.p`
  max-width: 40vw;
`

export default function Image ({ alt, longdesc, src }) {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} longdesc={longdesc} />
    </ImageWrapper>
  )
}
