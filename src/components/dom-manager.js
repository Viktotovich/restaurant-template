import { homeGenerator } from "./home";

const domManager = {
  findHeaderDom: function () {
    const extender = document.querySelector("#extender");

    extender.addEventListener("click", this.toggleExtender);
  },
  toggleExtender() {
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
};

export { domManager };
