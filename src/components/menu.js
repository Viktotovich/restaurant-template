import banh from "../images/menu-images/banh.png";
import cha from "../images/menu-images/cha.png";
import goi from "../images/menu-images/goi.png";
import pho from "../images/menu-images/pho.png";

//after my to-do list, this is my standard solution to everything. It's one of the most awesome things you could do
let menuItems = [];

class MenuCategory {
  constructor(categoryDescription, media, index) {
    this.categoryDescription = categoryDescription;
    this.media = media;
    this.index = index;
    this.items = [];
  }

  getMedia() {
    const newMedia = new Image();
    newMedia.src = this.media;
    return newMedia;
  }

  getItems() {
    return this.items;
  }
}

class MenuItem {
  constructor(itemName, itemDescription, itemIndex, itemPrice) {
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.itemIndex = itemIndex;
    this.itemPrice = itemPrice;
  }

  getPrice() {
    //this feels dirty, like something ain't right.
    //TODO: find out what's wrong with this
    return `${this.itemPrice}.00 USD `;
  }
}

const menuGenerator = {
  getContentSpace: function () {
    return document.querySelector("#content");
  },
  initiateMenu: function () {
    this.resetPrevious();
    this.placeContent();
  },
  resetPrevious: function () {
    this.getContentSpace().textContent = "";
  },
  placeContent: function () {
    const contentSpace = this.getContentSpace();
    const menuTitle = this.createMenuTitle();
    const menuSpace = menuController.createMenuSpace();

    contentSpace.appendChild(menuTitle);
    //contentSpace.appendChild(menuSpace);

    //It doesn't really need to be more complex than this
  },
  createMenuTitle: function () {
    const menuTitleContainer = document.createElement("div");
    const foodIcon = document.createElement("div");

    foodIcon.textContent = "The Authentic Vietnamese Experience";

    menuTitleContainer.classList.add("menu-title-container");
    foodIcon.classList.add("food-icon");

    menuTitleContainer.appendChild(foodIcon);

    return menuTitleContainer;
  },
};

//executes once to fill up the arrays - it's a very ugly function, and it's an ES5 standard IIFE - but it does the job perfectly
(function () {
  /* 
    1 - Pho (Noodle Soups): 
        i - Pho Bo (Beef Noodle Soup)
        ii - Pho Ga (Chicken Noodle Soup)
    2 - Banh (Savory Cakes and Breads):
        i - Banh Mi (Vietnamese Sandwich)
        ii - Banx Xeo (Vietnamese Sizzling Pancake)
    3 - Goi (Salads):
        i - Goi Cuon (Fresh Spring Rolls)
        ii - Goi Du DU (Papaya Salad)
    4 - Cha (Grilled and Fried Dishes):
        i - Cha Hio (Fried Spring Rolls)
        ii - Nem Nurong (Grilled Pork Sausage)
    */

  const phoCat = new MenuCategory("Pho: Vietnamese Noodle Soups", pho, 0);
  const banhCat = new MenuCategory("Banh: Savory Cakes and Breads", banh, 1);
  const goiCat = new MenuCategory("Goi: Salads", goi, 2);
  const chaCat = new MenuCategory("Cha: Grilled and Fried Dishes", cha, 3);

  menuItems.push(phoCat, banhCat, goiCat, chaCat);

  function fillMenu() {
    const phoBo = new MenuItem(
      "Phở Bò (Beef Noodle Soup)",
      "A flavorful broth simmered for hours with spices like star anise and cinnamon, served with tender slices of beef, flat rice noodles, and fresh herbs like cilantro and basil. It's Vietnam's most famous dish, typically enjoyed as breakfast or lunch.",
      0,
      4
    );

    const phoGa = new MenuItem(
      "Phở Gà (Chicken Noodle Soup)",
      "A lighter version of phở, made with a fragrant chicken broth, tender chicken slices, and delicate rice noodles, topped with fresh herbs and a squeeze of lime for a refreshing finish.",
      1,
      3
    );

    phoCat.items.push(phoBo, phoGa);

    const bahnMi = new MenuItem(
      "Bánh Mì (Vietnamese Sandwich)",
      "A crispy French baguette filled with savory ingredients like grilled pork, pâté, cucumber, pickled carrots, and fresh cilantro. This fusion of French and Vietnamese cuisine is a perfect street food snack.",
      0,
      5
    );

    const banhXeo = new MenuItem(
      "Bánh Xèo (Vietnamese Sizzling Pancake)",
      "A crispy, savory pancake made from rice flour, turmeric, and coconut milk, filled with shrimp, pork, and bean sprouts. Served with fresh lettuce and herbs, it’s wrapped and dipped in a tangy fish sauce.",
      1,
      8
    );

    banhCat.items.push(bahnMi, banhXeo);

    const goiCuon = new MenuItem(
      "Gỏi Cuốn (Fresh Spring Rolls)",
      "Light and refreshing rolls made with rice paper, packed with shrimp, pork, vermicelli noodles, and fresh herbs, then dipped in a savory peanut sauce. Perfect for a healthy appetizer or snack.",
      0,
      3
    );

    const goiDuDu = new MenuItem(
      "Gỏi Đu Đủ (Papaya Salad)",
      "A vibrant salad of shredded green papaya, tossed with fresh herbs, peanuts, and shrimp, all dressed in a tangy fish sauce dressing. It’s crunchy, zesty, and refreshing.",
      1,
      4
    );

    goiCat.items.push(goiCuon, goiDuDu);

    const chaGio = new MenuItem(
      "Chả Giò (Fried Spring Rolls)",
      "Crispy golden rolls filled with a mixture of minced pork, shrimp, mushrooms, and vermicelli noodles, deep-fried to perfection. These are often served with fresh lettuce and herbs for wrapping, then dipped in a tangy fish sauce.",
      0,
      5
    );

    const nemNurong = new MenuItem(
      "Nem Nướng (Grilled Pork Sausage)",
      "Juicy pork sausages grilled to perfection, with a slightly sweet and smoky flavor. Often served with rice paper, fresh vegetables, and herbs, ready to be rolled up and dipped in sauce.",
      0,
      12
    );

    chaCat.items.push(chaGio, nemNurong);
  }
  fillMenu();
})();

const menuController = {
  domsArray: [],
  createMenuSpace: function () {
    //the whole menu goes here - do this after importing images
  },
};

export { menuGenerator };
