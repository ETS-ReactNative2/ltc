import * as React from 'react'
import { Fragment } from 'react'
import { Query } from 'react-apollo'

import { mapIndexed } from 'ramda-adjunct'

import faqs from '../../../gql/queries/faqs.graphql'
import nestFaqs from '../../../utilities/nestFaqs'
import Reactify from '../'
import { Div, H1 } from '../Html'
import { H2 } from '../Html'

function mapQuestions (questions) {
  return mapIndexed(
    ({ question, answer }, idx) => (
      <Fragment key={`FAQ:${idx}`}>
        <dl>
          <dt>{question}</dt>
          <dd>
            <Reactify html={answer} />
          </dd>
        </dl>
      </Fragment>
    ),
    questions
  )
}

function mapCategories (categories) {
  return mapIndexed(
    ({ description, faqs, name }, idx) => (
      <Fragment key={`CAT:${idx}`}>
        <H2>{name}</H2>
        {mapQuestions(faqs)}
      </Fragment>
    ),
    categories
  )
}

export default function Faq () {
  return (
    <Query query={faqs}>
      {({ loading, error, data: { allFaqs: { nodes = [] } = {} } = {} }) => (
        <Div css='max-width: 50rem; padding-bottom: 5rem'>
          <H1>Frequently-asked questions</H1>
          {mapCategories(nestFaqs(nodes))}
        </Div>
      )}
    </Query>
  )
}
