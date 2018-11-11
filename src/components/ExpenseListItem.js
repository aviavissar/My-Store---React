import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


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
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: ' ש"ח '
    }
  });
  
  numeral.locale('il');
const ExpenseListItem = ({ id, description, amount, createdAt }) => (



  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount/100).format('$0,0.00')}
    &nbsp;&nbsp;&nbsp;&nbsp; 
     {moment(createdAt).format(' DD/MM/YYYY')}</p>
  </div>
);

export default ExpenseListItem;
