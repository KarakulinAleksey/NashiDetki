import gifConfetti from "../image/confetti.gif";

export default class PopupNaideSlog {
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
    // this._popupSelect = this._popupElement.querySelector(
    //   ".popup-test-sostavslovo__select"
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
      'А',
      'О',
      'У',
      'Ы',
      'Я',
      'Ю',
      'И',
      'Е',
      'Ё'
    ]

    this._a = [
      "ба",
      "бо",
      "ма",
      "та",
      "ку",
      "ра",
      "за",
      "го",
      "ла",
      "до",
      "да",
      "жа",
    ];
    this._o = [
      "ко",
      "мо",
      "то",
      "ту",
      "зо",
      "бо",
      "ва",
      "во",
      "жа",
      "жо",
      "цо",
      "ро",
    ];
    this._u = [
      "фу",
      "шу",
      "му",
      "пу",
      "ты",
      "ру",
      "ма",
      "то",
      "ту",
      "ку",
      "бу",
      "за",
    ];
    this._y = [
      "бы",
      "мы",
      "по",
      "пы",
      "му",
      "ка",
      "вы",
      "хы",
      "жу",
      "лы",
      "ты",
      "кы",
    ];
    this._ya = [
      "пя",
      "ря",
      "фя",
      "ма",
      "ля",
      "кя",
      "тя",
      "бя",
      "зя",
      "ту",
      "на",
      "ня",
    ];
    this._yu = [
      "тю",
      "лю",
      "фю",
      "кя",
      "вя",
      "зю",
      "мю",
      "пю",
      "дю",
      "кю",
      "ра",
      "рю",
    ];
    this._i = [
      "ми",
      "фи",
      "тю",
      "бя",
      "ли",
      "ку",
      "ла",
      "пи",
      "ри",
      "си",
      "зи",
      "ти",
    ];
    this._e = [
      "се",
      "ку",
      "ке",
      "ме",
      "пе",
      "ле",
      "ве",
      "бе",
      "хе",
      "ху",
      "не",
      "зе",
    ];
    this._eya = [
      "кё",
      "мё",
      "пё",
      "зё",
      "се",
      "сё",
      "ти",
      "те",
      "тё",
      "нё",
      "бё",
      "вё",
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
    this._slovo = this._slovo + slog + ' ';
  }

  _removeSlog(slog) {
    this._slovo = this._slovo.replace(slog + " ", "");
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
      this._popupSlovoCheck.innerHTML = `Твои слоги: ${this._slovo}`;
      this._popupStatusCheck.innerHTML = '';
      // console.log(this._popupSelect.value);
      if (this._popupSelect.value === "А") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._a
        );
      } else if (this._popupSelect.value === "О") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._o
        );
      } else if (this._popupSelect.value === "У") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._u
        );
      } else if (this._popupSelect.value === "Ы") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._y
        );
      } else if (this._popupSelect.value === "Я") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._ya
        );
      } else if (this._popupSelect.value === "Ю") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._yu
        );
      } else if (this._popupSelect.value === "И") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._i
        );
      } else if (this._popupSelect.value === "Е") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._e
        );
      } else if (this._popupSelect.value === "Ё") {
        this._popupBlockImages.remove();
        this._renderElementImageBlock();
        this._renderElementImage(
          this._setElementImage,
          this._adressImageObject,
          this._eya
        );
      }
    });
  }

  _renderImageKonfetti() {
    this._popupContainer.append(
      this._setElementImage(gifConfetti, "", "gif-konfetti")
    );
  }

  _arrFilterSlog(arrSlog, valSelect){
    // console.log('arrSlog', arrSlog);
    const arrFilterSlog = arrSlog.filter((item)=>{
      return item.includes(valSelect.toLowerCase());
  })
    return arrFilterSlog;
  }

  _arrFilterSelect(valSelect){
    switch (valSelect){
      case 'А':
        return this._arrFilterSlog(this._a, valSelect);
      case 'О':
        return this._arrFilterSlog(this._o, valSelect);
      case 'У':
        return this._arrFilterSlog(this._u, valSelect);
      case 'Ы':
        return this._arrFilterSlog(this._y, valSelect);
      case 'Я':
        return this._arrFilterSlog(this._ya, valSelect);
      case 'Ю':
        return this._arrFilterSlog(this._yu, valSelect);
      case 'И':
        return this._arrFilterSlog(this._i, valSelect);
      case 'Е':
        return this._arrFilterSlog(this._e, valSelect);
      case 'Ё':
        return this._arrFilterSlog(this._eya, valSelect);
    }
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
      // console.log('valSelect', valSelect);
      this._popupSlovoCheck.innerHTML = `Твои слоги: ${this._slovo}`;
      let arrSlovo = this._slovo.slice(0, -1).split(' ');
      // console.log('arrSlovo', this._arrFilterSlog(arrSlovo, valSelect));
      // console.log('arrSelect', this._arrFilterSelect(valSelect));
      // console.log(arrSlovo.length <= this._arrFilterSelect(valSelect).length);

      if ((this._arrFilterSlog(arrSlovo, valSelect).length === this._arrFilterSelect(valSelect).length) && (arrSlovo.length <= this._arrFilterSelect(valSelect).length)) {
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
    this._popupTitle.textContent = 'Найди все слоги с буквой';
    this._getTemplatePopup();

    this._renderElementSelect();
    // this._renderElementOptgroup();
    this._renderElementOption();
    this._renderElementImageBlock();
    this._renderElementImage(
      this._setElementImage,
      this._adressImageObject,
      this._a
    );
    this._setEventListenerButtonExit();
    this._setEventListenerSelect();
    this._setEventListenerButtonCheck();
    return this._popupElement;
  }
}
