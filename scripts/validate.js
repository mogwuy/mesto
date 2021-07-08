//Выводим ошибку
function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
//Прячем оишбку
  function hideInputError(formElement, inputElement, inputErrorClass, errorClass)  {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  //Проверяем ввод в форму
  function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)  {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
      
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };

  //Проверка есть ли данные в форме
  function hasInvalidInput(inputList)  {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  
  //Отключение и Включение кнопки submit
  function toggleButtonState(inputList, buttonElement, inactiveButtonClass)  {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true)
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled')
    }
  }; 
  
//Подключение ожидания
  function setEventListeners(formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) {
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  }; 
  
//Включение валидации на формы
  function enableValidation(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    const inactiveButtonClass = options.inactiveButtonClass;
    const inputErrorClass = options.inputErrorClass;
    const errorClass = options.errorClass
    formList.forEach((formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
      const buttonElement = formElement.querySelector(options.submitButtonSelector);
      setEventListeners(formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass);
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    });
  };

  //Включение Валидации
  enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',  
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input-error_type',
    errorClass: 'popup__input-error_active'
  });    
  