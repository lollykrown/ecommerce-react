import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import MyCarousel from "./MyCarousel";
import ControlledCarousel from "./ControlledCarousel";


export default class Home extends Component {
  render() {
    return (
      <section>
        {/* <ProductConsumer> */}
          <ControlledCarousel/>
          {/* {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }} */}
        {/* </ProductConsumer> */}
      </section>
    );
  }
}
