import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total.js';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';





const ExpensesSummary = (props) => (
    <div>
        <h3>
            {
                "the number of items is "+props.expenses.length+" the total amount is "+
              numeral((getExpensesTotal(props.expenses))/100).format('$0,0.00')

            }
        </h3>

    </div>
);
const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };
export default connect(mapStateToProps)(ExpensesSummary);