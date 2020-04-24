import React,{Component} from 'react';
import Header from './common/Header';
import './common/common.css';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component{
  // constructor()
  // {
  //   super();
  //   this.state={
  //     subscribersListToShow:[] 
  //   }
  //     console.log("constructor called");
  // }

  // componentDidMount()
  // {
  //   let newSubscriber={id:0,name:"namita",number:"8888888888"};
  //   let subscribersList=this.state.subscribersListToShow;
  //   subscribersList.push(newSubscriber);
  //   this.setState({subscribersListToShow:subscribersList});
  //   console.log("componentDidMount called");
  // }
  render()
  {
    console.log("render called")

  return (
    <div>
      <Header heading="Phone Directory"/>
     <div className="component-body-container">
         <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.props.subscribersList.map(subscriber =>{ return <div key={subscriber.id}className="grid-container">
            <span className="grid-item">{subscriber.name}</span>
            <span className="grid-item">{subscriber.phone}</span>
            <button className="custom-btn delete-btn">Delete</button>
          </div>})}
          
          </div>
    </div>
 );}
}

export default ShowSubscribers;
