import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function CartColumns() {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row">
        <div className="col-10 mx-auto text-center text-tile">
          <h1 className="text-uppercase">Your cart is currently empty</h1>
          <Link to='/products'>
            <ButtonContainer>start shopping</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
