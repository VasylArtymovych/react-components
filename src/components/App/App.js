import React, {Component} from "react";
import { AppBar } from "../AppBar/";
import { ContactBook } from "../ContactBook";
// import { RegisterForm } from "../RegisterForm/RegisterForm";





class App extends Component {

  render(){
    return (
      <div>
        <AppBar/>
        <ContactBook />
        {/* <RegisterForm /> */}
      </div>
    )
  }
}


export default App;