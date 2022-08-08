
export default class PopupSostavSlovo{
  constructor(
    popupTemplate
  ) {
    this._popupTemplate = popupTemplate;
    this._popupElement = this._getTemplatePopup();
    this._popupButtonExit = this._popupElement.querySelector('.popup-test-sostavslovo__button-exit');
    // this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupTitle = this._popupElement.querySelector('.popup-test-sostavslovo__title');
    // this._popupText = this._popupElement.querySelector('.popup__text');
  }

  _getTemplatePopup(){
    const popup = this._popupTemplate.content
      .querySelector('.popup-test-sostavslovo')
      .cloneNode(true);
    return popup;
  }

  _setEventListenerButtonExit(){
    this._popupButtonExit.addEventListener('click', ()=>{
      const popupDel = this._popupButtonExit.closest('.popup-test-sostavslovo');
      popupDel.remove();
    })
  }

  generatePopup(itemTitle){
  //  this._popupImage.src = itemImage.src;
   this._popupTitle.textContent = itemTitle.textContent;
  //  this._popupText.textContent = itemText.textContent;
   this._getTemplatePopup();
   this._setEventListenerButtonExit();
   return this._popupElement;
  }
}
