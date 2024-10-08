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
//Sum Of two number
function Sum(callback,x,y)
{
    let result=x+y;
    callback(result);
}
function display(result){
    let h11=document.getElementById('disply');
    h11.textContent=result;
}
Sum(display,3,5);