import React,{Component} from 'react';
import Header from './Header.js';
import './AddSubscribers.css'

class AddSubscriber extends Component{
    render()
    { return (
        <div>
            <Header heading="Add Subscriber"/>
            <div className="component-body-container">
            <button className="custom-btn">Back</button>
            <form className="subscribers-form">
                <label htmlFor="name" className="label-control">Name:</label><br/>
                <input type="text" name="name" id="name" className="input-control"/><br/><br/>
                <label htmlFor="phone"className="label-control" >Phone:</label><br/>
                <input type="number" name="phone" id="phone" className="input-control"/><br/><br/>
                <div className="subscribers-info-container">
                    <span className="subscribers-to-add-heading">Subscribers to be added:</span><br/>
                    <span className="subscribers-info">Name:</span><br/>
                    <span className="subscribers-info">Phone:</span>
                </div>
                <button type="submit" className="custom-btn add-btn">Add</button>
            </form>
            </div>
            </div>);
    }
}
export default AddSubscriber;