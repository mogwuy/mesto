import Popup from './Popup.js'
import {mestoInput, scrInput, formElementAdd} from '../utils/constants.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, formElement, callBack) {
        super(popupSelector);
        this._formElement = formElement;
        this._callBack = callBack
    }

    open(){
        this._popup.classList.add('popup_opened');
    }

    _getInputValues(){
       const cardElement = [{
            name: mestoInput.value,
            link: scrInput.value,
            alt: mestoInput.value
          }];
        return cardElement;
    }

    setEventListeners(){
        //Для одного попапа с формами один слушатель, для другого попапа другой
        if (this._formElement == formElementAdd) {
          this._formElement.addEventListener('submit',  (evt) => { 
            evt.preventDefault(); 
            this._cardElement = this._getInputValues();
            this._callBack(this._cardElement);
            this.close();
          }); 
        }
        else {
          this._formElement.addEventListener('submit',  (evt) => { 
            evt.preventDefault(); 
            this._callBack();
            this.close();
          });
        }
        //Общий слушатель
        super.setEventListeners()
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', super._handleEcsClose); 
        this._formElement.reset();
    }
}