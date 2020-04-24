import React,{Component} from 'react';
import AddSubscriber from'./AddSubscriber';
import ShowSubscribers from './ShowSubscribers';



   class PhoneDirectory extends Component
{
    constructor()
    {
        super();
        this.state={
            subscribersList:[
                {
                  name:'namita',number:9591480652,id:1
                },
                {
                  name:'saanvi',number:8765432348,id:2
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
     console.log(this.state.subscribersList);
    }
    render()
    {
        return(<div>
            {/* <AddSubscriber addSubscriberHandler={this.addSubscriber}/> */}
            <ShowSubscribers subscribersList={this.state.subscribersList}/>
            </div>);
    }
}
export default PhoneDirectory;