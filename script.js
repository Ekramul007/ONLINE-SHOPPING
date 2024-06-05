// script.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const viewCartButton = document.getElementById('view-cart-btn');
    const checkoutButton = document.getElementById('checkout-btn');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');

    let cart = [];
    updateCartTotal();

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentNode;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;
            const cartItem = { name: productName, price: productPrice };
            cart.push(cartItem);
            updateCartTotal();
            updateCartItems();
        });
    });

    viewCartButton.addEventListener('click', function() {
        document.getElementById('cart').style.display = 'block';
    });

    checkoutButton.addEventListener('click', function() {
        alert('Checkout functionality not implemented yet!');
    });

    function updateCartTotal() {
        const total = cart.reduce((acc, item) => acc + parseFloat(item.price.substring(1)), 0);
        cartTotal.textContent = '$' + total.toFixed(2);
    }

    function updateCartItems() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(li);
        });
    }
});
