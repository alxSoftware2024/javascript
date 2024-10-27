let stocks={
    fruit:['starwbarry','grapes','banana','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts'],
};

let order=(fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`Order selected${stocks.fruit[fruit_name]}`);
        call_production();
    },2000);
    
};
let production=()=>{
    setTimeout(()=>{
        console.log("production starting...");
        setTimeout(()=>{
console.log("The food has  been chopped");
setTimeout(()=>{
console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
setTimeout(()=>
{
   console.log("Machine has starting..."); 
   setTimeout(()=>{
    console.log(`Ice cream was placed on ${stocks.holder[0]}`);
     },1000);
   },1000);
 },1000);

},2000);
 },0);
};
order(0,production);