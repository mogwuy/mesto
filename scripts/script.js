let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#subname');
let nameProfile = document.querySelector('#profileName')
let subnameProfile =  document.querySelector('#profileSubname')

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = subnameProfile.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  subnameProfile.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler); 
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);