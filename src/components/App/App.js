import React, {Component} from "react";
import styled from 'styled-components';
import { AppBar } from "../AppBar/";
import { RegisterForm } from "../RegisterForm/RegisterForm";





class App extends Component {

  render(){
    return (
      <div>
        <AppBar/>

        <RegisterForm />
        
      </div>
    )
  }
}


export default App;