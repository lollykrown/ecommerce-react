import React from "react";
import { Link } from "react-router-dom";

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem, handleDetail } = value
  return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2" onClick={()=>handleDetail(id)}>
        <Link to="/details">
          <img className="img-fluid" alt="product" src={img} style={{width:'5rem', height:'5rem' }} />
          <span className="d-lg-none">product: </span>
        </Link>
        </div>
      </div>
  );
}
