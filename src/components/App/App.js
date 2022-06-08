import React, {Component} from "react";
import styled, {createGlobalStyle} from 'styled-components';
import PaintingList from "../PaintingList";
import paintings from '../../painting.json';
import Section from "../Section";
// import s from './App.module.css';
// import Todos from '../TodoList/todos.json';
import TodoList from '../TodoList';
import Form from '../Form';
import Title from '../Title';
import FlexContainer from "../FlexContainer";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: rgba(174, 167, 171, 0.07);
`;

class App extends Component {

  render(){
    return (
      <>
      <Global/>
      <AppWraper>

        <Section title="Cards">
          <PaintingList items={paintings}/>
        </Section>

        <Title color="blue">Hello world!!!</Title>
        
        <FlexContainer justify='space-around' padding='10px'>
          <TodoList/>
          <Form />
        </FlexContainer>

      
    
      </AppWraper>
      </>
    )
  }
}


export default App;