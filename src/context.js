import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data'



const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
      products: storeProducts,
      detailProduct
  }
  handleDetail = () => {
      console.log('hello from detail')
  }

  addTocart = () => {
    console.log('hello from add to cart')
}

  render(){
    return (
      <ProductContext.Provider value={{ 
          ...this.state,
          handleDetail: this.handleDetail,
          addTocart: this.addTocart
          }}>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer}