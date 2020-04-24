import React,{Component} from 'react';
import AddSubscriber from'./AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class PhoneDirectory extends Component
{
    constructor()
    {
        super();
        this.state={
            subscribersList:[
                {
                  name:'namita',phone:9591480652,id:1
                },
                {
                  name:'saanvi',phone:8765432348,id:2
                }]
        }
    }

    addSubscriber=(newSubscriber)=>
    {
      let subscribersList=this.state.subscribersList;
      if(subscribersList.length>0)
      {
          newSubscriber.id=subscribersList[subscribersList.length-1].id + 1;
      }
      else
      {
          newSubscriber.id=1;
      }
     subscribersList.push(newSubscriber);
     this.setState({subscribersList:subscribersList});
    }
    render()
    {
        return(
        <Router>
            <div className="main-container">
            <Route exact path="/" render={(props)=><ShowSubscribers {...props} subscribersList={this.state.subscribersList}/>}/>

            <Route exact path="/add" render={({history},props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriber}/>}/>
            </div>
            </Router>);
    }
}
export default PhoneDirectory;