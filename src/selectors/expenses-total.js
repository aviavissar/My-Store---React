

export default (expenses)=>{
    if(expenses.length>0){
    const arr=expenses.map(x=>x.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
return arr.reduce(reducer);}
else return 0;
}