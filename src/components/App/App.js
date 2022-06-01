import React, {Component} from "react";
import PaintingList from "../PaintingList";
import paintings from '../../painting.json';
import Section from "../Section";
import s from './App.module.css';
// import Todos from '../TodoList/todos.json';
import TodoList from '../TodoList';
import Form from '../Form';

class App extends Component {
  // state = {
  //   todos: Todos, 
  // }

  // deleteTodo = (id) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter(todo => todo.id !== id)
  //   }))
  // }

  render(){
    // const {todos} = this.state;

    return (
      <div className={s.container}>
        <Section title="Cards">
          <PaintingList items={paintings}/>
        </Section>
    
        <TodoList 
        // todos={todos} 
        // onDeleteTodo={this.deleteTodo}
        />

      <Form />
      </div>
    )
  }
}


export default App;