import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  let subscribers=[
    {
      name:'namita',number:9591480652,id:1
    },
    {
      name:'saanvi',number:8765432348,id:2
    }
  ]
  return (
    <div>
      <Header />
     <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {subscribers.map(subscriber =>{ return <div key={subscriber.id}className="grid-container">
            <span className="grid-item">{subscriber.name}</span>
            <span className="grid-item">{subscriber.number}</span>
            <button className="custom-btn delete-btn">Delete</button>
          </div>})}
          
          </div>
    </div>
 );
}

export default App;
