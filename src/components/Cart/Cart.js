import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="row mx-5 my-2 pl-3">
                    <h4 className="text-capitalize text col-9 pl-4 mt-2 ">
                      Your  <strong className="text-blue">Cart</strong>
                    </h4>
                    <span className="sp"></span>
                  </div>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
