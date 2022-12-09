
import './App.css';
import BasicExample from './Test/BasicExample';
import Header from './Components/Header/Header'
import React from 'react';
import Introduction from './Components/Body/Introduction';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Introduction/>
    </React.StrictMode>
  );
}

export default App;
