import React, { Component } from 'react';
// import logo from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SuperForm from '../form';

class App extends Component {
  usernameHandler = (ev) => {
    console.log('change: username', ev.target);
  }
  passwordHandler = (ev) => {
    console.log('change: password', ev.target);
  }
  render() {
    const controlValidators = {
      'username': [
        {type: 'required', validator: (val)=>{return !!val;}}
      ],
      'password': [
        {type: 'required', validator: (val)=>{return !!val;}}
      ]
    }
    const controlHandlers = {
      'username': [
        (ev) => {console.log('username handler', ev.target);}
      ],
      'password': [
        (ev) => {console.log('password handler', ev.target);}
      ]
    }
    return (
      <div className="App">
        <SuperForm validators={controlValidators} handlers={controlHandlers} className="patito">
          <div className="form-group">
            <label> Username
              <input
                className="form-control"
                name="username"
              />
            </label>
          </div>
          <div className="form-group">
            <label> Password
              <input
                className="form-control"
                name="password"
              />
            </label>
          </div>
          <button className="btn btn-primary">Submit</button>
        </SuperForm>
      </div>
    );
  }
}

export default App;
