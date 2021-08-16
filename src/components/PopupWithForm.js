import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, callBack) {
        super(popupSelector);
        this._callBack = callBack
        this._formValues = {};
        //this._formValuesArr = [];
        this._formElement = this._popup.querySelector('.popup__container');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
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
            this._callBack(this._valuesArr);
            this.close();
          }); 
    }

    close(){
      super.close() 
        this._formElement.reset();
    }
}