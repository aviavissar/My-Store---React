import getExpensesTotal from '../selectors/expenses-total.js';

const expenses=[
    {
        id:'1',
        description:'gum',
        note:'',
        amount:196,
        createdAt:0
    }, {
        id:'1',
        description:'rent',
        note:'',
        amount:100,
        createdAt:0
    }, {
        id:'1',
        description:'food',
        note:'',
        amount:1000,
        createdAt:0
    }
];

const total =getExpensesTotal(expenses);
console.log("the sum is "+total+" from "+expenses.length)

