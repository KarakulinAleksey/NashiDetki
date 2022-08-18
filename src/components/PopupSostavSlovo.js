import gifConfetti from "../image/confetti.gif";

export default class PopupSostavSlovo {
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
    this._popupSelect = this._popupElement.querySelector(
      ".popup-test-sostavslovo__select"
    );
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
    this._lypa = [
      "лу",
      "па",
      "по",
      "ла",
      "ба",
      "ло",
      "бо",
      "ле",
      "ку",
      "га",
      "кю",
      "лю",
    ];
    this._koty = [
      "ко",
      "ты",
      "ды",
      "ка",
      "ки",
      "ти",
      "ди",
      "го",
      "ку",
      "га",
      "сы",
      "те",
    ];
    this._zima = [
      "зи",
      "ма",
      "си",
      "мо",
      "му",
      "за",
      "зо",
      "зу",
      "ми",
      "ме",
      "се",
      "та",
    ];
    this._vaza = [
      "ва",
      "за",
      "фа",
      "зя",
      "во",
      "зо",
      "вы",
      "зы",
      "ву",
      "зу",
      "ве",
      "зе",
    ];
    this._soroka = [
      "со",
      "ро",
      "ка",
      "са",
      "ра",
      "су",
      "ко",
      "се",
      "сю",
      "рю",
      "ке",
      "рэ",
    ];
    this._rodina = [
      "ро",
      "ди",
      "на",
      "ра",
      "де",
      "но",
      "ду",
      "ре",
      "ти",
      "по",
      "пе",
      "не",
    ];
    this._bereoza = [
      "бе",
      "рё",
      "за",
      "би",
      "бу",
      "ри",
      "зо",
      "зе",
      "бю",
      "ра",
      "зю",
      "ба",
    ];
    this._derevo = [
      "де",
      "ре",
      "во",
      "ди",
      "ри",
      "ва",
      "ра",
      "ве",
      "ро",
      "вэ",
      "дэ",
      "ге",
    ];
    this._rybalka = [
      "ры",
      "ба",
      "л",
      "ка",
      "ре",
      "бо",
      "ли",
      "ко",
      "б",
      "р",
      "к",
      "ке",
    ];
    this._molotok = [
      "мо",
      "ло",
      "то",
      "к",
      "ма",
      "ла",
      "та",
      "г",
      "го",
      "ко",
      "м",
      "ле",
    ];
    this._tractor = [
      "т",
      "ра",
      "к",
      "то",
      "р",
      "д",
      "ро",
      "г",
      "те",
      "ко",
      "ре",
      "п",
    ];
    this._pirozhok = [
      "пи",
      "ро",
      "жо",
      "к",
      "пе",
      "ра",
      "жу",
      "г",
      "жи",
      "пу",
      "жа",
      "ри",
    ];
  }

  _getTemplatePopup() {
    const popup = this._popupTemplate.content
      .querySelector(".popup-test-sostavslovo")
      .cloneNode(true);
    return popup;
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
    for (let key in adressImageObject) {
      if (
        key === checkWord[0] ||
        key === checkWord[1] ||
        key === checkWord[2] ||
        key === checkWord[3] ||
        key === checkWord[4] ||
        key === checkWord[5] ||
        key === checkWord[6] ||
        key === checkWord[7] ||
        key === checkWord[8] ||
        key === checkWord[9] ||
        key === checkWord[10] ||
        key === checkWord[11]
      ) {
        this._popupBlockImages.prepend(
          elementImage(
            adressImageObject[key],
            key,
            "popup-test-sostavslovo__image"
          )
        );
        const img = this._popupElement.querySelector(
          ".popup-test-sostavslovo__image"
        );
        // console.log(img);
        this._setEventListenerImage(img);
      }
    }
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
      console.log(this._slovo);
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
    this._popupSelect.addEventListener("change", () => {
      this._popupBlockImages = this._popupElement.querySelector(
        ".popup-test-sostavslovo__block-image"
      );
      this._slovo = "";
      this._popupSlovoCheck.innerHTML = `Ваше слово: ${this._slovo}`;
      this._popupStatusCheck.innerHTML = '';
      console.log(this._popupSelect.value);
      if (this._popupSelect.value === "лупа") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._lypa
        );
      } else if (this._popupSelect.value === "коты") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._koty
        );
      } else if (this._popupSelect.value === "зима") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._zima
        );
      } else if (this._popupSelect.value === "ваза") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._vaza
        );
      } else if (this._popupSelect.value === "сорока") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._soroka
        );
      } else if (this._popupSelect.value === "родина") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._rodina
        );
      } else if (this._popupSelect.value === "берёза") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._bereoza
        );
      } else if (this._popupSelect.value === "дерево") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._derevo
        );
      } else if (this._popupSelect.value === "рыбалка") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._rybalka
        );
      } else if (this._popupSelect.value === "молоток") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._molotok
        );
      } else if (this._popupSelect.value === "трактор") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._tractor
        );
      } else if (this._popupSelect.value === "пирожок") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._pirozhok
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
      console.log(valSelect);
      this._popupSlovoCheck.innerHTML = `Твоё слово: ${this._slovo}`;
      if (valSelect === this._slovo) {
        console.log("Ответ правильный!");
        this._popupStatusCheck.innerHTML = 'Ответ правильный!';
        this._renderImageKonfetti();
        this._popupKonfetti =
          this._popupContainer.querySelector(".gif-konfetti");
        setTimeout(() => {
          this._popupKonfetti.remove();
        }, 3000);
        this._slovo = "";
      } else {
        console.log("Ваш ответ не правильный!");
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

  generatePopup(itemTitle) {
    this._popupTitle.textContent = itemTitle.textContent;
    this._getTemplatePopup();
    this._setEventListenerButtonExit();
    this._setEventListenerSelect();
    this._setEventListenerButtonCheck();
    this._renderElementImageBlock();
    this._renderElementImage(
      this._setElementImage,
      this._adressImageObject,
      this._lypa
    );
    return this._popupElement;
  }
}
