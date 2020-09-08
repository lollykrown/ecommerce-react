import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { phones } from '../data/data'
import {accessoriesProducts} from '../data/accessories';
import {kidsProducts} from '../data/kids';
import {beautyProducts} from '../data/beauty';
import { ProductConsumer } from '../context'


class ProductList extends Component {
  state = {
    products: phones,
    accessories: accessoriesProducts,
    kids: kidsProducts,
    beauty: beautyProducts
  };

  render(){
    let tit;
    if(this.props.cat === 'phones'){
      tit = 'Mobile Phone'
    } else if(this.props.cat === 'beauty'){
      tit = 'Beauty'
    } else if(this.props.cat === 'kids'){
      tit = 'Kids'
    } else if(this.props.cat === 'fashion'){
      tit = 'Fashion'
    }

    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name={tit} title="products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    if(this.props.cat === 'phones'){
                      return value.products.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (this.props.cat === 'beauty'){
                      return value.beauty.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (this.props.cat === 'kids'){
                      return value.kids.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    }else if (this.props.cat === 'fashion'){
                      return value.accessories.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    }
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
