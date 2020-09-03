import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data'
import { ProductConsumer } from '../context'


class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render(){

    console.log(this.state.products)
    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map((p)=> {
                      return <Product key={p.id}>
                        {p}
                        </Product>
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>

          </div>
        </React.Fragment>
    );
  }
}

export default ProductList;
