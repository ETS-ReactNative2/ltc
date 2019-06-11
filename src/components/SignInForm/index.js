import * as React from 'react'
import { Component } from 'react'

import styled from 'styled-components'

import EmailField from './EmailField'
import PasswordField from './PasswordField'

const Button = styled.button`
  background-color: SlateBlue;
  border-radius: 5px;
  border: none;
  color: White;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0 0 6rem;
  padding: 0 2.5rem;
  text-transform: uppercase;
`

const Error = styled.div`
  font-size: 0.9rem;
  background-color: Gold;
  border-radius: 5px;
  color: DarkRed;
  padding: 0.5rem;
  margin: 1rem;
  margin-left: 7rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
`

const Field = styled.div`
  display: flex;
  margin: 1rem;
  align-items: stretch;
`

const Header = styled.h1`
  font-size: 1.6rem;
  margin-left: 7rem;
  line-height: 1.2;
`

function SignInError ({ message }) {
  return message ? <Error>{message}</Error> : null
}

class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = value => this.setState(value)

  onSubmit = e => {
    e.preventDefault()

    const { handleSubmit } = this.props

    handleSubmit && handleSubmit({ variables: this.state })
  }

  render () {
    const { email, password } = this.state
    const { error } = this.props
    const id = 'sign-in-form'

    const message = error
      ? <span>Oh, my! That can't be right. Try again?</span>
      : null

    return (
      <form id={id} onSubmit={this.onSubmit}>
        <Header>Please sign in</Header>
        <EmailField form={id} handleChange={this.handleChange} value={email} />
        <PasswordField
          form={id}
          handleChange={this.handleChange}
          value={password}
        />
        <Field>
          <Button form={id}>
            Sign in
          </Button>
        </Field>
        <SignInError message={message} />
      </form>
    )
  }
}

export default SignInForm
