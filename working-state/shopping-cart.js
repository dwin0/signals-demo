const pricePerItem = 10;
let amountOfShoppingCartItems = 0;
let totalPrice = amountOfShoppingCartItems * pricePerItem;

const cartItemsParagraph = document.createElement("p");
document.body.appendChild(cartItemsParagraph);

function renderText() {
  cartItemsParagraph.innerText = `${amountOfShoppingCartItems} items / Total: CHF ${totalPrice}`;
}
renderText();

const addToCartButton = document.createElement("button");
addToCartButton.innerText = "Add 1 item to cart";
document.body.appendChild(addToCartButton);

addToCartButton.addEventListener("click", () => {
  amountOfShoppingCartItems++;
  totalPrice = amountOfShoppingCartItems * pricePerItem;
  renderText();
});
