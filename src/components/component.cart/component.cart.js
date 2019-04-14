import React from 'react';
import { connect } from 'react-redux';
import { startRemoveCartProduct, startSetCartProducts } from '../../actions/products'
import { Link } from 'react-router-dom'
import Header from '../component.header/component.header'
import numeral from 'numeral';

class Cart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
           Alertmodal: false,
      isOpen: false,
         }

  }
  
  remove = (id) => {
    this.props.startRemoveCartProduct({ "id": id })
  }
  

  render() {
    let theTotalPrice = 0;
    return (<div className="content-container">
    
    <Header></Header>
      <div className="list-header">
        <div className="show-for-mobile"><h3>My Cart Products</h3></div>
        <div className="show-for-desktop">add to the cart</div>
        <div className="show-for-desktop">Quantity</div>
        <div className="show-for-desktop">Product name</div>

        <div className="show-for-desktop">Price</div>
        <div className="show-for-desktop">total</div>
      </div>
      <div className="list-body">
        {
          this.props.cartProducts.length === 0 ? (
            <div className="list-item list-item__msg">
              <span>No products</span>
            </div>
          ) : (
              this.props.cartProducts.map((product) => {
                return <div className="list-item">
                  <button onClick={() => this.remove(product.id)} className='pr_add'>delete from the cart</button>
                  <div className='pr_qun'>
                    <h3 type="number" className="list-item_title pr_qunt">  <span className="show-for-mobile"> Quantity: </span>{product.productQuantity}</h3>
                  </div>
                  <div>
                    <h3 className="list-item_title pr_name">{product.name}</h3>
                  </div>
                  <div>
                    <h3 className="list-item__data pr_price"> <span className="show-for-mobile">price for unit:  </span>{numeral(product.price).format('$0,0.00')}</h3>
                  </div>
                  <div>
                    <h3 className="list-item__data pr_price"> <span className="show-for-mobile">total price: </span>{
                      numeral(product.price * product.productQuantity).format('$0,0.00')
                    }</h3>
                    <div className='displaynone'>
                      {
                        theTotalPrice = (product.price * product.productQuantity) + theTotalPrice
                      }
                    </div>
                  </div>
                </div>
              })

            )
        }

        <h3 className="totalprice">
          <br></br>
          {" The Total Price is:  " + numeral(theTotalPrice).format('$0,0.00')}
        </h3>

      </div>
      <br></br>
      
      <Link className="button" to="/dashboard">Back to The Shopping Page</Link>
    
    </div>
    );

  }
};

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts
  };
};

const mapDispatchToProps = (dispatch) => ({
  putCartProducts: dispatch(startSetCartProducts()),

  startRemoveCartProduct: (obj) => dispatch(startRemoveCartProduct(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
