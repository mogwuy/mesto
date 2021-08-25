import {editButton, addButton, popupEdit, popupAdd, popupDel, formElementEdit, formElementAdd, nameProfile, subnameProfile, profileAvatar, nameInput, jobInput, popupImage, cardElements, obj} from '../utils/constants.js'
import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithDel from '../components/PopupWithDel.js'
import UserInfo from '../components/UserInfo.js'
import '../pages/index.css'; // импорт главного файла стилей 

//Вызов валидации двух форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();
//Затэчка
fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards', {
  headers: {
    authorization: '822c2109-7d84-466c-adc0-fb811f9f5603'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 

//Загрузка карточек
function cardDownloader() {
  fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards', {
  headers: {
    authorization: '822c2109-7d84-466c-adc0-fb811f9f5603'
  },
  mode: 'cors'
})
.then(resolve => resolve.json())
  .then((result) => {
    let cards = Array.from(result);
    cards.reverse()


    //Рисуем секцию карточек
    const cardList = new Section ({
      items: cards,
      renderer: (item) => {
        const cardElement = { 
          name: item.name, 
          link: item.link, 
          alt: item.name,
          likes: item.likes
        }; 
        addCard(cardElement);
        }
      }, cardElements)
        cardList.renderer();
     
    //Создание Карточки
    function createCard(data) {
      const card = new Card(data.name, data.link, data.alt, data.likes, '#elementcard', handleCardClick, handlePopupDelete);
      const cardElem = card.generateCard();
      return cardElem
    };
    
    //Вставка карточки в DOM
    function addCard(data) {
    const cardCreated = createCard(data);
    cardList.addItem(cardCreated);
    };

    // Popup Add
    const openPopupWithForm = new PopupWithForm (popupAdd, addCard, cardUploader);
    addButton.addEventListener('click', () => {
    validatorFormAdd.resetValidation();
    openPopupWithForm.open();
    });
    openPopupWithForm.setEventListeners();


})
.catch((err) => {
  //Вывод ошибки
  console.log(`Ошибка: ${err}`); 
  })
  .finally(() => {
    console.log('Загрузка...')
  });

};

//Загрузка данных пользователя
function nameDownloader() {
  fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me', {
    headers: {
      authorization: '822c2109-7d84-466c-adc0-fb811f9f5603'
    },
    mode: 'cors'
  })
  .then(resolve => resolve.json())
    .then((result) => {
      //Подставляем данные о пользователе.
      nameProfile.textContent = result.name;
      subnameProfile.textContent = result.about;
      profileAvatar.src = result.avatar;
  })
  .catch((err) => {
    //Вывод ошибки
    console.log(`Ошибка: ${err}`); 
    })
    .finally(() => {
      console.log('Загрузка...')
    });
  };

//Отправка отредактированных данных пользователя
  function nameUploader(userData) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userData.title,
        about: userData.subname
      })
    }); 
  }

  //Отправка новой карточки
  function cardUploader(data) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards', {
      method: 'POST',
      headers: {
        authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }); 
  }


cardDownloader();
nameDownloader()



   
    
    
    
    //Открытие попа с карточкой
    const openPopup = new PopupWithImage (popupImage);
    function handleCardClick(name, link) {
    openPopup.open(name, link);
    }
    openPopup.setEventListeners();
    
    
    


      
    const fillProfileInputs = new UserInfo (nameProfile, subnameProfile)
    function handlePopupClick(userData){
    fillProfileInputs.setUserInfo(userData);
    }
    
    //Подставляем данные пользователя в форму при открытии
    function profileFormInputs() {
    const profileInputs = fillProfileInputs.getUserInfo();
    nameInput.value = profileInputs.name;
    jobInput.value = profileInputs.subname;
    }
    
    const openPopupUserInfo = new PopupWithForm (popupEdit, handlePopupClick, nameUploader);
    // Popup Edit
    editButton.addEventListener('click', () => {
    profileFormInputs();
    openPopupUserInfo.open();
    validatorFormEdit.resetValidation();
    });
    openPopupUserInfo.setEventListeners();

//popup Delete     
const openPopupDel = new PopupWithDel (popupDel);
function handlePopupDelete(elem) {
  openPopupDel.open(elem); 
}
openPopupDel.setEventListeners();

