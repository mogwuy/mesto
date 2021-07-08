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
  cardElement.querySelector('.element__image').src = cardImage;
  cardElement.querySelector('.element__image').alt = cardText;
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

//Открытие попапов
function openPopup(popupItem) {
  popupItem.classList.add('popup_opened');
  popupItem.classList.remove('popup_closed');
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
  popupRemove.classList.add('popup_closed');
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


//Закрыть каждый попап
function closeAllPopup (popupClass) {
 popupClass.forEach(function(element) {
  const popup = element.closest('.popup');
  closePopup(popup);
 });
}

//слушатель всех кнопок закрытия
document.addEventListener('click', function (evt) {
  // если нажали на «кнопку закрытия», поставь лайк
  if (evt.target.classList.contains('popup__close')) {
    closeAllPopup(popupClass);
  }
  // иначе ничего делать не нужно
}); 

//Закрытие попапа на клавишу ESC
function keyHandler(evt) {
if (evt.key === 'Escape') {
  closeAllPopup(popupClass);
   }
} 

//Закрытие по оверлею
document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup_opened') && !evt.target.classList.contains('popup_window') ) {
    closeAllPopup(popupClass);
   }
});

//Слушатель на каждую кнопку закрытия Попапа
//function popupHandler(popupElement) {
//  popupElement.forEach(function(element) {
//    const popup = element.closest('.popup');
//     element.addEventListener('click', () => {
//       closePopup(popup);
//    });
//   });
//}
//Кнопка Закрытия
//popupHandler(popupButton);

//Закрытие по оверлею
//popupClass.forEach(function(element) {
//  element.addEventListener('mousedown', function(evt) {
 //   if (element == evt.target){
 //   closePopup(element);
//    }
 // })
//});

 

//Popup Image
function setOpenImagePopupHandler(item) {
  item.querySelector('#open-image').addEventListener('click', function (evt) {
    openPopup(popupImage);
      document.querySelector('.popup__image').src = item.querySelector('.element__image').src;
      document.querySelector('.popup__image').alt = item.querySelector('.element__image').alt;
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
  //Добавление в массив карточек.
  //initialCards.unshift({name: mestoInput.value, link: scrInput.value});
  closePopup(popupAdd);
  cards.prepend(createCard(scrInput.value, mestoInput.value)); 
  //Сброс Окна ввода к дефолтным значениям, чтобы карточки одинакого повторно не загрузили
  //через метод reset не заработало, а вот если возращать к дефолтным значениям то все хорошо.
  document.querySelectorAll('.popup__input').forEach(function(item) {
    item.value = item.defaultValue;
   });

    //Добалвение новых карточек путем перерисовки массива
    // Удаление прошлых элементов
    // const cards = document.querySelectorAll('.element');
    //cards.forEach((item) => {
    //  item.remove();
    // });
    // Рисуем карточки заного
    //renderCards();
}
formElementAdd.addEventListener('submit', handleNewCardSubmit); 
//Создание карточки по нажатию Enter
formElementAdd.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter' && !evt.target.classList.contains('popup__submit_disabled')) {
   handleNewCardSubmit;
  }
}); 

//Удаление Карточки
function setDeleteCardHandler(item) {
item.querySelector('.element__trashbutton').addEventListener('click', function (evt) {
  item.remove(); //удаляем карточки
});

}