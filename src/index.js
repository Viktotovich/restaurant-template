//side-effect import
import "./styles.css";
import { domManager } from "./components/dom-manager";

domManager.initialLoad();
domManager.findHeaderDom();
domManager.activateSlides();
domManager.activateDynamicTyping();
