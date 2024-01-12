import React from 'react';
import './App.css';
import { FooterComponent, RouterComponent } from './core/components';


function App() {
  return (
    <div className='productive-crud'>
      <RouterComponent></RouterComponent>
      <FooterComponent />
    </div>

  );
}

export default App;
