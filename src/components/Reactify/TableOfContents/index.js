import * as React from 'react'

import { isEmpty, map } from 'ramda'
import styled from 'styled-components'

import mapPathsToLinkData from '../../../utilities/mapPathsToLinkData'
import { H1 } from '../Html'
import LinkInternal from '../Link/LinkInternal'

const Row = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-areas: 'LABEL DESCRIPTION';
  grid-template-columns: 1fr 4fr;
`

const Label = styled.div`
  grid-area: LABEL;
`

const Description = styled.div`
  grid-area: DESCRIPTION;
`

function mapChildren (children) {
  if (isEmpty(children)) {
    return null
  }

  return map(
    child => (
      <Row key={child.rowId}>
        <Label>
          <LinkInternal to={child.fullPath}>{child.linkLabel}</LinkInternal>
        </Label>
        <Description>{child.linkDescription}</Description>
      </Row>
    ),
    children
  )
}

export default function TableOfContents ({ page, pathMap, title }) {
  const children = mapPathsToLinkData(page.childPaths, pathMap)

  return (
    <div>
      <H1>{title}</H1>
      {mapChildren(children)}
    </div>
  )
}
