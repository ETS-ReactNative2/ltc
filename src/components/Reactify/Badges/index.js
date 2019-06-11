import * as React from 'react'

import { isEmpty, map } from 'ramda'
import styled from 'styled-components'

import mapPathsToLinkData from '../../../utilities/mapPathsToLinkData'
import { H1 } from '../Html'
import LinkInternal from '../Link/LinkInternal'

const Row = styled.div`
  display: flex;
`

const Label = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
`

const Description = styled.div`
  align-self: flex-end;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0 2rem 2.2rem;
  text-align: left;
`

const Image = styled.img`
  align-self: flex-end;
  flex-grow: 0;
  flex-shrink: 1;
  height: 12rem;
  margin-left: -36px;
  margin-top: -20px;
`

function mapChildren (children) {
  if (isEmpty(children)) {
    return null
  }

  return map(
    child => (
      <Row key={child.rowId}>
        <Image src={`/assets/${child.linkImageUrl}`} alt={child.linkImageAlt} />
        <Description>
          <Label>
            <LinkInternal to={child.fullPath}>{child.linkLabel}</LinkInternal>
          </Label>
          <p>{child.linkDescription}</p>
        </Description>
      </Row>
    ),
    children
  )
}

export default function Badges ({ page, pathMap }) {
  const children = mapPathsToLinkData(page.childPaths, pathMap)

  return (
    <div>
      <H1>Badges</H1>
      {mapChildren(children)}
    </div>
  )
}
