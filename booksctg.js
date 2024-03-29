let cart = [];
let totalAmount = 0;

function addToCart(price, itemName, imageUrl) {
    cart.push({ price: price, name: itemName, image: imageUrl });
    totalAmount += price;
    updateCart();
    updateCartItemCount();
}

function updateCart() {
    let cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name} Image">
                <p>${item.name}</p>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
    });
    document.getElementById('totalAmount').textContent = totalAmount;
}

function updateCartItemCount() {
    document.getElementById('cartIcon').textContent = `Cart (${cart.length})`;
}

function checkout() {
    // Here you can implement the logic for proceeding to payment
    alert(`Total Amount: ₹${totalAmount}. Proceed to Payment.`);
}

document.getElementById('cartIcon').addEventListener('click', function() {
    let cartSection = document.getElementById('cartSection');
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
});
function updateCart() {
    let cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name} Image">
                <p>${item.name}</p>
                <p>Price: ₹${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
    document.getElementById('totalAmount').textContent = totalAmount;
}

function removeFromCart(index) {
    totalAmount -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
    updateCartItemCount();
}