import * as React from 'react'

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

const Field = styled.div`
  display: flex;
  margin: 1rem;
  align-items: stretch;
`

export default function EmailField ({ form, handleChange, value }) {
  const onChange = ({ target: { value = '' } = {} }) => {
    handleChange && handleChange({ email: value })
  }

  return (
    <Field>
      <Label htmlFor='email'>Email</Label>
      <Input
        form={form}
        id='email'
        name='email'
        onChange={onChange}
        type='email'
        value={value}
      />
    </Field>
  )
}
