import React from "react";

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value
  return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img className="img-fluid" alt="product" src={img} style={{width:'5rem', height:'5rem' }} />
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price: </span>
            {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
            <div className="">
                <botton class="btn btn-black mx-1" onClick={()=>decrement(id)}>
                    
                </botton>
            </div>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span>
            {title}
        </div>
      </div>
  );
}
