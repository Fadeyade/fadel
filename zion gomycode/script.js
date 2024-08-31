// JavaScript
function incrementQuantity() {
    let quantityElement = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

function decrementQuantity() {
    let quantityElement = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
    }
}