class Card {
  constructor(name, link, text, cardElement, handleCardClick) {
    this._name = name;
    this._link = link;
    this._text = text;
    this._cardElement = cardElement;
    this._handleCardClick = handleCardClick;
  };

//Выбираем template-элемент
  _getTemplate() {
    const elementTemplate = document
    .querySelector(this._cardElement)
    .content;
    const cardElement  = elementTemplate
    .querySelector('.element')
    .cloneNode(true); 

    return cardElement;
  };

// Лайки
  _setLickeClickHandler() {
    this._likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  }); 
  };

//Удаление Карточки
  _setDeleteCardHandler() {
      this._element.querySelector('.element__trashbutton').addEventListener('click', (evt) => {
      this._element.remove(); //удаляем карточки
    });
  };

//Слушатели
  _setEventListeners() {
    this._setLickeClickHandler();
    this._setDeleteCardHandler();
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

//Генерация карточки
  generateCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.element__like')
      this._imageElement = this._element.querySelector('.element__image');
      this._imageElement.src = this._link;
      this._imageElement.alt = this._text;
      this._element.querySelector('.element__title').textContent = this._name;
      this._setEventListeners();
      
      return this._element;
  };
};

export {Card}
