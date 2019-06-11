import * as React from 'react'

import { head, map } from 'ramda'
import { isNilOrEmpty } from 'ramda-adjunct'
import styled from 'styled-components'

import mapPathsToLinkData from '../../../utilities/mapPathsToLinkData'
import Link from '../Link'

const DrawerWrapper = styled.aside`
  align-self: stretch;
  background-color: Gainsboro;
  bottom: 0;
  box-sizing: border-box;
  color: White;
  grid-area: DRAWER;
  justify-self: stretch;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1rem 0.5rem;
  position: fixed;
  top: 3.125rem;
  width: 14rem;
`

// const DrawerIcon = styled.div`
//   cursor: pointer;
//   padding: 0;
//   text-align: ${({ drawerOpen }) => (drawerOpen ? 'right' : 'left')};
// `

const DrawerLabel = styled.span`
  color: Crimson;
  display: inline-block;
`

const DrawerRow = styled.div`
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 0 1rem;
  padding: 0;
`

// const openIcon = (
//   <svg
//     width='24'
//     height='24'
//     viewBox='0 0 1024 702'
//     version='1.1'
//     aria-hidden='true'
//   >
//     <path
//       stroke='Gainsboro'
//       fill='Gray'
//       d='M1 32q0-13 9.5-22.5T33 0h959q13 0 22.5 9.5T1024 32t-9.5 22.5T992 64H33q-13 0-22.5-9.5T1 32zm319 318q0-14 9.5-23t22.5-9h640q13 0 22.5 9t9.5 23q0 13-9.5 22.5T992 382H352q-13 0-22.5-9.5T320 350zM1 670q0-13 9.5-22.5T33 638h959q13 0 22.5 9.5t9.5 22.5-9.5 22.5T992 702H33q-13 0-22.5-9.5T1 670zm173-212L4 327q-4-4-4-9.5t4-8.5l170-132q5-4 11.5-1t6.5 10v264q0 6-6.5 9t-11.5-1z'
//     />
//   </svg>
// )

// const shutIcon = (
//   <svg
//     width='24'
//     height='24'
//     viewBox='0 0 1024 702'
//     version='1.1'
//     aria-hidden='true'
//   >
//     <path
//       stroke='Gainsboro'
//       fill='Gray'
//       d='M991 64H32q-13 0-22.5-9.5T0 32 9.5 9.5 32 0h959q13 0 22.5 9.5T1023 32t-9.5 22.5T991 64zM672 382H32q-13 0-22.5-9.5T0 350q0-14 9.5-23t22.5-9h640q13 0 22.5 9t9.5 23q0 13-9.5 22.5T672 382zm319 320H32q-13 0-22.5-9.5T0 670t9.5-22.5T32 638h959q13 0 22.5 9.5t9.5 22.5-9.5 22.5T991 702zM832 449V186q0-7 6.5-10t11.5 1l170 132q4 3 4 8.5t-4 9.5L850 458q-5 4-11.5 1t-6.5-10z'
//     />
//   </svg>
// )

function makeListItem (
  { linkDescription, fullPath, rowId, linkLabel },
  currentStep,
  pathMap
) {
  return currentStep
    ? <DrawerRow key={rowId}>
      <DrawerLabel key={rowId} data-tip={linkDescription}>
        {linkLabel}
      </DrawerLabel>
    </DrawerRow>
    : <DrawerRow key={rowId}>
      <Link
        key={rowId}
        to={fullPath}
        pathMap={pathMap}
        data-tip={linkDescription}
      >
        {linkLabel}
      </Link>
    </DrawerRow>
}

function mapChildren (steps, fullPath, pathMap) {
  return map(
    item => makeListItem(item, item.fullPath === fullPath, pathMap),
    steps
  )
}

export default function Drawer ({ page = {}, pathMap = {}, source = '' }) {
  const { fullPath, childPaths, siblingPaths } = page

  const drawerContent = source === 'children'
    ? mapPathsToLinkData(childPaths, pathMap)
    : mapPathsToLinkData(siblingPaths, pathMap)

  const thisPath = source === 'children' ? head(childPaths || []) : fullPath

  const output = isNilOrEmpty(drawerContent)
    ? <p>None yet.</p>
    : mapChildren(drawerContent, thisPath, pathMap)

  return (
    <DrawerWrapper>
      {output}
    </DrawerWrapper>
  )
}
