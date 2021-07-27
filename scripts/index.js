import {editButton, addButton, popupEdit, popupAdd, formElementEdit, formElementAdd, nameInput, jobInput, mestoInput, scrInput, nameProfile, subnameProfile, popupsClass, submitAddButton, initialCards, cardElements, obj} from './data.js'
import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

//Вызов валидации двух форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();

//Открытие попапов
function openPopup(popupItem) {
  popupItem.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler); 
}

//Открытие попа с карточкой
function handleCardClick(name, link) {
  const popupImage = document.querySelector('#popup-image');
  const imageElement = document.querySelector('.popup__image');
  imageElement.src = link;
  imageElement.alt = name;
  openPopup(popupImage);
  document.querySelector('.popup__text').textContent = name;
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
  validatorFormEdit.resetValidation();
});

// Popup Add
addButton.addEventListener('click', () => {
  validatorFormAdd.resetValidation();
  formElementAdd.reset();
  openPopup(popupAdd);
});

//Закрытие попапа на клавишу ESC
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
} 

function createCard(title, link, text, element, handleCardClick) {
  const card = new Card(title, link, text, element, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

//Закрытие по оверлею и Кнопке закрытия
popupsClass.forEach(function(element) {
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
   cardElements.append(createCard(item.name, item.link, item.text, '#elementcard', handleCardClick));
});


//Добавление Отдельных Карточек
function handleNewCardSubmit(evt) {
  evt.preventDefault(); 
  //Закрываем попап
  closePopup(popupAdd);
  cardElements.prepend(createCard(mestoInput.value, scrInput.value, mestoInput.value, '#elementcard', handleCardClick)); 
  //Сброс Окна ввода к дефолтным значениям, чтобы карточки одинаковые повторно не загрузили
  formElementAdd.reset();
};
formElementAdd.addEventListener('submit', handleNewCardSubmit); 



