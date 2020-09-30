import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [state, setState] = useState({
    products: [],
    accessories:[],
    kids:[],
    beauty:[],
    jewelry:[],
    men:[],
    women:[],
    shoes: [],
    house: [],
  })

  const [detailProduct, setDetailProduct] = useState({})
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState(detailProduct)
  const [cartSubtotal, setCartSubtotaln] = useState(0)
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)


  const setProducts = (phones,accessoriesProducts,kidsProducts,beautyProducts,
    jewelryProducts,menProducts,womenProducts,shoeProducts,houseProducts ) => {
    let tempProducts = [];
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
    shoeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempShoes = [...tempShoes, singleItem];
    });
    houseProducts.forEach((item) => {
      const singleItem = { ...item };
      tempHouse = [...tempHouse, singleItem];
    });
    setState({
        products: tempProducts, 
        accessories: tempAccessories,
        kids: tempKids,
        beauty: tempBeauty,
        jewelry: tempJewelries,
        men: tempMen,
        women: tempWomen,
        shoes: tempShoes,
        house: tempHouse
    });
  };

  // const getItem = (category, id) => {
  //   let product;
  //   if(category) {
  //     const cat = this.state[category]
  //     product = cat.find((item) => item.id === id);
  //     return product;
  //   }
  //   product = this.state.products.find((item) => item.id === id);
  //   return product;
    
  // };

  // const handleDetail = (category, id) => {
  //   const product = this.getItem(category, id);
  //   this.setState(() => {
  //     return { detailProduct: product };
  //   });
  // };

  // const addToCart = (category, id) => {
  //   let tempProducts = [...this.state.products];
  //   const index = tempProducts.indexOf(this.getItem(category, id));
  //   const product = tempProducts[index];
  //   product.inCart = true;
  //   product.count = 1;
  //   const price = product.price;
  //   product.total = price;
  //   this.setState(
  //     () => {
  //       return { category: tempProducts, cart: [...this.state.cart, product] };
  //     },
  //     () => {
  //       this.addTotals();
  //     }
  //   );
  // };

  // const openModal = (id) => {
  //   const product = this.getItem(id);
  //   this.setState(()=> {
  //     return {modalProduct:product, modalOpen: true}
  //   })
  // }

  // const closeModal = () => {
  //   this.setState(()=> {
  //     return {modalOpen: false}
  //   })
  // }

  // const increment = id => {
  //   let tempCart = [...this.state.cart];
  //   const selectedProduct = tempCart.find(item => item.id === id);
  //   const index = tempCart.indexOf(selectedProduct);
  //   const product = tempCart[index];
  //   product.count += 1;
  //   product.total = product.count * product.price   

  //   this.setState(()=> {
  //     return {
  //       cart:[...tempCart],
  //     }
  //   },
  //   ()=>{
  //     this.addTotals()
  //   })

  // }

  // const decrement = id => {
  //   let tempCart = [...this.state.cart];
  //   const selectedProduct = tempCart.find(item => item.id === id);
  //   const index = tempCart.indexOf(selectedProduct);
  //   const product = tempCart[index];
  //   product.count -= 1;

  //   if(product.count === 0){
  //     this.removeItem(id)
  //   }else {
  //     product.total = product.count * product.price;
  //   this.setState(()=> {
  //     return {
  //       cart:[...tempCart],
  //     }
  //   },
  //   ()=>{
  //     this.addTotals()
  //   })
  // }
  // }

  // const removeItem = id => {
  //   let tempProducts = [...this.state.products];
  //   let tempCart = [...this.state.cart];

  //   tempCart = tempCart.filter(item => item.id !== id)
  //   const index = tempProducts.indexOf(this.getItem(id));
  //   let removedProduct = tempProducts[index]
  //   removedProduct.inCart = false
  //   removedProduct.count = 0;
  //   removedProduct.total = 0;

  //   this.setState(()=> {
  //     return {
  //       cart:[...tempCart],
  //       products: [...tempProducts]
  //     }
  //   },
  //   ()=>{
  //     this.addTotals()
  //   })
  // }

  // const clearCart = () => {
  //   this.setState(()=> {
  //     return {cart:[]}
  //   },
  //   ()=> {
  //     this.setProducts();
  //     this.addTotals()
  //   })
  // }

  const addTotals = () => {
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

    return (
      <ProductContext.Provider
        value={{
          state,
          setProducts,
          // handleDetail,
          // addToCart,
          // openModal,
          // closeModal,
          // increment,
          // decrement,
          // removeItem,
          // clearCart
        }}
      >
        {props.children}
      </ProductContext.Provider>
    );
}
