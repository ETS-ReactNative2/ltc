import styled from 'styled-components'

const Hero = styled.div`
  background-image: url(${({ bgnd }) => '/assets/' + bgnd});
  background-size: cover;
  grid-area: HERO;
  justify-self: stretch;
  margin: 0;
  padding: 0;

  & > div {
    align-items: center;
    background-color: hsla(240, 35%, 33%, 0.75);
    color: white;
    display: grid;
    justify-self: stretch;
    height: 26vw;
    text-align: center;
  }

  ${({ css }) => css}
`

export default Hero
