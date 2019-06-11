import * as React from 'react'
import { Link } from 'react-router-dom'

import { addIndex, filter, map, values } from 'ramda'
import styled from 'styled-components'

const mapWithIndex = addIndex(map)

const Card = styled.article`
  background: white;
  box-shadow: 0 0 0.75rem LightGray;
  width: 15em;
  height: 22rem;
  overflow: hidden;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.2s ease-in-out;
  margin: 0 1rem;

  &:focus,
  &:hover {
    box-shadow: 0 0 3rem LightGray
  }

  & > a {
    text-decoration: none;
  }
`
const CardsWrapper = styled.div`
  background-color: Gainsboro;
  grid-area: CARDS;
  padding: 2em 0;
`

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
`

const CardDescription = styled.div`
  color: Black;
  font-size: 1em;
  font-weight: 300;
  padding: 0 1em 1em;
  text-align: center;
  text-decoration: none !important;
`

const CardImage = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
`

const CardTitle = styled.h2`
  color: MidnightBlue;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
`

function mapCardsHome (cards) {
  return mapWithIndex(
    (
      { linkDescription, fullPath, linkImageUrl, linkImageAlt, linkLabel },
      key
    ) => (
      <Card key={`Card${key}`}>
        <Link to={fullPath}>
          {linkImageUrl &&
            <CardImage
              width='100%'
              src={`/assets/${linkImageUrl}`}
              alt={linkImageAlt}
            />}
          <CardTitle>{linkLabel}</CardTitle>
          <CardDescription>{linkDescription}</CardDescription>
        </Link>
      </Card>
    ),
    cards
  )
}

CardsHome.defaultProps = {
  links: []
}

export default function CardsHome ({ pathMap = {} }) {
  const tracks = values(
    filter(
      v =>
        v.fullPath === '/zones/developer/api-developer' ||
        v.fullPath === '/zones/developer/front-end-developer',
      pathMap
    )
  )

  return (
    <CardsWrapper>
      <CardContainer>
        {mapCardsHome(tracks)}
      </CardContainer>
    </CardsWrapper>
  )
}
