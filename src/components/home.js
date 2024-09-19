import vietnamScenary from "../images/vietnam-overview.gif";
import vietnamDish from "../images/vietnamese-dish.gif";
import noodleSoup from "../images/pho-ga-noodle-chicken-soup.png";
import vietnamLove from "../images/we-love-vietnam.png";

// This is such a f*cking overkill, and I am so here for it
const slidesObject = {};

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
    const carrouselSpace = this.createCarrousel();
    this.createSlides(carrouselSpace);
  },
  createCarrousel: function () {
    const carrousel = document.createElement("div");
    carrousel.classList.add(".carroussel");

    return carrousel;
  },
  createSlides: function (carrousel) {
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
    slidesObject.firstGif = firstGif;
    slidesObject.secondGif = secondGif;
    slidesObject.firstImage = firstImage;
    slidesObject.secondImage = secondImage;
    this.processMedia(carrousel);
  },
  processMedia: function (carrousel) {
    Object.keys(slidesObject).forEach((key) => {
      this.appendMedia(carrousel, slidesObject[key]);
    });
  },
  appendMedia: function (carrousel, obj) {
    console.log(obj);
  },
};

export { homeGenerator };

/*  Carrousel
                    Top
        <Go Back-------------Go Right>
                    Bottom
                    ***** 

            (circles to navigate))
    */
