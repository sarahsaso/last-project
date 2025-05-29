async function getDetails() {

    const productId = localStorage.getItem("productId");
    
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const product = await res.json();
    console.log(product);
    display(product);
}




// display product details
function display(product) {
let temp = ""
    temp += `
    <div id="${product.id}" class= "product-card" >
    <img src="${product.image}" alt="${product.title}">
    <h2> ${product.title} </h2>
        <p>${product.description}</p>
    <p>Category: ${product.category}</p>
    <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
    <p>Stock:<span style="color:red"> ${product.stock ? 'Out of Stock' : 'In Stock'}</span></p>
    <button class="btn" onclick="viewCart(${product.id})"><a href="cart.html"> View Cart </a></button>
    <span>$${product.price}<i class="fa-solid fa-cart-shopping"></i></span>
    </div>
    `;

    document.getElementById('product-details').innerHTML = temp;

}


getDetails()






// add to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart');
    } else {
        alert('Product already in cart');
    }
}

function getCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[id]){
        cart[id] = +1
    } else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}



