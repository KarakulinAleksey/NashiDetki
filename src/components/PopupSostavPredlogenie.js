import gifConfetti from "../image/confetti.gif";

export default class PopupSostavPredlogenie {
  constructor(popupTemplate, adressImageObject) {
    this._popupTemplate = popupTemplate;
    this._adressImageObject = adressImageObject;
    this._popupElement = this._getTemplatePopup();
    this._popupContainer = this._popupElement.querySelector(
      ".popup-test-sostavslovo__container"
    );
    // this._popupKonfetti = this._popupElement.querySelector(".gif-konfetti");
    this._popupButtonExit = this._popupElement.querySelector(
      ".popup-test-sostavslovo__button-exit"
    );
    this._popupSelectBlock = this._popupElement.querySelector(
      ".popup-test-sostavslovo__block-select"
    );
    // this._popupSelect = this._popupElement.querySelector(
    //   ".popup-test-sostavslovo__select"
    // );
    // this._popupBlockImages = this._popupElement.querySelector(
    //   ".popup-test-sostavslovo__block-image"
    // );
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

    this._optionSelect = [
      'собака лает',
      'мышка пищит',
      'корова мычит',
      'волк воет',
    ]

    this._dog = [
      "со",
      "са",
      "ба",
      "бо",
      "ка",
      "ку",
      "ле",
      "ла",
      "и",
      "е",
      "т",
      " ",
    ];
    this._mouse = [
      "мы",
      "ми",
      "ш",
      "ши",
      "пи",
      "пе",
      "щи",
      "д",
      "т",
      "ка",
      " ",
      "ма",
    ];
    this._cow = [
      "ко",
      "ка",
      "ро",
      "ру",
      "ва",
      "во",
      "мы",
      "ми",
      "чи",
      " ",
      "т",
      "д",
    ];
    this._wolf = [
      "во",
      "ву",
      "л",
      "к",
      "е",
      "во",
      "т",
      " ",
      "и",
      "д",
      "ве",
      "бы",
    ];

  }

  _getTemplatePopup() {
    const popup = this._popupTemplate.content
      .querySelector(".popup-test-sostavslovo")
      .cloneNode(true);
    return popup;
  }

  _setElementSelect(){
    let select = document.createElement("select");
    select.name = "slovo";
    select.className = "popup-test-sostavslovo__select";
    return select;
  }

  // _setElementOptgroup(){
  //   let optgroup = document.createElement("optgroup");
  //   optgroup.label = "Уровень ";
  //   return optgroup;
  // }

  _setElementOption(optionValue, optionInnerHTML){
    let option = document.createElement("option");
    option.value = optionValue;
    option.innerHTML = optionInnerHTML;
    return option;
  }

  _renderElementSelect(){
    this._popupTitle.after(this._setElementSelect());
  }

  _renderElementOptgroup(){

  }

  _renderElementOption(){
    this._elementSelect = this._popupElement.querySelector('.popup-test-sostavslovo__select');
    // this._elementSelect.append(this._setElementOptgroup());
    this._optionSelect.forEach((item)=>{
      this._elementSelect.append(this._setElementOption(item, item));
    })
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
    this._slovo = this._slovo + slog;
  }

  _removeSlog(slog) {
    this._slovo = this._slovo.replace(slog, "");
  }

  _setEventListenerImage(elementImage) {
    elementImage.addEventListener("click", (evt) => {
      const evtTarget = evt.target;
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

  _setEventListenerSelect() {
    this._popupSelect = this._popupElement.querySelector(
      ".popup-test-sostavslovo__select"
    );
    this._popupSelect.addEventListener("change", () => {
      this._popupBlockImages = this._popupElement.querySelector(
        ".popup-test-sostavslovo__block-image"
      );
      this._slovo = "";
      this._popupSlovoCheck.innerHTML = `Твоё предложение: ${this._slovo}`;
      this._popupStatusCheck.innerHTML = '';
      // console.log(this._popupSelect.value);
      if (this._popupSelect.value === "собака лает") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._dog
        );
      } else if (this._popupSelect.value === "мышка пищит") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._mouse
        );
      } else if (this._popupSelect.value === "корова мычит") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._cow
        );
      } else if (this._popupSelect.value === "волк воет") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._wolf
        );
      }
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

      this._images.forEach((element) => {
        element.classList.remove("opacity-low");
      });
      let valSelect = this._popupSelect.value;
      // console.log(valSelect);
      this._popupSlovoCheck.innerHTML = `Твоё предложение: ${this._slovo}`;
      if (valSelect === this._slovo) {
        // console.log("Ответ правильный!");
        this._popupStatusCheck.innerHTML = 'Ответ правильный!';
        this._renderImageKonfetti();
        this._popupKonfetti =
          this._popupContainer.querySelector(".gif-konfetti");
        setTimeout(() => {
          this._popupKonfetti.remove();
        }, 3000);
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

  generatePopup() {
    this._popupTitle.textContent = "Составь предложение";
    this._getTemplatePopup();
    this._renderElementSelect();
    // this._renderElementOptgroup();
    this._renderElementOption();
    this._renderElementImageBlock();
    this._renderElementImage(
      this._setElementImage,
      this._adressImageObject,
      this._dog
    );
    this._setEventListenerButtonExit();
    this._setEventListenerSelect();
    this._setEventListenerButtonCheck();
    return this._popupElement;
  }
}
