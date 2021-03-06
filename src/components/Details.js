import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

class Details extends Component {
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            category,
            company,
            imgUrls,
            info,
            price,
            name,
            inCart,
            url,
            id
          } = value.detailProduct;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{name}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={imgUrls[0]} width="300" className="img-fluid" alt="product"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {company}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: <span>$</span></strong>
                    {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product
                  </p>
                  <p className="text-muted lead">{info || url}</p>
                  <ButtonContainer onClick={this.goBack}>Back to products</ButtonContainer>
                  <ButtonContainer cart disabled={inCart?true:false}
                  onClick={()=> {
                    value.addToCart(category, id);
                    value.openModal(category, id);
                  }}>
                    {inCart?'inCart':'add to cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
