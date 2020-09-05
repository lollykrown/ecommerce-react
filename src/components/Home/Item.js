import React from "react";
import { Link } from "react-router-dom";

export default function Item({name}) {
    // const { id, title, img, price, total, count } = item;
    // const { increment, decrement, removeItem, handleDetail } = value
  return (
      <div className="row my-2 text-capitalize">
        <div className="">
        <Link to="/details">
          <img className="img-fluid" src={'img'} />
          <span className="">{name} </span>
        </Link>
        </div>
      </div>
  );
}
