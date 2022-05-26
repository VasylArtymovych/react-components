import PaintingList from "./components/PaintingList/PaintingList";
import paintings from './painting.json';
import Section from "./components/Section/Section";

function App(){
  return (
  <div>
    <Section title="Cards">
      <PaintingList items={paintings}/>
    </Section>
  </div>
  )
}


export default App;