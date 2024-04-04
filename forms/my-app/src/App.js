import logo from './logo.svg';
import './App.css';
import First from './compo/pages/First'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Two from './compo/pages/two/Two';
import Three from './compo/pages/three/Three'
import Four from './compo/pages/four/Four';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={  <First/>}/>
        <Route path='/two' element={  <Two/>}/>
        <Route path='/three' element={  <Three/>}/>
        <Route path='/four' element={  <Four/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
