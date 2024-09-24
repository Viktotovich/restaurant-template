//after my to-do list, this is my standard solution to everything. It's one of the most awesome things you could do
let menuItems = [];
let domsArr = [];

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
    (this.itemName = itemName),
      (this.itemDescription = itemDescription),
      (this.itemIndex = itemIndex),
      (this.itemPrice = itemPrice);
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
    const menuSpace = this.createMenuSpace();

    contentSpace.appendChild(menuTitle);
    contentSpace.appendChild(menuSpace);
    //I looked and I looked, but it doesn't really need to be more complex than this
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
  createMenuSpace: function () {
    //the whole menu goes here - do this after importing images
  },
};

export { menuGenerator };
