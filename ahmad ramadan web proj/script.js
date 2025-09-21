
const products = [
    {
        id: 1,
        name: "Hiking Tent",
        price: 100,
        image: "tent.jpg"
    },
    {
        id: 2,
        name: "Water Bottle",
        price: 20,
        image: "bottle.jpg"
    },
    {
        id: 3,
        name: "All You Can Fit BackPack",
        price: 70,
        image: "bp.jpg"
    },
    {
        id: 4,
        name: "Sleeping Bag",
        price: 65,
        image: "bagg.jpg"
    }
];


const productGrid = document.querySelector('.product-grid');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const cartBtn = document.getElementById('cart-btn');


function displayProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}


menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


let cart = [];

cartBtn.addEventListener('click', () => {
    alert(`Cart items: ${cart.length}`);
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        cart.push(product);
        alert(`${product.name} added to cart!`);
    }
});


displayProducts();