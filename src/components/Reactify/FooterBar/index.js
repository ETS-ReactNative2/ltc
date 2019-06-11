import styled from 'styled-components'

const FooterBar = styled.footer`
  box-shadow: 0 -4px 12px 0 hsla(0, 0%, 0%, 0.3);
  font-size: 1rem;
  bottom: 0;
  line-height: 2;
  margin: 0;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 500;
  ${({ css }) => css};
`

export default FooterBar
