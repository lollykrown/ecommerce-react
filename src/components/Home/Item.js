import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  // const { id, title, img, price, total, count } = item;
  // const { increment, decrement, removeItem, handleDetail } = value

  // const [open, setOpen] = useState(false);
  // const showDropdown = (e) => {
  //   setOpen(!open);
  // };
  // const hideDropdown = (e) => {
  //   setOpen(false);
  // };
  return (
    <div
      className="row my-1 py-1 text-capitalize dropdown"
      id="collapsible-nav-dropdown"
      // show={show}
      // onMouseEnter={showDropdown}
      // onMouseLeave={hideDropdown}
    >
      <Link to="/details" className="black titl">
        <i className={item.icon}></i>
        <span className="ml-3">{item.name} </span>
      </Link>
      <div className="dropdown-content">
        <a className="dropdown-item d-none" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}
