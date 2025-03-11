import { menuArray as menu } from "./data.js";

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
              <button class="menu-btn">
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>`;
    })
    .join("");
}

document.getElementById("menu").innerHTML = renderMenu(menu);
