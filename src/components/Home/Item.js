import React from "react";
import { Link } from "react-router-dom";
import ItemSublist from "./ItemSublist";

export default function Item({ item }) {
 const subcategory = item.subcategories;
 console.log('o',subcategory)

  return (
    <div
      className="row my-1 py-1 text-capitalize dropdown">
      <Link className="black titl">
        <i className={item.icon}></i>
        <span className="ml-3">{item.name} </span>
      </Link>
      <div className="dropdown-content">
        <p className="drop-title">{item.name}</p>
        <div className="line"></div>
        {subcategory.map((item, index) => {
            return <ItemSublist key={index} subcategory={item} />
        })}
      </div>
    </div>
  );
}
