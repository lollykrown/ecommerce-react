import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import MyCarousel from "./MyCarousel";
import ItemList from "./ItemList";
import Frame from "./Frame";
import TextFrame from "./TextFrame";

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid my-3 custom-padd">
        {/* <ProductConsumer> */}
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-10 col-lg-8 order-md-1 order-lg-2">
                <MyCarousel />
              </div>
              <div className="col-lg-2 custom-bg">
                <ItemList />
              </div>
              <div className="col-lg-2 custom-bg order-sm-3 order-lg-3">
                <div className="card my-2">
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                </div>
                <div className="card my-2">
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                </div>
                <div className="card my-2">
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-3">
              <div className="col-6 col-lg-3 pl-0 pr-2 ">
                <div className="card bg-primary">
                  <div className="card-body">
                    This is some text within a card.
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 pr-2">
                <div className="card bg-warning">
                  <div className="card-body">
                    This is some text within a card.
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 pr-2">
                <div className="card bg-info">
                  <div className="card-body">
                    This is some text within a card.
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 pr-0">
                <div className="card  bg-danger">
                  <div className="card-body">
                    This is some text within a card.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame className="mx-xs-0 mx-lg-4 px-lg-4" />
        <Frame className="mx-xs-0 mx-lg-4 px-lg-4" />
        <Frame className="mx-xs-0 mx-lg-4 px-lg-4" />
        <TextFrame className="mx-xs-0 mx-lg-4 px-lg-4" />

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
