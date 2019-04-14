//  cratProductsReducer

const cratProductsReducerDefaultState = [];

export default (state = cratProductsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CART_PRODUCTS':
      return action.allCartProducts;
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.cartProduct
      ];
    case 'REMOVE_CART_PRODUCT':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
