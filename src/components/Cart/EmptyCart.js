import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function CartColumns() {
  return (
    <div className="container-fluid my-5 py-4 ">
      <div className="row my-4 py-4">
        <div className="col-10 col-lg-4 card mx-auto text-center text-tile">
          <div className="my-4">
              <i className="fas fa-shopping-cart"></i>
            </div>
          <h1 className="h3">Your cart is currently empty</h1>
          <p className="empty">You haven't added any item to your cart</p>
          <Link to='/' class="my-4">
            <ButtonContainer>start shopping</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
