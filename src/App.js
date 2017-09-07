import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'material-components-web/dist/material-components-web.min.css';
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

//import * as actions from '../redux/actions/index'
import Textfield from './components/Textfield'
import TestForm from './components/TestForm'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        description: ''
    }

    
  }

  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          test react-mdc-web
        </p>

        <Textfield
                    floatingLabel="Nombre"
                    value={this.state.name}
                    onChange={({ target: { value: name } }) => {
                        this.setState({ name })
                    }}
                />

                <TestForm onSubmit={this.submit}/>

      </div>
    );
  }
}

export default connect()(App);
