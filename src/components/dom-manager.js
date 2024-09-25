import { homeGenerator, mediaNavigator } from "./home";
import { menuGenerator } from "./menu";

const domManager = {
  findHeaderDom: function () {
    const extender = document.querySelector("#extender");
    const homeButton = document.querySelector("#home");
    const menuButtonHeader = document.querySelector("#menu");
    const mockLogoType = document.querySelector("#mock-logotype");
    const contactUsButton = document.querySelector("#contact-us");

    homeButton.addEventListener("click", this.initialLoad);
    mockLogoType.addEventListener("click", this.initialLoad);
    extender.addEventListener("click", this.toggleExtender);
    menuButtonHeader.addEventListener("click", this.menuLoad);
    contactUsButton.addEventListener("click", this.contactUsLoad);
  },
  toggleExtender: function () {
    const tabs = document.querySelector("#tabs");

    if (tabs.getAttribute("class") === "invisible") {
      tabs.setAttribute("class", "visible");
    } else {
      tabs.setAttribute("class", "invisible");
    }
  },
  initialLoad: function () {
    homeGenerator.initiateHome();
  },
  menuLoad: function () {
    menuGenerator.initiateMenu();
  },
  activateSlides: function () {
    mediaNavigator.autoSlide();
  },
  activateDynamicTyping: function () {
    mediaNavigator.dynamicTyping();
  },
  contactUsLoad: function () {
    console.log("under-construction");
  },
};

export { domManager };
