import * as React from 'react'
import { Component } from 'react'

import { not } from 'ramda'
import styled from 'styled-components'

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid LightGray;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0.2rem 0 0;
  padding: 0 0.2rem;
  flex: 1;
`

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  width: 5rem;
  text-align: right;
  padding: 0 0.5rem;
`

const Button = styled.button`
  background-color: ${({ hidePassword }) => (hidePassword ? 'Crimson' : 'SlateBlue')};
  border-radius: 5px;
  border: none;
  color: White;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0.2rem 0 0;
  padding: 0 0.5rem;
`

const Field = styled.div`
  display: flex;
  margin: 1rem;
  align-items: stretch;
`

class PasswordField extends Component {
  state = {
    hidden: true
  }

  constructor (props) {
    super(props)

    this.inputRef = React.createRef()
  }

  handleClick = () => {
    this.setState(
      {
        hidden: not(this.state.hidden)
      },
      this.inputRef.current.select()
    )
  }

  onChange = ({ target: { value = '' } = {} }) => {
    const { handleChange } = this.props

    handleChange && handleChange({ password: value })
  }

  render () {
    const { hidden } = this.state
    const { form, value } = this.props

    return (
      <Field>
        <Label htmlFor='password'>Password</Label>
        <Input
          form={form}
          id='password'
          name='password'
          onChange={this.onChange}
          type={hidden ? 'password' : 'text'}
          value={value}
          ref={this.inputRef}
        />
        <Button hidePassword={hidden} onClick={this.handleClick} type='button'>
          {hidden ? 'Show' : 'Hide'}
        </Button>
      </Field>
    )
  }
}

export default PasswordField
