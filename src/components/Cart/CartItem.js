import React, { useContext} from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../context";

export default function CartItem({item}) {
    const { id, name, imgUrls, price, total, count } = item;
    const { increment, decrement, removeItem, handleDetail } = useContext(ProductContext)

  return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2" onClick={()=>handleDetail(id)}>
        <Link to="/details">
          <img className="img-fluid" alt="product" src={imgUrls[0]} style={{width:'5rem', height:'5rem' }} />
        </Link>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span>
            {name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price: </span>
            {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
            <div className="">
                <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                    -
                </span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                    +
                </span>
            </div>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
              <i className="fas fa-trash"></i>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <strong>item total : &#8358; {total}</strong>
        </div>
      </div>
  );
}
