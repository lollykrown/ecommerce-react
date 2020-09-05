import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import MyCarousel from "./MyCarousel";
import ControlledCarousel from "./ControlledCarousel";


export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid">
        {/* <ProductConsumer> */}
        <div className="custom-padd">
        <div className="row">
          <div className="col-10 col-lg-8 order-md-1 order-lg-2">
            <MyCarousel/>
          </div>
          <div className="col-lg-2 custom-bg">
            <h1>left side bar</h1>
          </div>
          <div className="col-lg-2 custom-bg order-sm-3 order-lg-3">
            <h1>Right side bar</h1>
          </div>
        </div>
        </div>
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
