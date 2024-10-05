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
para5.innerText="Javascript is great";
//Append inner text 
const para6=document.querySelectorAll('p');
para6.forEach(par1 =>{
    console.log(par1.innerText);
    par1.innerText+="New text";
})
//InnerHTML
const para7=document.querySelector('.content');
console.log(para7.innerHTML);
para7.innerHTML="<h2>This is heading two</h2>";
const people=['ashenafi','fira','kiya'];
people.forEach(person=>{
    para7.innerHTML+=`<p>${person}</p>`;
})
//get and set Attribute
const get1=document.querySelector('p');
console.log(get1.getAttribute('class'));
get1.setArrribute('class','success');*/
const geth1=document.querySelector('h1');
console.log(geth1);
//overide exits property
//geth1.setAttribute('style','margin-left:50px');
//add style  from javascript without overide
geth1.style.fontSize='70px';
geth1.style.margin='50px';
//To delete style 
geth1.style.margin='';
geth1.style.color='';