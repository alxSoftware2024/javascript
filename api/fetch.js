fetch('https://dummyjson.com/products')
.then(response=>response.json())
.then (res=>{
    const data=res.products;
    let rows='';
    data.forEach(product=> {
        rows+=`<tr><td>${product.id}</td><td>${product.title}</td>
        <td>${product.descripation}</td><td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td></tr>`;
    });
    document.getElementById('tableRows').textContent=rows;
})
   