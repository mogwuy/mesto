import Popup from './Popup.js'
import {imageElement, popupText} from '../utils/constants.js'
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link){
        imageElement.src = link;
        imageElement.alt = name;
        popupText.textContent = name;
        this._popup.classList.add('popup_opened');
        super.setEventListeners();
    }
}