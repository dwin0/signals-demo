const pricePerItem = 10;
let amountOfShoppingCartItems = 0;
let totalPrice = amountOfShoppingCartItems * pricePerItem;

const cartItemsParagraph = document.createElement("p");
cartItemsParagraph.innerText = `${amountOfShoppingCartItems} items / Total: CHF ${totalPrice}`;
document.body.appendChild(cartItemsParagraph);

const addToCartButton = document.createElement("button");
addToCartButton.innerText = "Add 1 item to cart";
document.body.appendChild(addToCartButton);

addToCartButton.addEventListener("click", () => {
  amountOfShoppingCartItems++;
  console.log("New amount: ", amountOfShoppingCartItems);
});
