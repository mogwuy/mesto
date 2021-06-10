let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');


function popupOpen() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#subname');


function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let nameInput = document.querySelector('#name').value;
  let jobInput = document.querySelector('#subname').value;
  document.querySelector('#profileName').textContent = nameInput;
  document.querySelector('#profileSubname').textContent = jobInput;

}

formElement.addEventListener('submit', formSubmitHandler); 

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);