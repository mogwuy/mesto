import {editButton, addButton, popupEdit, popupAdd, formElementEdit, formElementAdd, nameProfile, subnameProfile, nameInput, jobInput, initialCards, popupImage, cardElements, obj} from '../utils/constants.js'
import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import '../pages/index.css'; // импорт главного файла стилей 


//Рисуем секцию карточек
const cardList = new Section ({
items: initialCards,
renderer: (item) => {
  const cardElement = { 
    name: item.name, 
    link: item.link, 
    alt: item.name 
  }; 
  addCard(cardElement);
  }
}, cardElements)
cardList.renderer();

//Создание Карточки
function createCard(data) {
    const card = new Card(data.name, data.link, data.alt, '#elementcard', handleCardClick);
    const cardElem = card.generateCard();
    return cardElem
  };

//Вставка карточки в DOM
function addCard(data) {
  const cardCreated = createCard(data);
  cardList.addItem(cardCreated);
};

//Вызов валидации двух форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();

//Открытие попа с карточкой
const openPopup = new PopupWithImage (popupImage);
function handleCardClick(name, link) {
  openPopup.open(name, link);
}
openPopup.setEventListeners();


const fillProfileInputs = new UserInfo (nameProfile, subnameProfile)
function handlePopupClick(userData){
  fillProfileInputs.setUserInfo(userData);
}

//Подставляем данные пользователя в форму при открытии
function profileFormInputs() {
const profileInputs = fillProfileInputs.getUserInfo();
  nameInput.value = profileInputs.name;
  jobInput.value = profileInputs.subname;
}

const openPopupUserInfo = new PopupWithForm (popupEdit, handlePopupClick);
// Popup Edit
editButton.addEventListener('click', () => {
  profileFormInputs();
  openPopupUserInfo.open();
  validatorFormEdit.resetValidation();
});
openPopupUserInfo.setEventListeners();

// Popup Add
const openPopupWithForm = new PopupWithForm (popupAdd, addCard);
addButton.addEventListener('click', () => {
  validatorFormAdd.resetValidation();
  openPopupWithForm.open();
});
openPopupWithForm.setEventListeners();