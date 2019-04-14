import React from 'react';
import { connect } from 'react-redux';
import ProductsListItem from '../component.productsListItem/component.productsListItem';
import { Link } from 'react-router-dom'

const ProductsList = (props) => (
  <div className="content-container">
     <Link className="button cartBt" to="/cart">go to the your cart</Link>
    <div className="list-header">
      <div className="show-for-mobile">Products</div>
      <div className="show-for-desktop">add to the cart</div>
      <div className="show-for-desktop">Quantity</div>
      <div className="show-for-desktop">Product name</div>
      <div className="show-for-desktop">Product image</div>
      <div className="show-for-desktop">Price</div>
    </div>
    <div className="list-body">
    {
      props.products.length === 0 ? (
       <div className="list-item list-item__msg">
         <span>No products</span>
         </div>
      ) : (
          props.products.map((product,index) => {
            return <ProductsListItem key={product.name+index} {...product} />;
          })
        )
    }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    products:state.products
  
  };
};

export default connect(mapStateToProps)(ProductsList);
