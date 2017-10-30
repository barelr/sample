import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Table from './Table.js';
import Header from './Header.js';
import TestComponent  from './Search.js';

var tableData=[
  {
      name:'A2D Funding II Plc'
     
  },
  {
      name:'A2D Funding Plc'
  },
  {
    name:'APQ Global Limited'
  },
  {
      name:'AmicusHorizon Finance plc'
  }];
  

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <br/>
        Today is: {Date().toString()}
        
      <br/>
          <Table />
           <br/>
      
<br/>
        </div>
     
    );
  }
}

export default App;