import { popupLogIn,
         popupFormLogIn,
         popupLogInClose,
         popupFormLogInContainer,
         popupLogInButtonSubmit } from '../utils/var.js';

import { regSignIn } from './Api.js';

export default class PopupLogIn {
  constructor() {
    this._popupLogIn = popupLogIn;
    this._popupFormLogInContainer = popupFormLogInContainer;
    this._popupFormLogIn = popupFormLogIn;
    this._popupLogInClose = popupLogInClose;
    // this._popupLogInButtonSubmit = popupLogInButtonSubmit
  }

  open() {
    console.log('openPopupLogIn');
    this._popupLogIn.classList.add('popup-logIn__swow');
  }

  close() {
    this._popupLogIn.classList.remove('popup-logIn__swow');
    this._popupFormLogIn.reset();
  }

  setEventListenerButtonClose() {
    this._popupLogInClose.addEventListener('click', ()=>{
      this.close();
    })
    this._popupLogIn.addEventListener('click', (evt) => {
      if(!this._popupFormLogInContainer.contains(evt.target)){
        this.close();
      }
    })
  }

  setEventListenerFormLogInSubmit() {
    // this._popupLogInButtonSubmit.addEventListener('submit', (evt)=>{
      this._popupFormLogIn.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      // regSignUp(popupLogInInputName.value,
      //           popupLogInInputEmail.value,
      //           popupLogInInputPassword.value);
      regSignIn(this._popupFormLogIn.email.value,
                this._popupFormLogIn.password.value,);
      this.close();
    })
  }
}
