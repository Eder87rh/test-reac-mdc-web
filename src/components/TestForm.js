import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Textfield from './Textfield'
import CustomTextField from './CustomTextField'
import Button from './Button'

let TestForm = props => {
    console.log(props)

  const { handleSubmit } = props

    
  return (
    <form onSubmit={ handleSubmit }>
       <Field name="name"
            component={ 
                props =>  
                         <Textfield 
                            floatingLabel="Nombre"
                            value={props.input.value}
                            onChange={props.input.onChange}  /> 
            } 
        />
    </form>
  )
}

TestForm = reduxForm({
  // a unique name for the form
  form: 'testForm'
})(TestForm)

export default TestForm;