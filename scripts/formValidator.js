class FormValidator {
  constructor(data, formElement) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
  };

//Проверка есть ли данные в форме
  _hasInvalidInput(inputList)  {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 

//Выводим ошибку
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
};

//Прячем оишбку
  _hideInputError(inputElement)  {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

//Проверяем ввод в форму
  _checkInputValidity(inputElement)  {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
//Отключение и Включение кнопки submit
  _toggleButtonState()  {
     const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
     if (this._hasInvalidInput(this._inputList)) {
       buttonElement.classList.add(this._inactiveButtonClass);
       buttonElement.setAttribute('disabled', true)
     } else {
       buttonElement.classList.remove(this._inactiveButtonClass);
       buttonElement.removeAttribute('disabled')
    }
}; 

//Подключение ожидания ввода
  _setEventListeners() {
    this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
    });
  }; 

//Включение валидации
  enableValidation() {
    const formElement = this._formElement;
    this._setEventListeners();
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  };

  // отдельный  метод для очистки ошибок и управления кнопкой 
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
};

export {FormValidator}