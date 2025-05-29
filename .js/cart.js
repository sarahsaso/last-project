async function showcartproducts() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart == []){
        console.log("Cart is empty");
        return
    }

    for (const id of Object.keys(cart)){
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`); // Fixed fetch URL syntax
            const product = await res.json();
            console.log(product);
            displayProduct(product);
            
        } 
        catch (error) {
            console.error("request is failed", id);
        }


    }
}    

showcartproducts()



//ADD TO CARD
function addToCard(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}
    
    if (cart[productId]) {
        cart[productId] += 1; // Increment quantity if product already in cart
    } else {
        cart[productId] = 1; // Add product with quantity 1
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
} 



// Display product in cart
function displayProduct(product) {
    let temp = `
        <div id="${product.id}" class="cart-product">
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <button class="btn" onclick="removeFromCart(${product.id})">Remove from Cart</button>
        </div>
    `;
    document.getElementById('cart_products').innerHTML += temp;
} 
  




//remove

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productId]) {
        delete cart[productId]; // Remove the product from the cart
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
     


alert('Product removed from cart');
}

// Refresh the cart display
document.getElementById('cart_products').innerHTML = ''; // Clear current display
showcartproducts(); // Reload cart products
}
