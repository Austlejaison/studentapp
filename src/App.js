import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {
  return (
   
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/p' element={<Add />} />
      </Routes>

    </div>
  );
}

export default App;