let stocks={
    fruit:['starwbarry','grapes','banana','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts'],
};

let order=(call_production)=>{
    console.log("Customer order food!!!")
    call_production();
}
let production=()=>{
console.log("production starting...")
}
order(production);