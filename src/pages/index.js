import "./index.css";
import { blockInfoGroups } from "../utils/block-info-groups.js";
import { blockInfoMethodology } from "../utils/block-info-methodology.js";
import { blockInfoAboutProject } from "../utils/block-info-about-project.js";
import { blockInfoAbout } from "../utils/block-info-about.js";
import {
  page,
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
  aboutBlock,
  aboutTitle,
  aboutBlockImage,
  aboutBlockText,
  popupTemplate,
} from "../utils/var.js";
import Popup from "../components/Popup.js";

//Добавляю Названия и текст к карточкам на главную страницу
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

aboutTitle.textContent = blockInfoAbout[0].aboutTitle;

aboutBlockText.textContent = blockInfoAbout[0].aboutText;

//класс попап
const popupElement = new Popup(popupTemplate);
//устанавливаю слушатели на карточки
groupsBlocks.forEach((item) => {
  item.addEventListener("click", () => {
    page.append(
      popupElement.generatePopup(
        item.querySelector(".groups__block_image"),
        item.querySelector(".groups__block_title"),
        item.querySelector(".groups__block_text")
      )
    );
  });
});

methodologyBlocks.forEach((item) => {
  item.addEventListener("click", () => {
    page.append(
      popupElement.generatePopup(
        item.querySelector(".methodology__block_image"),
        item.querySelector(".methodology__block_title"),
        item.querySelector(".methodology__block_text")
      )
    );
  });
});

aboutProjectBlock.addEventListener("click", () => {
  page.append(
    popupElement.generatePopup(
      aboutProjectImage,
      aboutProjectTitle,
      aboutProjectText
    )
  );
});

aboutBlock.addEventListener("click", () => {
  page.append(
    popupElement.generatePopup(aboutBlockImage, aboutTitle, aboutBlockText)
  );
});
