const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupImage = document.querySelector('#popup-image');
const formElementEdit = document.querySelector('#form-edit');
const formElementAdd = document.querySelector('#form-add');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#subname');
const mestoInput = document.querySelector('#mestoname');
const scrInput = document.querySelector('#mestosrc');
const nameProfile = document.querySelector('#profileName')
const subnameProfile =  document.querySelector('#profileSubname')
const popupButton = document.querySelectorAll('.popup__button');
const popupClass = document.querySelectorAll('.popup');
const submitAddButton = document.querySelector('#submitadd');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const elementTemplate = document.querySelector('#elementcard').content;
const cards = document.querySelector('.elements');


//Создание Карточек
function createCard(cardImage, cardText) {
  const cardElement  = elementTemplate.querySelector('.element').cloneNode(true); 
  const imageElement = cardElement.querySelector('.element__image');
  imageElement.src = cardImage;
  imageElement.alt = cardText;
  cardElement.querySelector('.element__title').textContent = cardText;
  setLickeClickHandler(cardElement);
  setOpenImagePopupHandler(cardElement);
  setDeleteCardHandler(cardElement);
  return cardElement; 
} 

// Добавление карточек из имеющегося массива
function renderCards(arr) {
  arr.forEach(function (item) {
    cards.append(createCard(item.link, item.name));
  });
}
renderCards(initialCards);

//Лайки 
function setLickeClickHandler(item) {
  item.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
}); 
}

//Открытие попапов и закрытие
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
  popupClass.forEach(function(element) {
    const popup = element.closest('.popup');
    closePopup(popup);
  });
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

//Popup Image
function setOpenImagePopupHandler(item) {
  item.querySelector('#open-image').addEventListener('click', function (evt) {
    openPopup(popupImage);
    const imageElement = document.querySelector('.popup__image');
    imageElement.src = item.querySelector('.element__image').src;
    imageElement.alt = item.querySelector('.element__image').alt;
    document.querySelector('.popup__text').textContent = item.querySelector('.element__title').textContent;
  });
}

//Редактирование данных профиля
function handleProfileSubmit (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  subnameProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}
formElementEdit.addEventListener('submit', handleProfileSubmit); 


//Добавление Карточек
function handleNewCardSubmit(evt) {
  evt.preventDefault(); 
  //Дизактивация кнопки
  submitAddButton.classList.add('popup__submit_disabled');
  submitAddButton.setAttribute('disabled', true);
  //Закрываем попап
  closePopup(popupAdd);
  cards.prepend(createCard(scrInput.value, mestoInput.value)); 
  //Сброс Окна ввода к дефолтным значениям, чтобы карточки одинакого повторно не загрузили
  formElementAdd.reset();
}
formElementAdd.addEventListener('submit', handleNewCardSubmit); 

//Удаление Карточки
function setDeleteCardHandler(item) {
item.querySelector('.element__trashbutton').addEventListener('click', function (evt) {
  item.remove(); //удаляем карточки
});

}