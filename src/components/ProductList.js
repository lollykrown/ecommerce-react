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

  console.log(state)

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

    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name={tit} title="products" />

              <div className="row">
                  {state => {
                    if(props.cat === 'phones'){
                      return state.products.map(product => {
                        return <Product key={product.id}
                        product={product} />
                      })
                    } else if (props.cat === 'beauty'){
                      return state.beauty.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (props.cat === 'kids'){
                      return state.kids.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (props.cat === 'accessories'){
                      return state.accessories.map(product => {
                        return <Product key={product.id}
                        product={product} />
                      })
                    } else if (props.cat === 'jewelry'){
                      return state.jewelry.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (props.cat === 'men'){
                      return state.men.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (props.cat === 'women'){
                      return state.women.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (props.cat === 'shoes'){
                      return state.shoes.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    } else if (props.cat === 'house'){
                      return state.house.map(product => {
                        return <Product key={product.id}
                        product={product}/>
                      })
                    }
                  }}
              </div>
            </div>

          </div>
        </React.Fragment>
    )
}
