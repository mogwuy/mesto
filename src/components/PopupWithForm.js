import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, uploader, data) {
        super(popupSelector);
        this._uploader = uploader;
        this._formValues = data;
        this._formElement = this._popup.querySelector('.popup__container');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._profileAvatarImage = document.querySelector('.profile__avatar-image');
    }

    _getInputValues(){
      this._inputList.forEach(input => this._formValues[input.name] = input.value);
      return this._formValues;
    }

    setEventListeners(){   
          super.setEventListeners()   
          this._formElement.addEventListener('submit',  (evt) => { 
            evt.preventDefault(); 
            this._valuesArr = this._getInputValues();
            this._uploader(this._valuesArr, this._formElement);
          }); 
    }

    close(){
      super.close() 
        this._formElement.reset();
    }
}