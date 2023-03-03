
import './App.css';
import BasicExample from './Test/BasicExample';
import Header from './Components/Header/Header'
import React, { useState } from 'react';
import Introduction from './Components/Body/Introduction';
import FoodMenu from './Components/Body/FoodMenu';

function App() {
  const [orderList, setOrderList] = useState([]);

  const addAnItem = itemDetails =>{

  }
  return (
    <React.StrictMode>
      <Header/>
      <Introduction/>
      <FoodMenu/>
    </React.StrictMode>
  );
}

export default App;
