import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [state, setState] = useState({
    phones: [],
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
  const [cartSubtotal, setCartSubtotal] = useState(0)
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)


  const setProducts = (phones,accessoriesProducts,kidsProducts,beautyProducts,
    jewelryProducts,menProducts,womenProducts,shoeProducts,houseProducts ) => {
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
    setState({
        phones: tempPhones, 
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

  const getItem = (category, id) => {
    let product;
    if(category) {
      const cat = state[category]
      product = cat.find((item) => item.id === id);
      return product;
    }
    product = state.phones.find((item) => item.id === id);
    return product;
    
  };

  const handleDetail = (category, id) => {
    const product = getItem(category, id);
    setDetailProduct(product);
  };

  
  const addTotals = () => {
    let subTotal = 0;
    let totalItem = 0
    cart.map(item => (subTotal+= item.total));
    cart.map(item => (totalItem +=  item.count))
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    setCartSubtotal(subTotal)
    setCartTax(tax)
    setCartTotal(total)
    setTotalItems(totalItem)
  }

  const addToCart = (category, id) => {
    let tempProducts = state[category];
    const index = tempProducts.indexOf(getItem(category, id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setState(prev => prev[category] = tempProducts)
    setCart([...cart, product])

    addTotals();
  };

  const openModal = (category, id) => {
    const product = getItem(category,id);

    setModalProduct(product)
    setModalOpen(true)  }

  const closeModal = () => {
    this.setState(()=> {
      return {modalOpen: false}
    })
  }

  const increment = id => {
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

  const decrement = id => {
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

  const removeItem = id => {
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

  const clearCart = () => {
    setCart([])
  }


    return (
      <ProductContext.Provider
        value={{
          state,
          cart,
          totalItems,
          modalOpen,
          modalProduct,
          setProducts,
          handleDetail,
          detailProduct,
          addToCart,
          openModal,
          closeModal,
          increment,
          decrement,
          removeItem,
          clearCart
        }}
      >
        {props.children}
      </ProductContext.Provider>
    );
}
