const para=document.createElement("p");
const node=document.createTextNode("This is the new paragraph");
para.appendChild(node);
const element=document.getElementById('div1');
element.appendChild(para);
const remove=document.getElementById('p1');
remove.remove();