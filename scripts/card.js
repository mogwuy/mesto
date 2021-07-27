import {openPopup} from './index.js'

class Card {
  constructor(name, link, text, cardElement) {
    this._name = name;
    this._link = link;
    this._text = text;
    this._cardElement = cardElement;
  };

//Выбираем template-элемент
  _getTemplate() {
    const elementTemplate = document
    .querySelector('#elementcard')
    .content;
    const cardElement  = elementTemplate
    .querySelector('.element')
    .cloneNode(true); 

    return cardElement;
  };

// Лайки
  _setLickeClickHandler() {
    this._element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  }); 
  };

// Открытие попа с карточкой
  _setOpenImagePopupHandler(_item) {
    _item.querySelector('#open-image').addEventListener('click', function (evt) {
      const _popupImage = document.querySelector('#popup-image');
      openPopup(_popupImage);
      const _imageElement = document.querySelector('.popup__image');
      _imageElement.src = _item.querySelector('.element__image').src;
      _imageElement.alt = _item.querySelector('.element__image').alt;
      document.querySelector('.popup__text').textContent = _item.querySelector('.element__title').textContent;
    });
  };

//Удаление Карточки
  _setDeleteCardHandler(_item) {
    _item.querySelector('.element__trashbutton').addEventListener('click', function (evt) {
      _item.remove(); //удаляем карточки
    });
  };

//Генерация карточки
  generateCard() {
      this._element = this._getTemplate();
      const _imageElement = this._element.querySelector('.element__image');
      _imageElement.src = this._link;
      _imageElement.alt = this._text;
      this._element.querySelector('.element__title').textContent = this._name;

      this._setLickeClickHandler();
      this._setOpenImagePopupHandler(this._element);
      this._setDeleteCardHandler(this._element);

      return this._element;
  };
};

export {Card}