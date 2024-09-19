//import vietnamScenary from "../images/vietnam-overview.mp4";
//import vietnamDish from "../images/vietnamese-dish.mp4";
import noodleSoup from "../images/pho-ga-noodle-chicken-soup.png";
import vietnamLove from "../images/we-love-vietnam.png";

// This is such a f*cking overkill, and I am so here for it
const slidesObject = {};

class ImageSlide {
  constructor(altText, media, index) {
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
    const firstImage = new ImageSlide(
      "Pho Ga Noodle Chicken Soup, chopsticks, and a white background",
      noodleSoup,
      2
    );
    const secondImage = new ImageSlide(
      "We love Vietnam. Map of Vietnam with a red and yellow color scheme",
      vietnamLove,
      3
    );
    slidesObject.firstImage = firstImage;
    slidesObject.secondImage = secondImage;
    this.appendMedia(carrousel);
  },
  appendMedia: function (carrousel) {
    console.log(carrousel);
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
