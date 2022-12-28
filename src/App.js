
import './App.css';
import BasicExample from './Test/BasicExample';
import Header from './Components/Header/Header'
import React from 'react';
import Introduction from './Components/Body/Introduction';
import FoodMenu from './Components/Body/FoodMenu';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Introduction/>
      <FoodMenu/>
    </React.StrictMode>
  );
}

export default App;
