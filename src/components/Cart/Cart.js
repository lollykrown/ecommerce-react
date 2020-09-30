import React, { useContext } from "react";
import CartList from "./CartList";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";

import { ProductContext } from "../../context";

export default function Cart(props) {

  const { cart } = useContext(ProductContext)

    return (
      <section>
            {cart.length > 0 ?
              (
                <React.Fragment>
                  <div className="row mx-5 my-2 pl-3">
                    <h4 className="text-capitalize text col-9 pl-4 mt-2 ">
                      Your  <strong className="text-blue">Cart</strong>
                    </h4>
                    <span className="sp"></span>
                  </div>
                  <CartColumns />
                  <CartList cart={cart} />
                  <CartTotal history={props.history} />
                </React.Fragment>
              ): <EmptyCart />
            }
      </section>
    );
}
