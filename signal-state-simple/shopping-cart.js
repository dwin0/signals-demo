import { signal } from "./signal.js";
import { effect } from "./effect.js";

const amountOfShoppingCartItems = signal(0);

const cartItemsParagraph = document.createElement("p");

effect(() => {
  cartItemsParagraph.innerText = `${amountOfShoppingCartItems.value} cart items`;
});

const addToCartButton = document.createElement("button");
addToCartButton.innerText = "Add 1 item to cart";
addToCartButton.addEventListener("click", () => {
  amountOfShoppingCartItems.value += 1;
});

document.body.appendChild(cartItemsParagraph);
document.body.appendChild(addToCartButton);

// Example with more signals to demo granular update
// const amountOfFavouriteItems = signal(0);

// const favouriteItemsParagraph = document.createElement("p");

// effect(() => {
//   favouriteItemsParagraph.innerText = `${amountOfFavouriteItems.value} favourite items`;
// });

// const addToFavouritesButton = document.createElement("button");
// addToFavouritesButton.innerText = "Add 1 item to favourites";
// addToFavouritesButton.addEventListener("click", () => {
//   amountOfFavouriteItems.value += 1;
// });

// document.body.appendChild(favouriteItemsParagraph);
// document.body.appendChild(addToFavouritesButton);
