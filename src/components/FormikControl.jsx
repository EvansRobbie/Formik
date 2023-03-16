import React from 'react'
import Checkbox from './Checkbox'
import DatePick from './DatePick'
import Input from './Input'
import Radiobutton from './Radiobutton'
import Select from './Select'
import Textarea from './Textarea'

const FormikControl = (props) => {
    const{ control , ...rest} = props
    switch(control){
        case 'input': return <Input {...rest}/>
        case 'textarea': return <Textarea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <Radiobutton {...rest}/>
        case 'checkbox': return <Checkbox {...rest} />
        case 'date': return <DatePick {...rest} />
        
        default:
            return null
    }
 
}

export default FormikControl