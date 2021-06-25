const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('#popupedit');
const popupAdd = document.querySelector('#popupadd');
const popupImage = document.querySelector('#popupimage');
const formElementEdit = document.querySelector('#formedit');
const formElementAdd = document.querySelector('#formadd');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#subname');
const mestoInput = document.querySelector('#mestoname');
const scrInput = document.querySelector('#mestosrc');
const nameProfile = document.querySelector('#profileName')
const subnameProfile =  document.querySelector('#profileSubname')
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
function openPopup(popupitem) {
  popupitem.classList.add('popup_opened');
  popupitem.classList.remove('popup_closed');
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

//Кнопка Закрытия
document.querySelectorAll('#close').forEach(function(item) {
item.addEventListener('click', () => {
  closePopup(popupAdd);
  closePopup(popupEdit);
  closePopup(popupImage);
});
});

//Popup Image
function setOpenImagePopupHandler(item) {
  item.querySelector('#openimage').addEventListener('click', function (evt) {
    openPopup(popupImage);
      document.querySelector('.popup__image').src = item.querySelector('.element__image').src;
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

//Удаление Карточки
function setDeleteCardHandler(item) {
item.querySelector('.element__trashbutton').addEventListener('click', function (evt) {
  item.remove(); //удаляем карточки
});

}

