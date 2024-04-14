// This is the boilerplate code given for you
// You can modify this code
// Product data
if(!JSON.parse(sessionStorage.getItem("cart"))){
	let cart = [];
	
	sessionStorage.setItem("cart",JSON.stringify(cart));
}
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	let cartList= document.getElementById("cart-list");
	cart.forEach((product,index)=>{
		let li = document.createElement("li");
	let name = product.name;
	let price = product.price;
	
	li.innerHTML = `${name} - $${price} <button onclick="removeFromCart(${index})">Remove</button>`;
	cartList.append(li);
	})
}

// Add item to cart


function addToCart(productId) {
	
	document.getElementById("cart-list").innerHTML = "";
	let product = products[productId-1];
	let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	cart.push(product);
	sessionStorage.setItem("cart",JSON.stringify(cart));
	renderCart()
	
}

// Remove item from cart
function removeFromCart(productId) {
	let cart = JSON.parse(sessionStorage.getItem("cart"));

	document.getElementById("cart-list").innerHTML = "";
	let filteredCart = cart.filter((product,index)=>index !== productId);
	sessionStorage.setItem("cart",JSON.stringify(filteredCart));
	renderCart()
}

// Clear cart
function clearCart() {
	sessionStorage.setItem("cart",JSON.stringify([]));
	document.getElementById("cart-list").innerHTML = "";
	renderCart();
}

document.getElementById("clear-cart-btn").addEventListener("click",clearCart)
// Initial render
renderProducts();
renderCart();
