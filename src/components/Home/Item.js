import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Item({item}) {
    // const { id, title, img, price, total, count } = item;
    // const { increment, decrement, removeItem, handleDetail } = value
    
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  return (
      <div className="row my-3 text-capitalize dropdown" title="Dropdown" 
      id="collapsible-nav-dropdown" show={show} onMouseEnter={showDropdown} 
      onMouseLeave={hideDropdown}>
        <Link to="/details" className="black titl">
          <i className={item.icon}></i>
          <span className="ml-3">{item.name} </span>
        </Link>
      </div>
  );
}
