import database from '../firebase/firebase';


let allCartProducts = [];

// setProducts
export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products
})


export const startSetProducts = () => {

  return (dispatch) => {
    return database.ref(`products/`).once('value').then(products => {
      let allProducts = []

      products.forEach((product) => {
        console.log(Object.values(product.val()))
        allProducts = allProducts.concat(product.val())
      })

      dispatch(setProducts(allProducts));
    })
  };
};

export const setCartProducts = (allCartProducts) => ({
  type: 'SET_CART_PRODUCTS',
  allCartProducts
})


export const startSetCartProducts = () => {
  return (dispatch) => {
    allCartProducts = JSON.parse(localStorage.getItem('allCartProducts'))
    if (allCartProducts) {
      dispatch(setCartProducts(allCartProducts));
    } else {
      allCartProducts = []
    }

  };
};

// ADD_Prodact
export const addProduct = (cartProduct) => ({
  type: 'ADD_PRODUCT',
  cartProduct
});

export const startAddProduct = (productData) => {

  return (dispatch) => {
    allCartProducts.push(productData);

    localStorage.setItem('allCartProducts', JSON.stringify(allCartProducts))
    dispatch(addProduct(productData));
  };
};

// REMOVE_EXPENSE
export const removeCartProduct = ({ id } = {}) => ({
  type: 'REMOVE_CART_PRODUCT',
  id
});


export const startRemoveCartProduct = ({ id }) => {
  allCartProducts.forEach((prd, index) => {
    if (prd.id == id) {
      allCartProducts.splice(index, 1);
      localStorage.setItem('allCartProducts', JSON.stringify(allCartProducts));

    }
  })
  return (dispatch) => {
    dispatch(removeCartProduct({ id }));

  };
};

