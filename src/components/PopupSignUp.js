import { popupRegistration,
         popupRegistrationClose,
         popupRegistrationInputName,
         popupRegistrationInputEmail,
         popupRegistrationInputPassword,
         popupRegistrationButtonSubmit } from '../utils/var.js';

import { regSignIn, regSignUp } from './Api.js';

export default class PopupRegistration {
  constructor() {
    this._popupRegistration = popupRegistration;
    this._popupRegistrationClose = popupRegistrationClose;
    this._popupRegistrationButtonSubmit = popupRegistrationButtonSubmit
  }

  open() {
    this._popupRegistration.classList.add('popup-registration__swow');
  }

  close() {
    this._popupRegistration.classList.remove('popup-registration__swow');
  }

  setEventListenerButtonClose() {
    this._popupRegistrationClose.addEventListener('click', ()=>{
      this.close();
    })
  }

  setEventListenerButtonSubmit() {
    this._popupRegistrationButtonSubmit.addEventListener('click', ()=>{
      regSignUp(popupRegistrationInputName.value,
                popupRegistrationInputEmail.value,
                popupRegistrationInputPassword.value);
    })
  }
}
