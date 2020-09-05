import React from "react";
import { Link } from "react-router-dom";

export default function Item({item}) {
    // const { id, title, img, price, total, count } = item;
    // const { increment, decrement, removeItem, handleDetail } = value
  return (
      <div className="row my-2 text-capitalize">
        <div className="">
        <Link to="/details" className="black titl">
          <i className={item.icon}></i>
          {/* <img className="img-fluid" src={'img'} /> */}
          <span className="ml-3">{item.name} </span>
        </Link>
        </div>
      </div>
  );
}
