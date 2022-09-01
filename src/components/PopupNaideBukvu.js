import gifConfetti from "../image/confetti.gif";

export default class PopupNaideBukvu {
  constructor(popupTemplate, adressImageObject) {
    this._popupTemplate = popupTemplate;
    this._adressImageObject = adressImageObject;
    this._popupElement = this._getTemplatePopup();
    this._popupContainer = this._popupElement.querySelector(
      ".popup-test-sostavslovo__container"
    );
    this._popupButtonExit = this._popupElement.querySelector(
      ".popup-test-sostavslovo__button-exit"
    );
    this._popupSelectBlock = this._popupElement.querySelector(
      ".popup-test-sostavslovo__block-select"
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
    this._popupSlovoCheck = this._popupElement.querySelector(
      ".popup-test-sostavslovo__slovo-check"
    );
    this._popupStatusCheck = this._popupElement.querySelector(
      ".popup-test-sostavslovo__status-check"
    );

    this._slovo = "";
    this._partLetter = [
      "А",
      "Е",
      "Ё",
      "И",
      "О",
      "У",
      "Ы",
      "Э",
      "Ю",
      "Я",
    ];
    this._letter = [
      "а",
      "е",
      "ё",
      "и",
      "о",
      "у",
      "ы",
      "э",
      "ю",
      "я",
      "ч",
      "с",
    ];

  }

  _getTemplatePopup() {
    const popup = this._popupTemplate.content
      .querySelector(".popup-test-sostavslovo")
      .cloneNode(true);
    return popup;
  }

  _setElementPartImage(imageSrc){
    let partImage = document.createElement("img");
    partImage.src = imageSrc;
    partImage.className = "popup-test-sostavslovo__part-image";
    partImage.alt = "буква";
    return partImage;
  }

  _generateRandomPartImage(){
    let randomNumber = Math.floor(Math.random() * 10);
    return this._partLetter[randomNumber];
  }

  _renderElementPartImage(adressImageObject){
    const partImage = this._popupContainer.querySelector('.popup-test-sostavslovo__part-image');
    if (partImage) {
      // console.log('partImage', 'true');
      let randomNumber = this._generateRandomPartImage();
      // this._popupSelectBlock.after(this._setElementPartImage(adressImageObject));
      this._partImage.replaceWith(this._setElementImage(adressImageObject[randomNumber], randomNumber, "popup-test-sostavslovo__part-image"));
    } else {
      // console.log("partImage", 'false');
      let randomNumber = this._generateRandomPartImage();
      // this._popupSelectBlock.after(this._setElementPartImage(adressImageObject));
      this._popupSelectBlock.after(this._setElementImage(adressImageObject[randomNumber], randomNumber, "popup-test-sostavslovo__part-image"));
    }

  }

  _setElementImageBlock() {
    let divImageBlock = document.createElement("div");
    divImageBlock.className = "popup-test-sostavslovo__block-image";
    return divImageBlock;
  }

  _setElementImage(imageAdress, nameImage, className) {
    let img = document.createElement("img");
    // img.className = "popup-test-sostavslovo__image";
    img.className = className;
    img.src = imageAdress;
    img.alt = `карточка со слогом ${nameImage}`;
    img.id = nameImage || "";
    return img;
  }

  _renderElementImageBlock() {
    this._popupSelectBlock.after(this._setElementImageBlock());
  }

  _renderElementImage(elementImage, adressImageObject, checkWord) {
    this._popupBlockImages = this._popupElement.querySelector(
      ".popup-test-sostavslovo__block-image"
    );
    // for (let key in adressImageObject) {
    //   if (
    //     key === checkWord[0] ||
    //     key === checkWord[1] ||
    //     key === checkWord[2] ||
    //     key === checkWord[3] ||
    //     key === checkWord[4] ||
    //     key === checkWord[5] ||
    //     key === checkWord[6] ||
    //     key === checkWord[7] ||
    //     key === checkWord[8] ||
    //     key === checkWord[9] ||
    //     key === checkWord[10] ||
    //     key === checkWord[11]
    //   ) {
    //     this._popupBlockImages.prepend(
    //       elementImage(
    //         adressImageObject[key],
    //         key,
    //         "popup-test-sostavslovo__image"
    //       )
    //     );
    //     const img = this._popupElement.querySelector(
    //       ".popup-test-sostavslovo__image"
    //     );
    //     // console.log(img);
    //     this._setEventListenerImage(img);
    //   }
    // }
    const sortCheckWord = checkWord.sort(() => Math.random() - 0.5);
    sortCheckWord.forEach((item)=>{
      this._popupBlockImages.prepend(
              elementImage(
                adressImageObject[item],
                item,
                "popup-test-sostavslovo__image"
              )
            );
            const img = this._popupElement.querySelector(
              ".popup-test-sostavslovo__image"
            );
            // console.log(img);
            this._setEventListenerImage(img);
    })
  }


  _addSlog(slog) {
    this._slovo = slog;
    // console.log(this._slovo);
  }

  _removeSlog(slog) {
    this._slovo = this._slovo.replace(slog, "");
    // console.log(this._slovo);
  }

  _setEventListenerImage(elementImage) {
    elementImage.addEventListener("click", (evt) => {
      const evtTarget = evt.target;
      this._images = this._popupElement.querySelectorAll(
        ".popup-test-sostavslovo__image"
      );
      this._images.forEach((element) => {
        element.classList.remove("opacity-low");
      });
      evtTarget.classList.toggle("opacity-low");
      if (elementImage.classList.contains("opacity-low")) {
        this._addSlog(evtTarget.id);
      } else {
        this._removeSlog(evtTarget.id);
      }
      // console.log(this._slovo);
    });
  }

  _setEventListenerButtonExit() {
    this._popupButtonExit.addEventListener("click", () => {
      this._slovo = "";
      const popupDel = this._popupButtonExit.closest(".popup-test-sostavslovo");
      popupDel.remove();
    });
  }

  _renderImageKonfetti() {
    this._popupContainer.append(
      this._setElementImage(gifConfetti, "", "gif-konfetti")
    );
  }

  _setEventListenerButtonCheck() {
    this._popupButtonCheck.addEventListener("click", () => {
      this._images = this._popupElement.querySelectorAll(
        ".popup-test-sostavslovo__image"
      );
      this._partImage = document.querySelector(".popup-test-sostavslovo__part-image");
      this._images.forEach((element) => {
        element.classList.remove("opacity-low");
      });
      let valSelect = this._partImage.id.toLowerCase();
      // console.log('valSelect', valSelect);
      this._popupSlovoCheck.innerHTML = `Твоя буква: ${this._slovo}`;
      if (valSelect === this._slovo) {
        // console.log("Ответ правильный!");
        this._popupStatusCheck.innerHTML = 'Ответ правильный!';
        this._renderImageKonfetti();
        this._popupKonfetti =
          this._popupContainer.querySelector(".gif-konfetti");
        setTimeout(() => {
          this._popupKonfetti.remove();
        }, 3000);
        this._renderElementPartImage(this._adressImageObject);
        this._slovo = "";
      } else {
        // console.log("Ваш ответ не правильный!");
        this._popupStatusCheck.innerHTML = 'Ответ не правильный!';
        this._popupContainer.classList.add(
          "popup-test-sostavslovo__container-animation"
        );
        setTimeout(() => {
          this._popupContainer.classList.remove(
            "popup-test-sostavslovo__container-animation"
          );
        }, 1500);

        this._slovo = "";
      }
    });
  }

  _editPositionElement(){
    const blockCheck = this._popupContainer.querySelector('.popup-test-sostavslovo__block-check');
    const blockImage = this._popupContainer.querySelector('.popup-test-sostavslovo__block-image');
    const blockSelect = this._popupContainer.querySelector('.popup-test-sostavslovo__block-select');

    blockCheck.style.gridRow = "4/5";
    blockImage.style.gridRow = "3/4";

  }

  generatePopup() {
    this._popupTitle.textContent = "Какая буква спряталась?";
    this._getTemplatePopup();
    this._renderElementImageBlock();
    this._renderElementPartImage(this._adressImageObject);
    this._renderElementImage(
      this._setElementImage,
      this._adressImageObject,
      this._letter
    );
    this._editPositionElement();
    this._setEventListenerButtonExit();
    this._setEventListenerButtonCheck();
    return this._popupElement;
  }
}
