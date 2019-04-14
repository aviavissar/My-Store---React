import React from 'react';
import { connect } from 'react-redux';
import { startAddProduct} from '../../actions/products';
import numeral from 'numeral';
import uuid from 'uuid/v4';
import AlertModal from '../alertModal.component/alertModal.component'

// load a locale
numeral.register('locale', 'il', {
  delimiters: {
    thousands: ' ',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '₪'
  }
});
numeral.locale('il');


class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      Alertmodal: false,
      isOpen: false,
      pic: this.props.pic,
      name: this.props.name,
      price: this.props.price,
      productQuantity: 0
    })

  }

  add = () => {
    this.setState({ productQuantity: ++this.state.productQuantity })
  }

  decrease = () => {
    if (this.state.productQuantity > 0) {
      this.setState({ productQuantity: --this.state.productQuantity })
    }
  }
  handleClose = () => {
    this.setState({ isOpen: false })
     }

  createCartProduct = (e) => {
    
    e.preventDefault();
    if(this.state.productQuantity>0){
      const cartProduct = {
        id:uuid(),
        name: this.state.name,
        productQuantity: this.state.productQuantity,
        price: this.state.price
      }
      
      this.props.startAddProduct(cartProduct);
      this.setState({
        productQuantity:0,
        Alertmodal: true,
        isOpen: true,
        textalert: 'המוצר התווסף לעגלה'
      })
    }
    else{
      this.setState({
        productQuantity:0,
        Alertmodal: true,
        isOpen: true,
        textalert: 'לא רשמת את הכמות המינימלית לקניה '
      })
    }
    

  }

  render() {
    return (
      <div className="list-item">
        <button onClick={this.createCartProduct} className='pr_add'>add to the cart</button>
        <div className='pr_qun'>
          <button onClick={this.add}>+</button>
          <input type="number"  readOnly value={this.state.productQuantity} />
          <button onClick={this.decrease}>-</button>
        </div>
        <div>
          <h3 className="list-item_title pr_name">{this.state.name}</h3>

        </div>
        <img src={this.state.pic} />
        <h3 className="list-item__data pr_price">{numeral(this.state.price).format('$0,0.00')}</h3>
        {
                    this.state.Alertmodal ? <AlertModal isOpen={this.state.isOpen} colortext="textred" handleClose={() => { this.handleClose() }} textalert={this.state.textalert}></AlertModal> : null
                  }
      </div>

    )
  }
}


const mapDispatchToProps = (dispatch) => ({

  startAddProduct: (cartProduct) => dispatch(startAddProduct(cartProduct)),
  // startEditQuiz: (quid, qu) => dispatch(startEditQuiz(quid, qu))
});

export default connect(undefined, mapDispatchToProps)(ProductListItem);
