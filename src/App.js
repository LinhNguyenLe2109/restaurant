
import './App.css';
import BasicExample from './Test/BasicExample';
import Header from './Components/Header/Header'
import React from 'react';
import Introduction from './Components/Body/Introduction';
import FoodList from './Components/Body/FoodList';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Introduction/>
      <FoodList/>
    </React.StrictMode>
  );
}

export default App;
