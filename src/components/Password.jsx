import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Password = (props) => {
    const {label, name, ...rest} = props
  return (
    <div>
        
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Password