import * as React from 'react'
import { Link } from 'react-router-dom'

import { isEmpty, length } from 'ramda'
import styled from 'styled-components'

const Trail = styled.div`
  text-align: left;
  flex-grow: 1;
  flex-shrink: 0;
`

const TrailPlaceholder = styled.span`
  color: Crimson;
  font-weight: 600;
`

const TrailLink = styled(Link)`
  text-decoration: none;
  color: DarkSlateBlue;

  &:hover {
    color: Crimson;
  }
`

const caret = `data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' fill='SlateGray' viewBox='0 0 256 512'>
    <path
      transform='translate(0, 80)'
      d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
  </svg>`

const TrailSeparator = styled.span`
  background-image: url("${caret}");
  background-position: bottom center;
  background-repeat: no-repeat;
  content: "";
  display: inline-block;
  height: 1rem;
  margin: 0 0.5rem;
  width: 0.5rem;
`

function mapCrumbs ([x, ...xs]) {
  if (isEmpty(xs)) {
    return (
      <TrailPlaceholder data-tip={x.linkDescription}>
        {x.linkLabel}
      </TrailPlaceholder>
    )
  }

  return (
    <>
      <TrailLink to={x.fullPath} data-tip={x.linkDescription}>
        {x.linkLabel}
      </TrailLink>
      <TrailSeparator />
      {mapCrumbs(xs)}
    </>
  )
}

export default function BreadcrumbTrail ({ breadcrumbTrail }) {
  return length(breadcrumbTrail) > 1
    ? <Trail>{mapCrumbs(breadcrumbTrail)}</Trail>
    : null
}
