import PaintingList from "../PaintingList";
import paintings from '../../painting.json';
import Section from "../Section";
import s from './App.module.css';

function App(){
  return (
  <div className={s.container}>
    <Section title="Cards">
      <PaintingList items={paintings}/>
    </Section>
  </div>
  )
}


export default App;