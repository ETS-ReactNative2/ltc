import * as React from 'react'

import { isUndefined } from 'ramda-adjunct'

import LinkExternal from './LinkExternal'
import LinkInternal from './LinkInternal'
import LinkPlaceholder from './LinkPlaceholder'

export default function Link (props) {
  const {
    href,
    id,
    label,
    page = {},
    pathMap,
    placement,
    rowIdMap,
    target,
    tip,
    to
  } = props

  if (href) {
    return (
      <LinkExternal href={href} {...placement} data-tip={tip} target={target}>
        {label}
      </LinkExternal>
    )
  }

  if (isUndefined(id) && isUndefined(to)) {
    return null
  }

  const { fullPath, linkDescription, linkLabel, rowId } = (id
    ? rowIdMap[id]
    : pathMap[to]) || {}
  const thisPage = page.fullPath === fullPath

  return thisPage
    ? <LinkPlaceholder {...placement} data-tip='This page'>
      {linkLabel}
    </LinkPlaceholder>
    : <LinkInternal
      key={rowId}
      to={fullPath}
      data-tip={linkDescription}
      {...placement}
    >
      {linkLabel}
    </LinkInternal>
}
