import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Textarea = (props) => {
    const {label, name, ...rest} = props
  return (
    <div>
        <label htmlFor={name}>{name}</label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea