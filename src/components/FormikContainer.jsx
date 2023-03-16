import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


const FormikContainer = () => {
    const dropDownOptions = [
        {key: 'Select an option', value:''},
        {key:'Option 1', value: 'option1'},
        {key:'Option 2', value: 'option2'},
        {key:'Option 3', value: 'option3'},
    ]
    const radioOPtions = [
        {key:'Option 1', value: 'roption1'},
        {key:'Option 2', value: 'roption2'},
        {key:'Option 3', value: 'roption3'},
    ]
    const checkboxOptions = [
        {key:'Option 1', value: 'coption1'},
        {key:'Option 2', value: 'coption2'},
        {key:'Option 3', value: 'coption3'},
    ]
    const initialValues = {
        email: '',
        comment:'',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        date: null

    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email Required'),
        comment: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().min(1, 'Atleast one').required('Required'),
        date: Yup.date().nullable().required('Required')

    })
    const onSubmit = (values) => console.log(values)
    // console.log(validationSchema)
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
    
        {(formik)=>
            <Form>
                <FormikControl
                 control = 'input' 
                type='email' 
                label='Email' 
                name='email'
                 />
                <FormikControl 
                control= 'textarea' 
                type='comment' 
                label='Comments' 
                name='comment'
                 />
                <FormikControl 
                control = 'select' 
                type='selectOption' 
                name='selectOption' 
                label='Select an Option'
                options = {dropDownOptions}
                />
                <FormikControl
                control = 'radio'
                name ='radioOption'
                label= 'Radio Button'
                options = {radioOPtions}
                />
                <FormikControl
                control ='checkbox'
                name ='checkboxOption'
                label ='CheckBox'
                options ={checkboxOptions}
                />
                <FormikControl
                control = 'date'
                type= 'date'
                name = 'date'
                label= 'Date of Birth'
                />
                <button type='submit'>Submit</button>
            </Form>
        }

    </Formik>
  )
}

export default FormikContainer