import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('IvalidEmail').required('Required'),
        password: Yup.string().required('Password required')
    }) 
    const onSubmit  = (values) => console.log(values)
  return (
    <Formik
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}
    >
        <Form>
            <FormikControl
            control='input'
            name= 'email'
            label ='Email'
            />
            <FormikControl
            control='input'
            name= 'password'
            label ='Password'
            />
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default LoginForm