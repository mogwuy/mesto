class Card {
  constructor(name, link, text, likes, ownerID, cardId, userId, cardElement, likeValidate, addLike, handleCardClick, handlePopupDelete) {
    this._name = name;
    this._link = link;
    this._text = text;
    this._likes = likes;
    this._ownerId = ownerID;
    this._cardId = cardId;
    this._userId = userId
    this._cardElement = cardElement;
    this._likeValidate = likeValidate;
    this._addLike = addLike;
    this._handleCardClick = handleCardClick;
    this._handlePopupDelete = handlePopupDelete;
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
    this._likeButton.addEventListener('click',  (evt) => {
    this._addLike(this._cardId, this._likes, this, evt);
  }); 
  };

  updateLikes(result, evt) {
    this._element.querySelector('.element__nlikes').textContent = result.likes.length;
    evt.target.classList.toggle('element__like_active');
    this._likes = result.likes;
  }


//Удаление Карточки
  _setDeleteCardHandler() {
    this._element.querySelector('.element__trash').classList.add('element__trash_visible');
    this._element.querySelector('.element__trashbutton').addEventListener('click', () => {
        this._handlePopupDelete(this._element, this._cardId);
    });
  };

//Слушатели
  _setEventListeners() {
    this._setLickeClickHandler();
    this._imageElement.addEventListener('click', () => {
    this._handleCardClick(this._name, this._link);
    });
    if (this._ownerId == this._userId) {
      this._setDeleteCardHandler();
     }
  }

//Генерация карточки
  generateCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.element__like')
      this._imageElement = this._element.querySelector('.element__image');
      this._imageElement.src = this._link;
      this._imageElement.alt = this._text;
      this._element.querySelector('.element__title').textContent = this._name;
      if (this._likeValidate(this._likes) == true){
        this._likeButton.classList.add('element__like_active');
      }
      this._element.querySelector('.element__nlikes').textContent = this._likes.length;
      this._setEventListeners();
      
      return this._element;
  };
};

export {Card}
