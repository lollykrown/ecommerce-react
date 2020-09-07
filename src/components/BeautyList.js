import React, { Component } from 'react';
import Beauty from './Beauty';
import Title from './Title';
import { phones } from '../data/data'
import {accessoriesProducts} from '../data/accessories';
import {kidsProducts} from '../data/kids';
import {beautyProducts} from '../data/beauty';

import { ProductConsumer } from '../context'


class BeautyList extends Component {
  state = {
    products: phones,
    accessories: accessoriesProducts,
    kids: kidsProducts,
    beauty: beautyProducts
  };
  render(){

    const na = this.state.beauty[0].category;
    console.log(this.state.beauty[0]);

    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name={na} title="products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.beauty.map(b => {
                      return <Beauty key={b.id}
                      b={b}/>
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

export default BeautyList;
