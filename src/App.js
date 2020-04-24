import React,{Component} from 'react';
import Header from './Header';
import './App.css';
import './common/common.css'

class App extends Component{
  constructor()
  {
    super();
    this.state={
      subscribersListToShow:[] }
  }
  render()
  {
  // let subscribers=[
  //   {
  //     name:'namita',number:9591480652,id:1
  //   },
  //   {
  //     name:'saanvi',number:8765432348,id:2
  //   }]
  
  return (
    <div>
      <Header heading="Phone Directory"/>
     <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.state.subscribersListToShow.map(subscriber =>{ return <div key={subscriber.id}className="grid-container">
            <span className="grid-item">{subscriber.name}</span>
            <span className="grid-item">{subscriber.number}</span>
            <button className="custom-btn delete-btn">Delete</button>
          </div>})}
          
          </div>
    </div>
 );}
}

export default App;
