async function addItem (userCart, item) {
    userCart.push(item);
};

async function deleteItem(userCart, index) {
    return userCart.filter((_, i) => i !== index);
};

async function removeItem(userCart, index) {
    const { quantity } = userCart[index]

    if(quantity === 1) {
        userCart = deleteItem(userCart, index);
    } else {
        userCart[index].quantity = quantity - 1;
    }

    return userCart;
};

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
};

async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        const { name, price, quantity, subtotal } = item

        console.log(`${index + 1}. ${name} - R$ ${price} | ${quantity} | Subtotal = R$ ${subtotal()}`);
    });
};

export default { addItem, deleteItem, calculateTotal, removeItem, displayCart };