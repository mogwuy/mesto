import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, formElement, callBack) {
        super(popupSelector);
        this._formElement = formElement;
        this._callBack = callBack
        this._formValues = {};
        this._formValuesArr = [];
        this._inputList = document.querySelectorAll('.popup__input');
    }

    _getInputValues(){
      this._inputList.forEach(input => this._formValues[input.name] = input.value);
      this._formValuesArr.splice(0, 5, this._formValues); //Решение что бы передавать массив, а не несколько переменных, Сплайс для того что бы не дублировалось.
      return this._formValuesArr;
    }

    setEventListeners(){   
          super.setEventListeners()   
          this._formElement.addEventListener('submit',  (evt) => { 
            evt.preventDefault(); 
            this._valuesArr = this._getInputValues();
            console.log(this._valuesArr)
            this._callBack(this._valuesArr);
            this.close();
          }); 
    }

    close(){
      super.close() 
        this._formElement.reset();
    }
}