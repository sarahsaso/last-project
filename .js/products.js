/////////////////getAllproducts.js
async function getAllProducts() {
    let data = await fetch('https://fakestoreapi.com/products')
    let products = await data.json()
   // console.log(products);


    display(products)
}
function display(products){
    let temp = ""
    products.forEach(element => {
        temp += `
        <div id= "${element.id}" class="product-card" onclick="getDetails(${element.id})">
        <img src= "${element.image}" alt="${element.title}" >
        <h2>${element.title}</h2>
        <p>Price: $${element.price}</p>
        <button i class="fa-solid fa-cart-shopping" onclick="addToCard(${element.id})"> Add to Cart <img src="img/shopping-cart_6367557.png"></i></button>
        <button class="btn" onclick="getDetails(${element.id})">View Details</button>
        <button class="btn" onclick="getCart()"><a href="/cart.html">View Cart</a></button>
        </div>
        `
    });
    document.getElementById('allproducts').innerHTML = temp
}



getAllProducts()

/////////////////get details

function getDetails(id){

localStorage.setItem('productId', id) 

window.location.href = "productDetails.html" 
}




// getDetails()
function getProductDetails(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(product => {
            console.log(product);
            displayProductDetails(product);
        })
        .catch(error => console.error('Error fetching product details:', error));
    } 


function displayProductDetails(product) {
    let temp = `
        <div class="product-details">
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart <img src="img/shopping-cart_6367557.png"></button>
        </div>
    `;
    document.getElementById('productDetails').innerHTML = temp;
}

// add to cart
/*function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart');
    } else {
        alert('Product already in cart');
    }
} */



////////////ADD TO CART
function addToCard(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}
    if (cart[id]) {
        cart[id] += 1; // Increment quantity if product already in cart
    } else {
        cart[id] = 1; // Add product with quantity 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}

 
    



//////////NAV BAR HEADER
let menuList = document.getElementById('menu_list') 
let menuToggler = document.getElementById('menu_toggler') 

menuToggler.addEventListener('click', function(e) {
    e.preventDefault();
    menuList.classList.toggle('hidden'); 
 
});




/* function getCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = 0;
    cart.forEach(id => {
        count += 1;
    });
    return count;
}*/




//get cart
/*function getCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = cart.map(id => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json());
    });
    Promise.all(cartItems)
        .then(products => {
            displayCart(products);
        })
        .catch(error => console.error('Error fetching cart items:', error));
} */