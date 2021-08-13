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
  const cardElement = [{ 
    name: item.name, 
    link: item.link, 
    alt: item.name 
  }]; 
  createCard(cardElement);
  }
}, cardElements)
cardList.renderer();


function createCard(data) {
  data.forEach(item => {
    const card = new Card(item.name, item.link, item.alt, '#elementcard', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    console.log(cardElement)
    });
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
const userDataArr = [];
userDataArr.push(profileInputs);
userDataArr.forEach(item => {
  nameInput.value = item.name;
  jobInput.value = item.subname;
 });
}

const openPopupUserInfo = new PopupWithForm (popupEdit, formElementEdit, handlePopupClick);
// Popup Edit
editButton.addEventListener('click', () => {
  profileFormInputs();
  openPopupUserInfo.open();
  validatorFormEdit.resetValidation();
});
openPopupUserInfo.setEventListeners();

// Popup Add
const openPopupWithForm = new PopupWithForm (popupAdd, formElementAdd, createCard);
addButton.addEventListener('click', () => {
  validatorFormAdd.resetValidation();
  openPopupWithForm.open();
});
openPopupWithForm.setEventListeners();







