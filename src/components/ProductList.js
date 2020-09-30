import React, { useState, useEffect, useContext } from 'react';
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

import { ProductContext } from "../context";

export default function ProductList(props) {

  let tit;
  if(props.cat === 'phones'){
    tit = 'Mobile Phone'
  } else if(props.cat === 'beauty'){
    tit = 'Beauty'
  } else if(props.cat === 'kids'){
    tit = 'Kids'
  } else if(props.cat === 'accessories'){
    tit = 'Fashion'
  } else if(props.cat === 'jewelry'){
    tit = 'Jewelry'
  } else if(props.cat === 'men'){
    tit = 'Men'
  } else if(props.cat === 'shoes'){
    tit = 'Shoes'
  } else if(props.cat === 'women'){
    tit = 'Women'
  } else if(props.cat === 'house'){
    tit = 'Household'
  }

  const { state, setProducts } = useContext(ProductContext)

  useEffect(() =>{
    setProducts(
      phones,
      accessoriesProducts,
      kidsProducts,
      beautyProducts,
      jewelryProducts,
      menProducts,
      womenProducts,
      shoeProducts,
      houseProducts
    );
  },[])

    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name={tit} title="products" />

              <div className="row">
                  {
                  props.cat === 'phones' ?
                       state.phones.map(product => {
                        return <Product key={product.id}
                        product={product} />
                    }): props.cat === 'accessories' ?
                       state.accessories.map(product => {
                        return <Product key={product.id}
                        product={product} />
                      }): props.cat === 'kids' ?
                      state.kids.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      }): props.cat === 'beauty' ?
                      state.beauty.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      }): props.cat === 'jewelry' ?
                      state.jewelry.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      }): props.cat === 'men' ?
                      state.men.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      }): props.cat === 'women' ?
                      state.women.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      }): props.cat === 'shoes' ?
                      state.shoes.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      }): state.house.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    }
                    

              </div>
            </div>

          </div>
        </React.Fragment>
    )
}
