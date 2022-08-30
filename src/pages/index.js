import "./index.css";

import { blockInfoAds } from "../utils/block-info-ads.js";
import { blockInfoGroups } from "../utils/block-info-groups.js";
import { blockInfoMethodology } from "../utils/block-info-methodology.js";
import { blockInfoAboutProject } from "../utils/block-info-about-project.js";
import { blockInfoAbout } from "../utils/block-info-about.js";
import {
  page,
  adsBlocks,
  adsBlockImage,
  adsBlockTitle,
  adsBlockText,
  groupsBlocks,
  groupsBlockImage,
  groupsBlockTitle,
  groupsBlockText,
  methodologyBlocks,
  methodologyBlockImage,
  methodologyBlockTitle,
  methodologyBlockText,
  aboutProjectBlock,
  aboutProjectTitle,
  aboutProjectImage,
  aboutProjectText,
  // aboutBlock,
  // aboutTitle,
  // aboutBlockImage,
  // aboutBlockText,
  popupTemplate,
  PopupSostavSlovoTemplate,
} from "../utils/var.js";
import Popup from "../components/Popup.js";
import PopupNaideSlog from "../components/PopupNaideSlog.js";
import PopupSostavSlovo from "../components/PopupSostavSlovo.js";
import {sloge} from "../utils/sloge.js";

//Добавляю Названия и текст к карточкам на главную страницу

adsBlockImage.forEach((item, i) => {
  item.src = blockInfoAds[i].adsImage;
});

adsBlockText.forEach((item, i) => {
  item.textContent = blockInfoAds[i].adsText;
});

adsBlockTitle.forEach((item, i) => {
  item.textContent = blockInfoAds[i].adsTitle;
});

groupsBlockTitle.forEach((item, i) => {
  item.textContent = blockInfoGroups[i].groupTitle;
});

groupsBlockText.forEach((item, i) => {
  item.textContent = blockInfoGroups[i].groupText;
});

methodologyBlockTitle.forEach((item, i) => {
  item.textContent = blockInfoMethodology[i].methodologyTitle;
});

methodologyBlockText.forEach((item, i) => {
  item.textContent = blockInfoMethodology[i].methodologyText;
});

aboutProjectTitle.textContent = blockInfoAboutProject[0].aboutProjectTitle;

aboutProjectText.textContent = blockInfoAboutProject[0].aboutProjectText;

// aboutTitle.textContent = blockInfoAbout[0].aboutTitle;

// aboutBlockImage.src = blockInfoAbout[0].aboutImage;

// aboutBlockText.textContent = blockInfoAbout[0].aboutText;

//класс попап
const popupElement = new Popup(popupTemplate);

//устанавливаю слушатели на карточки

adsBlocks.forEach((item) => {
  item.addEventListener("click", () => {
    page.append(
      popupElement.generatePopup(
        item.querySelector(".ads__block_title"),
        item.querySelector(".ads__block_text")
      )
    );
  });
});

groupsBlocks.forEach((item) => {
  item.addEventListener("click", () => {
    page.append(
      popupElement.generatePopup(
        // item.querySelector(".groups__block_image"),
        item.querySelector(".groups__block_title"),
        item.querySelector(".groups__block_text")
      )
    );
  });
});

methodologyBlocks.forEach((item, i) => {
  item.addEventListener("click", () => {
    const zadanie = [
      new PopupSostavSlovo(PopupSostavSlovoTemplate, sloge),
      new PopupNaideSlog(PopupSostavSlovoTemplate, sloge),
      new PopupSostavSlovo(PopupSostavSlovoTemplate, sloge),
      new PopupSostavSlovo(PopupSostavSlovoTemplate, sloge),
    ];
    // const popupSostavSlovo = new PopupSostavSlovo(PopupSostavSlovoTemplate, sloge);
    page.append(
      // popupSostavSlovo.generatePopup(
        zadanie[i].generatePopup(
        // item.querySelector(".methodology__block_image"),
        // item.querySelector(".methodology__block_title"),
        // item.querySelector(".methodology__block_text")
      )
    );
  });
});

aboutProjectBlock.addEventListener("click", () => {
  page.append(
    popupElement.generatePopup(
      // aboutProjectImage,
      aboutProjectTitle,
      aboutProjectText
    )
  );
});

// aboutBlock.addEventListener("click", () => {
//   page.append(
//     popupElement.generatePopup(aboutBlockImage, aboutTitle, aboutBlockText)
//   );
// });
