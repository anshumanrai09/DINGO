// Load cart items from localStorage and display them
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-items");
    const totalAmountElement = document.getElementById("total-amount");

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalAmount = 0;

    // If the cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        return;
    }

    // Render cart items
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
            <button class="remove-item" data-name="${item.name}">Remove</button>
        `;
        cartContainer.appendChild(itemElement);

        // Add to total amount
        totalAmount += parseInt(item.price);
    });

    // Update total amount
    totalAmountElement.textContent = totalAmount;

    // Add remove functionality
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", event => {
            const itemName = event.target.dataset.name;

            // Remove item from cart
            cart = cart.filter(item => item.name !== itemName);
            localStorage.setItem("cart", JSON.stringify(cart));

            // Reload the cart page
            window.location.reload();
        });
    });
});
