import Popup from './Popup.js'
export default class PopupWithDel extends Popup {
    constructor(popupSelector, callBack) {
        super(popupSelector);
        this._submitDelButton = this._popup.querySelector('#submitdel');
        this._callBack = callBack;
    }

    open(elem, cardId){
        super.open();
        this._element = elem;
        this._cardId= cardId;        
    }

    setEventListeners(){   
        super.setEventListeners();  
        //Через сабмит никак не хотело работать, а через клик все замечательно.
        this._submitDelButton.addEventListener('click',  (evt) => {
          evt.preventDefault(); 
          this._element.remove();
          this._callBack(this._cardId);
          super.close() 
        });
    }
}