import { popupRegistration,
         popupFormRegistration,
         popupRegistrationClose,
         popupFormRegistrationContainer,
         popupRegistrationButtonSubmit } from '../utils/var.js';

import { regSignUp } from './Api.js';

export default class PopupRegistration {
  constructor() {
    this._popupRegistration = popupRegistration;
    this._popupFormRegistrationContainer = popupFormRegistrationContainer;
    this._popupFormRegistration = popupFormRegistration;
    this._popupRegistrationClose = popupRegistrationClose;
    // this._popupRegistrationButtonSubmit = popupRegistrationButtonSubmit
  }

  open() {
    this._popupRegistration.classList.add('popup-registration__swow');
  }

  close() {
    this._popupRegistration.classList.remove('popup-registration__swow');
    this._popupFormRegistration.reset();
  }

  setEventListenerButtonClose() {
    this._popupRegistrationClose.addEventListener('click', ()=>{
      this.close();
    })
    this._popupRegistration.addEventListener('click', (evt) => {
      if(!this._popupFormRegistrationContainer.contains(evt.target)){
        this.close();
      }
    })
  }

  setEventListenerFormRegistrationSubmit() {
    // this._popupRegistrationButtonSubmit.addEventListener('submit', (evt)=>{
      this._popupFormRegistration.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      // regSignUp(popupRegistrationInputName.value,
      //           popupRegistrationInputEmail.value,
      //           popupRegistrationInputPassword.value);
      regSignUp(this._popupFormRegistration.name.value,
                this._popupFormRegistration.email.value,
                this._popupFormRegistration.password.value,);
    })
  }
}
