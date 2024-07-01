const addToCartButton = document.querySelector('.add-to-cart');
const quantityInput = document.querySelector('#quantity');

addToCartButton.addEventListener('click', () => {
    const productId = '12345'; // Replace with actual product ID
    const quantity = quantityInput.value;

    // Add product to cart using AJAX or other data storage method
    alert(`Adding product ${productId} to cart with quantity ${quantity}`);
});
