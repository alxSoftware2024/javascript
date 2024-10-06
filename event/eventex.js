//chage paragraph text
const par=document.getElementById('greeting');
par.textContent="Hello, DOM!";
//Add an event listener to a button that changes the button’s text to “Clicked!” when it is clicked.
const btn=document.getElementById('clickButton');
btn.addEventListener('click' ,clicked);
function clicked(eve){
    btn.textContent="Clicked";
}