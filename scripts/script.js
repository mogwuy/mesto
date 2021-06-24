let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeButtonEdit = document.querySelector('#closeedit');
let closeButtonAdd = document.querySelector('#closeadd');
let closeButtonImage = document.querySelector('#closeimage');
let popupedit = document.querySelector('#popupedit');
let popupadd = document.querySelector('#popupadd');
let popupimage = document.querySelector('#popupimage');
let formElementEdit = document.querySelector('#formedit');
let formElementAdd = document.querySelector('#formadd');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#subname');
let mestoInput = document.querySelector('#mestoname');
let scrInput = document.querySelector('#mestosrc');
let nameProfile = document.querySelector('#profileName')
let subnameProfile =  document.querySelector('#profileSubname')
let initialCards = [
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

//Лайки 
function likes(item) {
  item.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
}); 
}

// Добавление карточек из имеющегося массива
function renderCards() {
  initialCards.forEach(function (item) {
    const cardElement  = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__title').textContent = item.name;
    linkImage = item.link;
    linkText = item.name;
    likes(cardElement);
    cards.append(cardElement); 
    popupImage(cardElement);
    deleteButton(cardElement);
  });
}
renderCards();

//Открытие попапов
function popupOpen(popupitem) {
  popupitem.classList.add('popup_opened');
  popupitem.classList.remove('popup_closed');
}

// Функция обновления данных в попапе Edit
function popupRefresh() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = subnameProfile.textContent;
}

//Закрытие попапов
function popupClose(popupremove) {
  popupremove.classList.remove('popup_opened');
  popupremove.classList.add('popup_closed');
}

// Popup Edit
editButton.addEventListener('click', () => {
  popupOpen(popupedit);
  popupRefresh();
});
closeButtonEdit.addEventListener('click', () => {
  popupClose(popupedit)
});

// Popup Add
addButton.addEventListener('click', () => {
  popupOpen(popupadd);
});
closeButtonAdd.addEventListener('click', () => {
  popupClose(popupadd)
});

//Popup Image
function popupImage(item) {
  item.querySelector('#openimage').addEventListener('click', function (evt) {
      popupOpen(popupimage);
      document.querySelector('.popup__image').src = item.querySelector('.element__image').src;
      document.querySelector('.popup__text').textContent = item.querySelector('.element__title').textContent;
    closeButtonImage.addEventListener('click', () => {
      popupClose(popupimage)
    });
  });
}

//Редактирование данных профиля
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  subnameProfile.textContent = jobInput.value;
  popupClose(popupedit);
}
formElementEdit.addEventListener('submit', formSubmitHandler); 

//Добавление Карточек
function formSubmitCard(evt) {
  evt.preventDefault(); 
  //Добавление в массив карточек.
  //initialCards.unshift({name: mestoInput.value, link: scrInput.value});
  popupClose(popupadd);
  const cardElements = elementTemplate.querySelector('.element').cloneNode(true);
  //Добавляем новые карточки по одной
  cardElements.querySelector('.element__image').src = scrInput.value;
  cardElements.querySelector('.element__title').textContent = mestoInput.value;
  likes(cardElements);
  cards.prepend(cardElements); 
  popupImage(cardElements);
  deleteButton(cardElements);

    //Добалвение новых карточек путем перерисовки массива
    // Удаление прошлых элементов
    // const cards = document.querySelectorAll('.element');
    //cards.forEach((item) => {
    //  item.remove();
    // });
    // Рисуем карточки заного
    //renderCards();
}
formElementAdd.addEventListener('submit', formSubmitCard); 

//Удаление Карточки
function deleteButton(item) {
item.querySelector('.element__trashbutton').addEventListener('click', function (evt) {
  item.remove(); //удаляем карточки
});

}

