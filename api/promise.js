//promise use to handle asynchrones operation!!
function walkdog()
{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("You walked the Dog");
},1000);
    });
}
function cleankitchen()
{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("You clean Kitchen");
},2000);
    });
}
function takeouttrash()
{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("You Take out Trash");
},500);
    });
}
walkdog().then(value=>console.log(value));