import React, { Component } from 'react';
// import Product from './Product';
import Accessories from './Accessories';
import Title from './Title';
import { phones } from '../data/data'
import {accessoriesProducts} from '../data/accessories';

import { ProductConsumer } from '../context'


class ProductList extends Component {
  state = {
    products: phones,
    accessories: accessoriesProducts
  };
  render(){

    const na = this.state.accessories[0].category;
    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name={na} title="products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.accessories.map(accessory => {
                      return <Accessories key={accessory.id}
                      accessory={accessory}/>
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
