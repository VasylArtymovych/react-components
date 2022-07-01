import React, {Component} from "react";
import { AppBar } from "../AppBar";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { ProductReviewForm } from "../ProductReviewForm";
import { LoginForm } from "../RegisterForm/LoginForm";
import { Todos } from "../Todos/Todos";
// import { ContactBook } from "../ContactBook";
// import { RegisterForm } from "../RegisterForm/RegisterForm";





class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  } 

  render(){
    const {showModal} = this.state;
    return (
      <div>
        <AppBar onToggleModal={this.toggleModal}/>
        {showModal && <Modal onToggleModal={this.toggleModal}>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt, omnis, vel optio amet earum molestiae quo nobis pariatur unde, sed odit delectus ab similique architecto. Est nemo reiciendis in repellendus pariatur atque.</div>
          <button type='button' onClick={this.toggleModal}>X</button>
          </Modal>}
        <Todos />
        <LoginForm />
        {/* <ProductReviewForm /> */}
        
        {/* <ContactBook /> */}
        {/* <RegisterForm /> */}
      </div>
    )
  }
}


export default App;