import * as React from 'react'
import { Redirect } from 'react-router'
import { Mutation } from 'react-apollo'

import { storage } from 'local-storage-fallback'
import styled from 'styled-components'

import SignInForm from '../../components/SignInForm'
import authenticateMutation from '../../gql/mutations/authenticate.graphql'

function noop () {}

const CenteredPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 25rem 1fr;
  grid-template-rows: 33vh; 
  grid-gap: 15px 10px;
  grid-template-areas: 
    "TOP TOP TOP" 
    "LEFT MIDDLE RIGHT"
    "BOTTOM BOTTOM BOTTOM";
`

const CenteredItem = styled.div`
  grid-area: MIDDLE;
  align-items: center;
  justify-items: stretch;
`
export default function SignIn () {
  return (
    <Mutation mutation={authenticateMutation} onError={noop}>
      {(handleSubmit, { data = {}, error }) => {
        const { authenticate: { jwtToken } = {} } = data

        if (jwtToken) {
          storage.setItem('jwtToken', jwtToken)

          return <Redirect to='/' />
        }

        return (
          <CenteredPageGrid>
            <CenteredItem>
              <SignInForm handleSubmit={handleSubmit} error={error} />
            </CenteredItem>
          </CenteredPageGrid>
        )
      }}
    </Mutation>
  )
}
