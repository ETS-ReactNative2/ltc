import * as React from 'react'

import {
  ascend,
  groupBy,
  isNil,
  map,
  pick,
  prop,
  sortWith,
  toLower,
  values
} from 'ramda'
import styled from 'styled-components'

import { H1, Span } from '../Html'
import LinkInternal from '../Link/LinkInternal'

function getMargin (depth) {
  return `${depth}rem`
}

const Row = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-areas: 'LABEL DESCRIPTION';
  grid-template-columns: 1fr 2fr;
  width: 100%;
`

const Label = styled.div`
  grid-area: LABEL;
  margin-left: ${({ depth }) => getMargin(depth)};
  border-bottom: 1px dotted LightGray;
`

const Description = styled.div`
  font-size: 0.9rem;
  padding-top: 0.3rem;
  color: SlateGray;
  grid-area: DESCRIPTION;
  border-bottom: 1px dotted LightGray;
`

// function makeRow (child) {
//   return (
//     <Row key={child.rowId}>
//       <Label depth={child.depth}>
//         <LinkInternal page={omit(['linkDescription'], child)} />
//       </Label>
//       <Description>{child.linkDescription}</Description>
//     </Row>
//   )
// }

function nestEm (pages, path) {
  const { [path]: level, ...rest } = pages

  if (isNil(level)) {
    return []
  }

  return map(
    p => (
      <>
        <Row key={p.rowId}>
          <Label depth={p.depth}>
            <LinkInternal to={p.fullPath}>{p.linkLabel}</LinkInternal>
            <Span css='color: Silver; font-size: 0.9rem'>
              {' '}| {toLower(p.type)}
            </Span>
          </Label>
          <Description>{p.linkDescription}</Description>
        </Row>
        {nestEm(rest, p.fullPath)}
      </>
    ),
    sortWith([ascend(prop('spot'))], level)
  )
}

export default function SiteMap ({ pathMap }) {
  const grouped = groupBy(
    prop('parentPath'),
    map(
      pick([
        'depth',
        'fullPath',
        'linkDescription',
        'linkLabel',
        'parentPath',
        'rowId',
        'spot',
        'type'
      ]),
      values(pathMap)
    )
  )

  return (
    <>
      <H1>Site Map</H1>
      {nestEm(grouped, 'null')}
    </>
  )
}
