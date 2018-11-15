const promise=new Promise((resolve,reject)=>{
    resolve('this is my resolve data');

});

promise.then((data)=>{
    console.log(data)
});
