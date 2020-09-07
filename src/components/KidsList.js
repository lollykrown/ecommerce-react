import React, { Component } from 'react';
import Kid from './Kid';
import Title from './Title';
import { phones } from '../data/data'
import {accessoriesProducts} from '../data/accessories';
import {kidsProducts} from '../data/kids';

import { ProductConsumer } from '../context'


class KidsList extends Component {
  state = {
    products: phones,
    accessories: accessoriesProducts,
    kids: kidsProducts
  };
  render(){

    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.kids.map(kid => {
                      return <Kid key={kid.id}
                      kid={kid}/>
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

export default KidsList;
