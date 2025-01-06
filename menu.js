// Add to Cart Functionality
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", event => {
        const name = event.target.dataset.name;
        const price = event.target.dataset.price;

        // Retrieve existing cart from localStorage or initialize it
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add the new item
        cart.push({ name, price });

        // Update localStorage with the new cart
        localStorage.setItem("cart", JSON.stringify(cart));

        // Notify the user
        alert(`${name} has been added to the cart!`);
    });
});
