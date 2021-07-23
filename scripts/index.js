import {editButton, addButton, popupEdit, popupAdd, formElementEdit, formElementAdd, nameInput, jobInput, mestoInput, scrInput, nameProfile, subnameProfile, popupClass, submitAddButton, initialCards, obj} from './data.js'
import {Card} from './card.js'
import {FormValidator} from './formValidator.js'


//Открытие попапов
function openPopup(popupItem) {
  popupItem.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler); 
}

// Функция обновления данных в попапе Edit
function fillProfileInputs() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = subnameProfile.textContent;
}

//Закрытие попапов
function closePopup(popupRemove) {
  popupRemove.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler); 
}

// Popup Edit
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  fillProfileInputs();
});

// Popup Add
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

//Закрытие попапа на клавишу ESC
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
} 

//Закрытие по оверлею и Кнопке закрытия
popupClass.forEach(function(element) {
  element.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(element);
    }
  });
});

//Редактирование данных профиля
function handleProfileSubmit (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  subnameProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}
formElementEdit.addEventListener('submit', handleProfileSubmit); 

//Рисуем карточки из массива
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, item.text);
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

//Добавление Отдельных Карточек
function handleNewCardSubmit(evt) {
  evt.preventDefault(); 
  //Дизактивация кнопки
  submitAddButton.classList.add('popup__submit_disabled');
  submitAddButton.setAttribute('disabled', true);
  //Закрываем попап
  closePopup(popupAdd);
  const card = new Card(mestoInput.value, scrInput.value);
  document.querySelector('.elements').prepend(card.generateCard()); 
  //Сброс Окна ввода к дефолтным значениям, чтобы карточки одинакого повторно не загрузили
  formElementAdd.reset();
};
formElementAdd.addEventListener('submit', handleNewCardSubmit); 

//Вызов валидации двух форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();

export {openPopup}


