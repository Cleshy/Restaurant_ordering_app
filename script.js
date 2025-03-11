import { menuArray as menu } from "./data.js";

const orders = [];

function renderMenu(menu) {
  return menu
    .map((item) => {
      return `<div class="menu-item">
                <img src=${item.image} alt=${item.name} />
                <div class="menu-item-info">
                  <p class="menu-item-title">${item.name}</p>
                  <p class="menu-item-ingredients">${item.ingredients.join(
                    ", "
                  )}</p>
                  <span class="menu-item-price">$${item.price}</span>
                </div>
                  <ion-icon data-id="${item.id}" name="add-outline"></ion-icon>
              </div>`;
    })
    .join("");
}

document.getElementById("menu").innerHTML = renderMenu(menu);

document.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    console.log(menu[e.target.dataset.id]);
  }
});
