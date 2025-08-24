let cartCount = 0;
let totalAmount = 0;

const toggleMenu = () =>
{
    const menu = document.getElementById('sidebar');
    menu.classList.toggle('active');
}

const header = document.querySelector('header');
const cartIcon = header.lastElementChild;
const cart = document.querySelector('.cart');

cartIcon.addEventListener('click', () => 
{
    cart.classList.toggle('show');
});

const cartItemsContainer = document.querySelector('.cart-items');
const totalDisplay = document.getElementById('totalAmount');
const confirmPurchaseButton = document.getElementById('confirmPurchase');

const products = document.querySelectorAll('.products article');

products.forEach(product => 
{
    product.addEventListener('click', () => 
    {
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', '')); 
        const productImage = product.querySelector('img').src;

        addToCart(productName, productPrice, productImage);
    });
});

products.forEach(element => 
{
    element.addEventListener("mouseenter", () =>
    {
        element.style.color = "#ff007f";
    });
});

products.forEach(element => 
{
    element.addEventListener("mouseleave", () =>
    {
        element.style.color = "#000000";
    });
});

const addToCart = (name, price, image) =>
{
    cartCount++;
    totalAmount += price;
    document.getElementById('cartBadge').innerText = cartCount;
    totalDisplay.innerText = `$${totalAmount.toFixed(2)}`;

    const cartItem = document.createElement('section');
    cartItem.innerHTML = `
    <img src="${image}">
    <h3>${name}</h3>
    <p>${price}</p>
    <i class="remove"><img src="assets/img/remove.svg"></i>
    `;

    cartItem.querySelector('.remove').addEventListener('click', () =>
    {
        cartItem.remove();
        cartCount--;
        totalAmount -= price;
        document.getElementById('cartBadge').innerText = cartCount;
        totalDisplay.innerText = `$${totalAmount.toFixed(2)}`;
    });

    cartItemsContainer.appendChild(cartItem);
}

confirmPurchaseButton.addEventListener('click', () => 
{
    if (cartCount > 0) 
    {
        alert(`Gracias por tu compra. El total es: $${totalAmount.toFixed(2)}`);
        cartItemsContainer.innerHTML = ''; 
        cartCount = 0;
        totalAmount = 0;
        document.getElementById('cartBadge').innerText = cartCount;
        totalDisplay.innerText = `$${totalAmount.toFixed(2)}`; 
    } 
    else 
    {
        alert('Tu carrito está vacío.');
    }
});