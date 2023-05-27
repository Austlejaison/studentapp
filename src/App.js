import React from 'react';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';

const App = () => {
  return (
    <Routes>
      <div>
        <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/add-blog" component={Add} />
      </div>
    </Routes>
  );
};

export default App;
