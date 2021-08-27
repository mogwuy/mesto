const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editAvatar = document.querySelector('.profile__avatar')
const popupEdit = '#popup-edit';
const popupAdd = '#popup-add';
const popupDel = '#popup-del';
const popupAvatar = "#popup-avatar";
const formElementEdit = document.querySelector('#form-edit');
const formElementAdd = document.querySelector('#form-add');
const formElementAvatar = document.querySelector('#popup-avatar');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#about');
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
const profileAvatarImage = document.querySelector('.profile__avatar-image');

const obj = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',  
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input-error_type',
    errorClass: 'popup__input-error_active'
  };



export {editButton, addButton, popupEdit, popupAdd, formElementEdit, formElementAdd, formElementAvatar, nameInput, jobInput, mestoInput, scrInput, nameProfile, subnameProfile, profileAvatarImage, profileAvatar, editAvatar, popups, submitAddButton, popupImage, popupDel, popupAvatar, imageElement, popupText, cardElements, obj}