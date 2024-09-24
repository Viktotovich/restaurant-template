import { homeGenerator } from "./home";

const domManager = {
  findHeaderDom: function () {
    const extender = document.querySelector("#extender");
    const homeButton = document.querySelector("#home");
    const menuButtonHeader = document.querySelector("#menu");
    const ctaMenuButton = document.querySelector(".cta-button");

    homeButton.addEventListener("click", this.initialLoad);
    extender.addEventListener("click", this.toggleExtender);
    menuButtonHeader.addEventListener("click", this.menuLoad);
    ctaMenuButton.addEventListener("click", this.menuLoad);
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
    console.log("menu");
  },
};

export { domManager };
