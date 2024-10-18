//storing data
localStorage.setItem('username','ashtes');
// Retrieving data
const username=localStorage.getItem('username');
console.log(username);
//Session storage
//storing data
sessionStorage.setItem('cart',JSON.stringify({item:"prodact",quantity:2}));
//Retrieving data
const cart=JSON.parse(sessionStorage.getItem('cart'));
console.log(cart);