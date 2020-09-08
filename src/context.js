import React, { Component } from "react";
import { phones, detailProduct } from "./data/data";
import { accessoriesProducts } from "./data/accessories";
import { kidsProducts } from "./data/kids";
import { beautyProducts } from "./data/beauty";
import { jewelryProducts } from "./data/jewelry";
import { menProducts } from "./data/men";
import { womenProducts } from "./data/women";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    accessories:[],
    kids:[],
    beauty:[],
    jewelry:[],
    men:[],
    women:[],
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
    let tempProducts = [];
    let tempAccessories = [];
    let tempKids = [];
    let tempBeauty =[];
    let tempJewelries = [];
    let tempMen = [];
    let tempWomen = [];


    phones.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
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
    this.setState(() => {
      return { 
        products: tempProducts, 
        accessories: tempAccessories,
        kids: tempKids,
        beauty: tempBeauty,
        jewelry: tempJewelries,
        men: tempMen,
        women: tempWomen
       };
    });
  };

  getItem = (id) => {
    let product;
    // if (category === 'kids'){
    // product = this.state.kids.find((item) => item.id === id);
    // }
    product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (category, id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(category, id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { category: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
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
    product.total = product.count * product.price   

    this.setState(()=> {
      return {
        cart:[...tempCart],
      }
    },
    ()=>{
      this.addTotals()
    })

  }

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;

    if(product.count === 0){
      this.removeItem(id)
    }else {
      product.total = product.count * product.price;
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

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id)
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(()=> {
      return {
        cart:[...tempCart],
        products: [...tempProducts]
      }
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

  addTotals = () => {
    let subTotal = 0;
    let totalItems = 0
    this.state.cart.map(item => (subTotal+= item.total));
    this.state.cart.map(item => (totalItems +=  item.count))
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=> {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal:total,
        totalItems
      }
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
