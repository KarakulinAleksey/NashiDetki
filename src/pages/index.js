import "./index.css";
import { blockInfoGroups } from "../utils/block-info-groups.js";
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
  aboutProject,
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

// groupsBlockImage.forEach((item, i)=>{
//   item.src = blockInfoGroups[i].groupImage;
// })

//Добавляю Названия и текст к карточкам на главную страницу
groupsBlockTitle.forEach((item, i) => {
  item.textContent = blockInfoGroups[i].groupTitle;
});

groupsBlockText.forEach((item, i) => {
  item.textContent = blockInfoGroups[i].groupText;
});

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
