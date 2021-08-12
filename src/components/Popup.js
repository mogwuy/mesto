export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
    }

    open(){
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEcsClose); 
    }

    _handleEcsClose = (evt) => {
        if (evt.key === 'Escape') {
          this.close();
        }
    }

    setEventListeners(){
        document.addEventListener('keydown', this._handleEcsClose); 
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
                this.close();
            }
          });
    }
}