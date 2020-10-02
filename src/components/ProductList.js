import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { phones } from '../data/data'
import { accessoriesProducts } from '../data/accessories';
import { kidsProducts } from '../data/kids';
import { beautyProducts } from '../data/beauty';
import { houseProducts } from '../data/house'
import { jewelryProducts } from '../data/jewelry';
import { menProducts } from '../data/men';
import { shoeProducts } from '../data/shoes';
import { womenProducts} from '../data/women';
import { ProductConsumer } from '../context'

class ProductList extends Component {
  state = {
    phones: phones,
    accessories: accessoriesProducts,
    kids: kidsProducts,
    beauty: beautyProducts,
    jewelry: jewelryProducts,
    men: menProducts,
    shoes: shoeProducts,
    women: womenProducts,
    house: houseProducts
  };

  render(){
    let tit;
    if(this.props.cat === 'phones'){
      tit = 'Mobile Phone'
    } else if(this.props.cat === 'beauty'){
      tit = 'Beauty'
    } else if(this.props.cat === 'kids'){
      tit = 'Kids'
    } else if(this.props.cat === 'accessories'){
      tit = 'Fashion'
    } else if(this.props.cat === 'jewelry'){
      tit = 'Jewelry'
    } else if(this.props.cat === 'men'){
      tit = 'Men'
    } else if(this.props.cat === 'shoes'){
      tit = 'Shoes'
    } else if(this.props.cat === 'women'){
      tit = 'Women'
    } else if(this.props.cat === 'house'){
      tit = 'Household'
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
                      return value.phones.map(product => {
                        return <Product key={product.id}
                        product={product} />
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
                    } else if (this.props.cat === 'accessories'){
                      return value.accessories.map(product => {
                        return <Product key={product.id}
                        product={product} />
                      })
                    } else if (this.props.cat === 'jewelry'){
                      return value.jewelry.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (this.props.cat === 'men'){
                      return value.men.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (this.props.cat === 'women'){
                      return value.women.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (this.props.cat === 'shoes'){
                      return value.shoes.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (this.props.cat === 'house'){
                      return value.house.map(product => {
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
