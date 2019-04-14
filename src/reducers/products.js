// Expenses Reducer

const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
        case 'SET_PRODUCTS' :
      return action.products;
    default:
      return state;
  }
};
