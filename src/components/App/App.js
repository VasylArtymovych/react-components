import React, {Component} from "react";
import styled from 'styled-components';
import PaintingList from "../PaintingList";
import paintings from '../../painting.json';
import Section from "../Section";
import TodoList from '../TodoList';
import Form from '../Form';
import Title from '../Title';
import FlexContainer from "../FlexContainer";

const AppWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;

  @media ${props => props.theme.media.phone} {
    background: ${props => props.theme.background.primary};
  };
  @media ${props => props.theme.media.tablet} {
    background: ${props => props.theme.background.secondary};
  };
  @media ${props => props.theme.media.desktop} {
    background: ${props => props.theme.background.secondary};
  };
`;

class App extends Component {

  render(){
    return (
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
    )
  }
}


export default App;