import React from 'react';
import './Header.css';

const Header= function (props)
{
    return(
    <div className="Header">
    
    {props.heading}
  </div>);
}
export default Header;