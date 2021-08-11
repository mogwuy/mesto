import {editButton, addButton, popupEdit, popupAdd, formElementEdit, formElementAdd, nameInput, jobInput, initialCards, popupImage, cardElements, obj} from '../utils/constants.js'
import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

//Вызов валидации двух форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();

//Открытие попа с карточкой
function handleCardClick(name, link) {
  const openPopup = new PopupWithImage (popupImage);
  openPopup.open(name, link);
}

const fillProfileInputs = new UserInfo (nameInput, jobInput)
function handlePopupClick(){
  fillProfileInputs.setUserInfo();
}

const openPopupUserInfo = new PopupWithForm (popupEdit, formElementEdit, handlePopupClick);
// Popup Edit
editButton.addEventListener('click', () => {
  fillProfileInputs.getUserInfo();
  openPopupUserInfo.open();
  validatorFormEdit.resetValidation();
});
openPopupUserInfo.setEventListeners();

// Popup Add
const openPopupWithForm = new PopupWithForm (popupAdd, formElementAdd, renderCards);
addButton.addEventListener('click', () => {
  validatorFormAdd.resetValidation();
  formElementAdd.reset();
  openPopupWithForm.open();
});
openPopupWithForm.setEventListeners();

//Создание карточки
function createCard(title, link, text) {
const card = new Card(title, link, text, '#elementcard', handleCardClick);
const cardElement = card.generateCard();
return cardElement;
};

//Рисуем карточки
function renderCards(items){
  const cardList = new Section ({
    items: items,
    renderer: (item) => {
      const card = createCard(item.name, item.link, item.text);
      cardList.addItem(card);
    }
  }, cardElements)
  cardList.renderer();
  return
}
renderCards(initialCards);



