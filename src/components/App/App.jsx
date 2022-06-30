import React, {Component} from "react";
import { AppBar } from "../AppBar";
import { Todos } from "../Todos/Todos";
// import { ContactBook } from "../ContactBook";
// import { RegisterForm } from "../RegisterForm/RegisterForm";





class App extends Component {

  render(){
    return (
      <div>
        <AppBar/>
        <Todos />
        {/* <ContactBook /> */}
        {/* <RegisterForm /> */}
      </div>
    )
  }
}


export default App;