export default class PopupSostavSlovo {
  constructor(popupTemplate, adressImageObject) {
    this._popupTemplate = popupTemplate;
    this._adressImageObject = adressImageObject;
    this._popupElement = this._getTemplatePopup();
    this._popupButtonExit = this._popupElement.querySelector(
      ".popup-test-sostavslovo__button-exit"
    );
    this._popupBlockImages = this._popupElement.querySelector(
      ".popup-test-sostavslovo__block-image"
    );
    this._popupTitle = this._popupElement.querySelector(
      ".popup-test-sostavslovo__title"
    );
    this._image = this._popupElement.querySelector(
      ".popup-test-sostavslovo__image"
    );
    this._popupButtonCheck = this._popupElement.querySelector(
      ".popup-test-sostavslovo__button-check"
    );
    this._popupSelect = this._popupElement.querySelector(
      ".popup-test-sostavslovo__select"
    );
    this._popupSlovoCheck = this._popupElement.querySelector('.popup-test-sostavslovo__slovo-check');
    this._slovo = "";
  }

  _getTemplatePopup() {
    const popup = this._popupTemplate.content
      .querySelector(".popup-test-sostavslovo")
      .cloneNode(true);
    return popup;
  }

  _setElementImage(imageAdress, nameImage) {
    let img = document.createElement("img");
    img.className = "popup-test-sostavslovo__image";
    img.src = imageAdress;
    img.alt = `карточка со слогом ${nameImage}`;
    img.id = nameImage;
    return img;
  }

  _renderElementImage(elementImage, adressImageObject) {
    for (let key in adressImageObject) {
      if (
        key === "ва" ||
        key === "за" ||
        key === "фа" ||
        key === "на" ||
        key === "во" ||
        key === "зо" ||
        key === "вы" ||
        key === "зы" ||
        key === "ву" ||
        key === "ве" ||
        key === "зе" ||
        key === "зу"
      ) {
        this._popupBlockImages.prepend(
          elementImage(adressImageObject[key], key)
        );
        const img = this._popupElement.querySelector(
          ".popup-test-sostavslovo__image"
        );
        console.log(img);
        this._setEventListenerImage(img);
      }
    }
  }

  _addSlog(slog){
    this._slovo = this._slovo + slog;
  }

  _setEventListenerImage(elementImage) {
    elementImage.addEventListener("click", () => {
      let slog = elementImage.id;
      this._addSlog(slog);
      console.log(this._slovo);

    });
  }

  _setEventListenerButtonExit() {
    this._popupButtonExit.addEventListener("click", () => {
      const popupDel = this._popupButtonExit.closest(".popup-test-sostavslovo");
      popupDel.remove();
    });
  }

  _setEventListenerButtonCheck() {
    this._popupButtonCheck.addEventListener("click", () => {
      let valSelect = this._popupSelect.value;
      console.log(valSelect);
      this._popupSlovoCheck.innerHTML = `Ваше слово: ${this._slovo}`;
      if (valSelect === this._slovo){
        console.log("Ответ правильный!");
      } else {
        console.log("Ваш ответ не правильный!");
      }
    });
  }

  generatePopup(itemTitle) {
    this._popupTitle.textContent = itemTitle.textContent;
    this._getTemplatePopup();
    this._setEventListenerButtonExit();
    this._setEventListenerButtonCheck();
    this._renderElementImage(this._setElementImage, this._adressImageObject);
    console.log(this._image);
    return this._popupElement;
  }
}
