
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,originals,comedy,horror,romance} from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix originals"/>
      <RowPost  url={action} title="Action" isSmall/>
      <RowPost  url={romance} title="Romance" isSmall/>
      <RowPost  url={comedy} title="Comedy" isSmall/>
      <RowPost  url={horror} title="Horror" isSmall/>
      
    </div>
  );
}

export default App;
