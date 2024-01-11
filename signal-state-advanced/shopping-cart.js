import { signal } from "./signal.js";
import { effect } from "./effect.js";
import { computed } from "./computed.js";

const pricePerItem = 10;
let amountOfShoppingCartItems = signal(0);
let totalPrice = computed(() => amountOfShoppingCartItems.value * pricePerItem);

const cartItemsParagraph = document.createElement("p");

effect(() => {
  cartItemsParagraph.innerText = `${amountOfShoppingCartItems.value} items / Total: CHF ${totalPrice.value}`;
});

const addToCartButton = document.createElement("button");
addToCartButton.innerText = "Add 1 item to cart";
addToCartButton.addEventListener("click", () => {
  amountOfShoppingCartItems.value += 1;
});

document.body.appendChild(cartItemsParagraph);
document.body.appendChild(addToCartButton);
