import styled from 'styled-components'

const TitleBar = styled.div`
  box-shadow: 0 4px 12px 0 hsla(0, 0%, 0%, 0.3);
  left: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 500;
  ${({ css }) => css};
`

export default TitleBar
