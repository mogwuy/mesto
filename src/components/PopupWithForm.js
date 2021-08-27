import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, callBack, uploader, renderLoadingForm) {
        super(popupSelector);
        this._callBack = callBack;
        this._uploader = uploader;
        this._formValues = {};
        this._renderLoadingForm = renderLoadingForm;
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
            this._renderLoadingForm(true)
            this._valuesArr = this._getInputValues();
            this._uploader(this._valuesArr, this._callBack, this._popup); 
            this.close();
          }); 
    }

    close(){
      super.close() 
        this._formElement.reset();
    }
}