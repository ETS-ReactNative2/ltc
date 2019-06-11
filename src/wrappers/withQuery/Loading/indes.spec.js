import { shallow } from 'enzyme'
import * as React from 'react'

import Loading from '.'

describe('components:Loading', () => {
  it('renders the Loading correctly', () => {
    expect(toJson(shallow(<Loading />))).toMatchSnapshot()
  })
})
