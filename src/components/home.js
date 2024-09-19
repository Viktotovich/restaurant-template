import vietnamScenary from "../images/vietnam-overview.gif";
import vietnamDish from "../images/vietnamese-dish.gif";
import noodleSoup from "../images/pho-ga-noodle-chicken-soup.png";
import vietnamLove from "../images/we-love-vietnam.png";

let slidesArr = [];
let domsArr = [];

class ImageSlide {
  constructor(name, altText, media, index) {
    this.name = name;
    this.altText = altText;
    this.media = media;
    this.index = index;
  }

  getMedia() {
    const newMedia = new Image();
    newMedia.src = this.media;
    return newMedia;
  }
}

const homeGenerator = {
  getContentSpace: function () {
    return document.querySelector("#content");
  },
  initiateHome: function () {
    this.resetPrevious();
    this.placeContent();
  },
  resetPrevious: function () {
    this.getContentSpace().textContent = "";
  },
  placeContent: function () {
    const carouselSpace = this.createCarousel();
    const contentSpace = this.getContentSpace();
    const homeContent = secondaryContent.createSecondaryContent();

    contentSpace.appendChild(carouselSpace);
    contentSpace.appendChild(homeContent);
    //contentSpace.appendChild(homeContent);

    this.createSlides(carouselSpace);
    mediaNavigator.moveToStart();
  },
  createCarousel: function () {
    const carousel = document.createElement("div");
    const goLeft = document.createElement("span");
    const goRight = document.createElement("span");

    goLeft.textContent = "<";
    goRight.textContent = ">";

    goLeft.addEventListener("click", mediaNavigator.moveLeft);
    goRight.addEventListener("click", mediaNavigator.moveRight);

    carousel.appendChild(goLeft);
    carousel.appendChild(goRight);

    goLeft.classList.add("go-left");
    goRight.classList.add("go-right");
    carousel.classList.add("carousel");
    this.createNavCircles(carousel);

    return carousel;
  },
  createNavCircles: function (carousel) {
    const navContainer = document.createElement("div");

    navContainer.classList.add("nav-container");
    carousel.appendChild(navContainer);

    for (let i = 0; i < 4; i++) {
      let navCircle = document.createElement("span");

      navCircle.classList.add(`image${i}`);

      navContainer.appendChild(navCircle);
      navCircle.addEventListener("click", mediaNavigator.moveExact);
    }
  },
  createSlides: function (carousel) {
    const firstGif = new ImageSlide(
      "vietnam-overview",
      "A sky scene overlooking the terrains of Vietnam. The beach, the mountains, and the environment is clearly visible",
      vietnamScenary,
      0
    );
    const secondGif = new ImageSlide(
      "vietnam-dish",
      "A shot of a delicious traditional Vietnamese dish.",
      vietnamDish,
      1
    );
    const firstImage = new ImageSlide(
      "noodle-soup",
      "Pho Ga Noodle Chicken Soup, chopsticks, and a white background",
      noodleSoup,
      2
    );
    const secondImage = new ImageSlide(
      "vietnam-love",
      "We love Vietnam. Map of Vietnam with a red and yellow color scheme",
      vietnamLove,
      3
    );
    //I remembered how much trauma removing duplicates in an object gave me, and delete obj key side effects. Obj changed to arr
    slidesArr = [];
    domsArr = [];
    slidesArr.push(firstGif, secondGif, firstImage, secondImage);
    this.processMedia(carousel);
  },
  processMedia: function (carousel) {
    slidesArr.forEach((element) => {
      this.appendMedia(carousel, element);
    });
  },
  appendMedia: function (carousel, obj) {
    const imageContainer = document.createElement("div");
    const className = obj.name;
    const altText = obj.altText;
    const slideMedia = obj.getMedia();

    slideMedia.classList.add(className);
    slideMedia.setAttribute("alt", altText);

    imageContainer.classList.add("image-container");
    imageContainer.setAttribute("id", `image${obj.index}`);

    imageContainer.appendChild(slideMedia);
    carousel.appendChild(imageContainer);

    domsArr.push(imageContainer);
  },
};

const mediaNavigator = {
  currentIndex: {
    index: 0,
    getIndex: function () {
      return this.index;
    },
    increaseIndex: function () {
      if (this.index !== 3) {
        this.index += 1;
      } else {
        this.resetIndex();
      }
    },
    decreaseIndex: function () {
      if (this.index !== 0) {
        this.index -= 1;
      } else {
        this.index = 3;
      }
    },
    resetIndex: function () {
      this.index = 0;
    },
  },
  moveToStart: function () {
    const dom = domsArr[0];
    mediaNavigator.clearSelections();

    dom.classList.add("current-image");
  },
  moveLeft: function () {
    mediaNavigator.currentIndex.decreaseIndex();
    const dom = domsArr[mediaNavigator.currentIndex.getIndex()];

    mediaNavigator.clearSelections();
    dom.classList.add("current-image");
  },
  moveRight: function () {
    mediaNavigator.currentIndex.increaseIndex();
    const dom = domsArr[mediaNavigator.currentIndex.getIndex()];

    mediaNavigator.clearSelections();
    dom.classList.add("current-image");
  },
  moveExact: function (e) {
    console.log(e);
    //TODO: Match class with ID to find the right img

    this.clearSelections();
    //dom.classList.add("current-image");
  },
  clearSelections: function () {
    domsArr.forEach((element) => {
      element.classList.remove("current-image");
    });
  },
};

const secondaryContent = {
  createSecondaryContent: function () {
    const secondaryContainer = document.createElement("div");
    const title = document.createElement("h2");
    const aboutUsContainer = this.createAboutUs();
    const ourRestaurant = this.createImage();
    const ctaContainer = this.createCTA();

    title.textContent = "Our Little Dream";

    secondaryContainer.appendChild(aboutUsContainer);
    secondaryContainer.appendChild(ourRestaurant);
    secondaryContainer.appendChild(ctaContainer);

    secondaryContainer.setAttribute("id", "home-content");

    return secondaryContainer;
  },
  createAboutUs: function () {
    const aboutUsContainer = document.createElement("div");
    const aboutUsTitle = document.createElement("h3");
    const aboutUsText = document.createElement("div");

    aboutUsContainer.appendChild(aboutUsTitle);
    aboutUsContainer.appendChild(aboutUsText);

    aboutUsContainer.classList.add("about-us-container");
    aboutUsTitle.classList.add("about-us-title");
    aboutUsText.classList.add("about-us-text");

    aboutUsTitle.textContent = "Get to know us";
    aboutUsText.innerHTML =
      "We are a small, cozy, lovely, yet hugely ambitious traditional Vietnamese food restaurants. <br><br> Authenticity is at the heart of our operations, we love Vietnam, and we want to share that love with you.";

    return aboutUsContainer;
  },
  createImage: function () {
    const imageContainer = document.createElement("div");
    //make new Image

    imageContainer.classList.add("restaurant-image");

    return imageContainer;
  },
  createCTA: function () {
    //TODO add an image to the container through css
    const ctaContainer = document.createElement("div");
    const foodIcon = document.createElement("div");
    const menuTitle = document.createElement("h3");
    const ctaButton = document.createElement("button");

    foodIcon.textContent = "🍴";
    menuTitle.textContent = "MENU";
    ctaButton.textContent = "OPEN MENU";

    ctaContainer.classList.add("cta-container");
    foodIcon.classList.add("food-icon");
    menuTitle.classList.add("menu-title");
    ctaButton.classList.add("cta-button");

    ctaContainer.appendChild(foodIcon);
    ctaContainer.appendChild(menuTitle);
    ctaContainer.appendChild(ctaButton);

    return ctaContainer;
  },
};

export { homeGenerator };

/*  Carousel
                    Top
        <Go Back-------------Go Right>
                    Bottom
                    ***** 

            (circles to navigate))
    */
