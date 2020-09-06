import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const items = [
    {id:1, icon:'fas fa-shopping-basket',name:'supermarket'},
    {id:2, icon:'fas fa-medkit',  name:'health & beauty'},
    {id:3, icon:'fas fa-home', name:'home & office'},
    {id:4, icon:'fas fa-mobile', name:'phones & tablets'},
    {id:5, icon:'fas fa-laptop', name:'computing'},
    {id:6, icon:'fas fa-tablet', name:'electronics'},
    {id:7, icon:'fas fa-tshirt', name:'fashion'},
    {id:8, icon:'fas fa-child', name:'baby products'},
    {id:9, icon:'fas fa-gamepad', name:'gaming'},
    {id:10,icon:'fas fa-futbol', name:'sporting goods'},
    {id:11,icon:'fas fa-car', name:'automobile'},
    {id:12,icon:'fas fa-dot-circle', name:'other'}
  ];
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
        <p className="drop-title">{item.name}</p>
        <div className="line"></div>
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
