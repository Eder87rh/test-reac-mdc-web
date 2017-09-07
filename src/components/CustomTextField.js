import React, {Component} from 'react'
import Textfield from './Textfield'

export default class CustomTextField extends Component {
    render(){
        const {input: {value,onChange}} = this.props
        console.log(this.props)
        return(
            <Textfield 
            floatingLabel="Nombre"
            value={value}
            onChange={onChange} />
        )
    }
}