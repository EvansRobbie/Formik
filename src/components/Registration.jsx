import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const Registration = () => {
    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'},
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''

    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: () => Yup.string().required('Required')
        })
    })
    const onSubmit = (values) => console.log(values)
  return (
    <Formik
    initialValues={initialValues}
    validationSchema ={validationSchema}
    onSubmit = {onSubmit}
    >
            {
                (formik) =>
                        <Form>
                            <FormikControl
                            control = 'input'
                            label = 'Email'
                            name = 'email'
                            />
                            <FormikControl
                            control = 'input'
                            label = 'Password'
                            name = 'password'
                            />
                            <FormikControl
                            control = 'input'
                            label = 'Confirm Password'
                            name = 'confirmPassword'
                            />
                            <FormikControl
                            control = 'radio'
                            label = 'Mode Of Contact'
                            name = 'modeOfContact'
                            options = {options}
                            />
                            <FormikControl
                            control = 'input'
                            type = 'text'
                            label = 'Phone'
                            name = 'phone'
                            />
                            <button type='submit' disabled={!formik.isValid}>Register</button>
                    </Form>
                  
            }
        

    </Formik>
  )
}

export default Registration