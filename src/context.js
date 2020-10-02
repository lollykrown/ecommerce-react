import React, { Component } from "react";
import { phones, detailProduct } from "./data/data";
import { accessoriesProducts } from "./data/accessories";
import { kidsProducts } from "./data/kids";
import { beautyProducts } from "./data/beauty";
import { jewelryProducts } from "./data/jewelry";
import { menProducts } from "./data/men";
import { womenProducts } from "./data/women";
import { shoeProducts} from './data/shoes';
import { houseProducts} from './data/house';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    phones: [],
    accessories:[],
    kids:[],
    beauty:[],
    jewelry:[],
    men:[],
    women:[],
    shoes: [],
    household: [],
    detailProduct,
    cart: [],
    totalItems:0,
    modalOpen: false,
    modalProduct:detailProduct,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempPhones = [];
    let tempAccessories = [];
    let tempKids = [];
    let tempBeauty =[];
    let tempJewelries = [];
    let tempMen = [];
    let tempWomen = [];
    let tempShoes = [];
    let tempHouse = [];


    phones.forEach((item) => {
      const singleItem = { ...item };
      tempPhones = [...tempPhones, singleItem];
    });
    accessoriesProducts.forEach((item) => {
      const singleItem = { ...item };
      tempAccessories = [...tempAccessories, singleItem];
    });
    kidsProducts.forEach((item) => {
      const singleItem = { ...item };
      tempKids = [...tempKids, singleItem];
    });
    beautyProducts.forEach((item) => {
      const singleItem = { ...item };
      tempBeauty = [...tempBeauty, singleItem];
    });
    jewelryProducts.forEach((item) => {
      const singleItem = { ...item };
      tempJewelries = [...tempJewelries, singleItem];
    });
    menProducts.forEach((item) => {
      const singleItem = { ...item };
      tempMen = [...tempMen, singleItem];
    });
    womenProducts.forEach((item) => {
      const singleItem = { ...item };
      tempWomen = [...tempWomen, singleItem];
    });
    shoeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempShoes = [...tempShoes, singleItem];
    });
    houseProducts.forEach((item) => {
      const singleItem = { ...item };
      tempHouse = [...tempHouse, singleItem];
    });
    this.setState(() => {
      return { 
        phones: tempPhones, 
        accessories: tempAccessories,
        kids: tempKids,
        beauty: tempBeauty,
        jewelry: tempJewelries,
        men: tempMen,
        women: tempWomen,
        shoes: tempShoes,
        household: tempHouse
       };
    });
  };

  
  getItem = (category, id) => {
    let product;
    if(category) {
      const cat = this.state[category]
      product = cat.find((item) => item.id === id);
      return product;    
    }
    product = this.state.phones.find((item) => item.id === id);
    return product;    
  };

  // getIt = (id) => {
  //     const product = this.state.products.find((item) => item.id === id);
  //     return product;    }
  // }

  handleDetail = (category, id) => {
    const product = this.getItem(category, id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addTotals = () => {
    let subTotal = 0;
    let totalItems = 0
    this.state.cart.map(item => (subTotal+= item.total));
    this.state.cart.map(item => (totalItems +=  item.count))
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = subTotal + tax;
    const total = parseFloat(tempTotal.toFixed(2));
    const subT = parseFloat(subTotal.toFixed(2));

    this.setState(()=> {
      return {
        cartSubtotal: subT,
        cartTax: tax,
        cartTotal:total,
        totalItems
      }
    })
  }
  addToCart = (cat, id) => {
    const prod = this.state[cat]
    let tempProducts = [...prod];
    const index = tempProducts.indexOf(this.getItem(cat, id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { 
          prod: tempProducts, 
          cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (cat, id) => {
    const product = this.getItem(cat, id);
    this.setState(()=> {
      return {modalProduct:product, modalOpen: true}
    })
  }

  closeModal = () => {
    this.setState(()=> {
      return {modalOpen: false}
    })
  }

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    const t = product.count * product.price   
    product.total = parseFloat(t.toFixed(2)); 

    this.setState(()=> {
      return {
        cart:[...tempCart],
      }
    },
    ()=>{
      this.addTotals()
    })

  }

  decrement = (cat,id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;

    if(product.count === 0){
      this.removeItem(cat, id)
    }else {
      const t = product.count * product.price   
      product.total = parseFloat(t.toFixed(2)); 

    this.setState(()=> {
      return {
        cart:[...tempCart],
      }
    },
    ()=>{
      this.addTotals()
    })
  }
  }

  removeItem = (cat, id) => {
    const prod = this.state[cat]
    let tempProducts = [...prod];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id)
    const index = tempProducts.indexOf(this.getItem(cat, id));
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { 
          prod: [...tempProducts],
          cart:[...tempCart]
        };
      },
    ()=>{
      this.addTotals()
    })
  }

  clearCart = () => {
    this.setState(()=> {
      return {cart:[]}
    },
    ()=> {
      this.setProducts();
      this.addTotals()
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal:this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
