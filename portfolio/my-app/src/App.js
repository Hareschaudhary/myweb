import './App.css';
import UsecontaxtProvider from './store/UsecontaxtProvider';
import Nav from "./compo/Nav"
import CardOne from './compo/CardOne';


function App() {
  return (
  <UsecontaxtProvider>
    <Nav/>
    <CardOne/>
  </UsecontaxtProvider>
  );
}

export default App;
