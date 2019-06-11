import styled from 'styled-components'
// import styledMap from 'styled-map'

export const H1 = styled.h1`
  color: hsla(199, 18%, 33%, 1);
  font-size: 2.4rem;
  font-weight: 500;

  & > code {
    color: hsla(199, 18%, 33%, 1);
  }
  
  ${({ css }) => css}
`

export const H2 = styled.h2`
  color: hsla(199, 18%, 33%, 1);
  font-size: 2rem;
  font-weight: 500;

  & > code {
    color: hsla(199, 18%, 33%, 1);
  }
  
  ${({ css }) => css}
`

export const H3 = styled.h3`
  color: hsla(199, 18%, 33%, 1);
  font-size: 1.6rem;
  font-weight: 500;

  & > code {
    color: hsla(199, 18%, 33%, 1);
  }
  
  ${({ css }) => css}
`

export const Div = styled.div`
  ${({ css }) => css}
`

export const Span = styled.span`
  ${({ css }) => css}
`
