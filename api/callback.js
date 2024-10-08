//A function that passed as an argument to another function
function hello(callback){
    console.log("Hello!!!!");
    callback();
}
function goodbye()
{
    console.log("Good by!!!!")
}
function wait(){
    console.log("Wait")
}
hello(wait);
