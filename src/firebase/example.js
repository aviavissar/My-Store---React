/*
database.ref('expenses').on('child_changed',(sn)=>{
    console.log(sn.key,sn.val())
})

database.ref('expenses')
.on('value',(snapshot)=>{
 const expenses=[];
 snapshot.forEach((ch)=>{
    expenses.push({
        id:ch.key,
        ...ch.val()
    })
 });
 console.log(expenses);
})



database.ref("expenses").push({
    description: "bobobobob",
    note:"",
    amount:200,
    createdAt:1414
});


database.ref().on('value',(snapshot)=>{
const  val=snapshot.val();
   console.log(`${val.name}is a ${val.job.title} at ${val.job.company}`);
});



database.ref().once('value')
.then((snapshot)=>{
    console.log(snapshot.val());
}).catch(()=>{
    console.log("error");
});


database.ref().set({
    name: 'avi avissar',
    age: 42,
    isSingel: true,
    location: {
        city: 'ramat-gan',
        country: 'israel'
    }
}).then(()=>{
    console.log('data is saved')
}).catch((e)=>{
    console.log('this is failde becose',e)
});

database.ref('isSingel').remove().then(()=>{
    console.log('remove is seccisd')
}).catch(()=>{
    console.log('remove is fail')
});

database.ref().update({
    stressLevel:9,
    job:{
        title:'software developer',
        company:'Amazon'
        },
   "location/city":"Seattle"
});*/