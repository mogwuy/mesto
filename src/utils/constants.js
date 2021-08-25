const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = '#popup-edit';
const popupAdd = '#popup-add';
const popupDel = '#popup-del';
const formElementEdit = document.querySelector('#form-edit');
const formElementAdd = document.querySelector('#form-add');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#subname');
const mestoInput = document.querySelector('#mestoname');
const scrInput = document.querySelector('#mestosrc');
const nameProfile = document.querySelector('#profileName');
const subnameProfile =  document.querySelector('#profileSubname');
const popups = document.querySelectorAll('.popup');
const submitAddButton = document.querySelector('#submitadd');
const cardElements = '.elements';
const popupImage = '#popup-image';
const imageElement = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const profileAvatar = document.querySelector('.profile__avatar');

const obj = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',  
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input-error_type',
    errorClass: 'popup__input-error_active'
  };



export {editButton, addButton, popupEdit, popupAdd, formElementEdit, formElementAdd, nameInput, jobInput, mestoInput, scrInput, nameProfile, subnameProfile, profileAvatar, popups, submitAddButton, popupImage, popupDel, imageElement, popupText, cardElements, obj}