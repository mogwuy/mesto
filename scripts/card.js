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
  _setDeleteCardHandler(_item) {
    _item.querySelector('.element__trashbutton').addEventListener('click', function (evt) {
      _item.remove(); //удаляем карточки
    });
  };

//Генерация карточки
  generateCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.element__like')
      const _imageElement = this._element.querySelector('.element__image');
      _imageElement.src = this._link;
      _imageElement.alt = this._text;
      this._element.querySelector('.element__title').textContent = this._name;

      this._setLickeClickHandler();
      this._setDeleteCardHandler(this._element);
      _imageElement.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });

      return this._element;
  };
};

export {Card}