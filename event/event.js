//QuerySelector
/*const para=document.querySelector('p');
console.log(para);
const para1=document.querySelector('.error');
console.log(para1);
//to select error class of <div>
const para2=document.querySelector('div.error');
console.log(para2);
//QuerySelectorAll
const para3=document.querySelectorAll('p');
para3.forEach(pa=>{
    console.log(pa);
});
//select class of error
const error=document.querySelectorAll('.error');
console.log(error);

//Get element by ID
const title=document.getElementById('page-title');
console.log(title);

//GET element by class name
const getbyclass=document.getElementsByClassName('error');
console.log(getbyclass);

//Get element by tag name
const para4=document.getElementsByTagName('p');
console.log(para4);
console.log(para4[0]);

//update inner text
const para5=document.querySelector('p');
para5.innerText="Javascript is great";*/
//Append inner text 
const para6=document.querySelectorAll('p');
para6.forEach(par1 =>{
    console.log(par1.innerText);
    par1.innerText+="New text";
})
