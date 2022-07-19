import "./index.css";

import {
  page,
  groupsBlocks,
  methodologyBlocks,
  aboutProjectBlock,
  aboutBlock,
  popupTemplate,
} from "../utils/var.js";
import Popup from "../components/Popup.js";

const popupElement = new Popup(popupTemplate);

groupsBlocks.forEach((item) => {
  item.addEventListener("click", () => {
    page.append(popupElement.generatePopup());
  });
});

methodologyBlocks.forEach((item) => {
  item.addEventListener("click", () => {
    page.append(popupElement.generatePopup());
  });
});

aboutProjectBlock.addEventListener("click", () => {
  page.append(popupElement.generatePopup());
});

aboutBlock.addEventListener("click", () => {
  page.append(popupElement.generatePopup());
});
