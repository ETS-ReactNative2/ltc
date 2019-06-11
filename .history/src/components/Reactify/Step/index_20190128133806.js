import * as React from 'react'
import { Query } from 'react-apollo'

import styled from 'styled-components'

import pageQuery from '../../../gql/queries/page.graphql'
import Reactify from '../'

const Wrapper = styled.div`
  align-self: stretch;
  grid-area: CONTENT;
  justify-self: stretch;
  margin-bottom: 3rem;
`

export default function Step ({ data, page }) {
  const { type } = page

  if (type === 'Goal') {
    const { childPaths } = page
    const [fullPath] = childPaths || []

    return fullPath
      ? <Query query={pageQuery} variables={{ fullPath }}>
        {/* eslint-disable-next-line no-unused-vars*/
        ({ loading, error, data: { allManagedPages: { nodes: [step] = [] } = {} } = {} }) => {
          return step
            ? <Wrapper>
              <Reactify html={step.content} {...data} />
            </Wrapper>
            : null
        }}
      </Query>
      : null
  }

  return <Wrapper><Reactify html={page.content} {...data} /></Wrapper>
}
