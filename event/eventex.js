//chage paragraph text

const par=document.getElementById('greeting');
par.textContent="Hello, DOM!";
//Add an event listener to a button that changes the button’s text to “Clicked!” when it is clicked.
const btn=document.getElementById('clickButton');
btn.addEventListener('click' ,clicked);
function clicked(eve){
    btn.textContent="Clicked";
}
//mouse over
const list=document.querySelectorAll('li');
list.forEach(lii=>{
lii.addEventListener('mouseover',moseover)
lii.addEventListener('mouseout',moseout)
function moseover(eve){
    lii.style.color='red';
}
function moseout(eve){
    lii.style.color='black';
}

});