import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'material-components-web/dist/material-components-web.min.css';
import Textfield from './components/Textfield'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        description: ''
    }
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

      </div>
    );
  }
}

export default App;
