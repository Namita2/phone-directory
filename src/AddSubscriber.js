import React,{Component} from 'react';
import Header from './common/Header.js';
import './AddSubscribers.css'

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={id:0,
        name:"",
      phone:""
      }
    }

    inputChangeHandler=(e)=>
    {
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }
    onFormSubmitted=(e)=>
    {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0, name:" ",phone:" "});
    }
    render()
    { 
        const{name,phone}=this.state;
        return (
        <div>
            <Header heading="Add Subscriber"/>
            <div className="component-body-container">
            <button className="custom-btn">Back</button>
            <form className="subscribers-form" onSubmit={this.onFormSubmitted.bind(this)}>
                <label htmlFor="name" className="label-control">Name:</label><br/>
                <input type="text" name="name" id="name" className="input-control" onChange={this.inputChangeHandler}/><br/><br/>
                <label htmlFor="phone"className="label-control" >Phone:</label><br/>
                <input type="text" name="phone" id="phone" className="input-control" onChange={this.inputChangeHandler}/><br/><br/>
                <div className="subscribers-info-container">
                    <span className="subscribers-to-add-heading">Subscribers to be added:</span><br/>
                    <span className="subscribers-info">Name:{name}</span><br/>
                    <span className="subscribers-info">Phone:{phone}</span>
                </div>
                <button type="submit" className="custom-btn add-btn">Add</button>
            </form>
            </div>
            </div>);
    }
}
export default AddSubscriber;