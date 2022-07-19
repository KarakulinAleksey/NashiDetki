// import { popupButtonExit } from "../utils/var.js";

export default class Popup{
  constructor(
    popupTemplate
  ) {
    this._popupTemplate = popupTemplate;
    this._popupElement = this._getTemplatePopup();

    this._popupButtonExit = this._popupElement.querySelector('.popup__button-exit');
    // this._popup = page.querySelector('.popup');
    // this._popupButtonExit = popup.querySelector('.popup__button-exit');
  }

  _getTemplatePopup(){
    const popup = this._popupTemplate.content
      .querySelector('.popup')
      .cloneNode(true);
    return popup;
  }

  _setEventListenerButtonExit(){
    this._popupButtonExit.addEventListener('click', ()=>{
      const popupDel = this._popupButtonExit.closest('.popup');
      popupDel.remove();
    })
  }

  generatePopup(){
   this._getTemplatePopup();
   this._setEventListenerButtonExit();
   return this._popupElement;
  }
}
