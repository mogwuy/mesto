//Выводим ошибку
function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input-error_type');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  
//Прячем оишбку
  function hideInputError(formElement, inputElement)  {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input-error_type');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };
  
  //Проверяем ввод в форму
  function checkInputValidity(formElement, inputElement)  {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
      
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  //Проверка есть ли данные в форме
  function hasInvalidInput(inputList)  {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  
  //Отключение и Включение кнопки submit
  function toggleButtonState(inputList, buttonElement)  {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__submit_disabled');
      buttonElement.setAttribute('disabled', true)
    } else {
      buttonElement.classList.remove('popup__submit_disabled');
      buttonElement.removeAttribute('disabled')
    }
  }; 
  
//Подключение ожидания
  function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  
//Включение валидации на формы
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    formList.forEach((formElement) => {
      setEventListeners(formElement);
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    });
  };
  enableValidation();

   
  