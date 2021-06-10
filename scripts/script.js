let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');


function popupOpen() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

let formElement = document.querySelector('.popup__submit');
let nameInput = document.querySelector('name');
let jobInput = document.querySelector('subname');


function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let nameInput = document.getElementById('name').value;
  let jobInput = document.getElementById('subname').value;
  document.getElementById('profileName').textContent = nameInput;
  document.getElementById('profileSubname').textContent = jobInput;

}

formElement.addEventListener('click', formSubmitHandler); 

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);