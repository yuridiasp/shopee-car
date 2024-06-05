async function addItem (userCart, item) {
    userCart.push(item);
};

async function deleteItem(userCart, item) {
    const index = userCart.findIndex(({ name }) => name === item.name);

    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`\n\n❌ ${item.name} removido do carrinho! ❌`);
    }
};

async function removeItemByIndex(userCart, index) {
    const deleleIndex = index - 1;

    if (index > 0 && userCart.length >= index) {
        userCart.splice(deleleIndex, 1);
        console.log(`\n\n❌ Item nº ${index} removido! ❌`);
    }
};

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(p => p.name === item.name);

    if (indexFound === -1) {
        console.log("\n\n❗ Item não encontrado ❗");
    } else if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        console.log(`\n\n❌ Removido 1 unidade de ${item.name}! ❌`);
    } else {
        deleteItem(userCart, userCart[indexFound]);
    }
}

async function calculateTotal(userCart) {
    console.log(`\n\n🎁 Shopee Cart Total is:`);

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(`\n💲 Total: R$ ${result}\n`);

    return result;
};

async function displayCart(userCart) {
    console.log("\n\n📋 Shopee cart list:");

    userCart.forEach((item, index) => {
        const { name, price, quantity, subtotal } = item;

        console.log(`${index + 1}. ${name} - R$ ${price} | ${quantity} | Subtotal = R$ ${subtotal()}`);
    });
};

export default { addItem, deleteItem, calculateTotal, removeItem, displayCart, removeItemByIndex };