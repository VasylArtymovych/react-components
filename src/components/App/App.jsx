import React, {Component} from "react";
import { AppBar } from "../AppBar";
import { ProductReviewForm } from "../ProductReviewForm";
import { LoginForm } from "../RegisterForm/LoginForm";
import { Todos } from "../Todos/Todos";
// import { ContactBook } from "../ContactBook";
// import { RegisterForm } from "../RegisterForm/RegisterForm";





class App extends Component {

  render(){
    return (
      <div>
        <AppBar/>
        <Todos />
        <LoginForm />
        <ProductReviewForm />
        {/* <ContactBook /> */}
        {/* <RegisterForm /> */}
      </div>
    )
  }
}


export default App;