import {editButton, addButton, editAvatar, popupEdit, popupAdd, popupDel, popupAvatar, formElementEdit, formElementAdd, formElementAvatar, nameProfile, subnameProfile, profileAvatarImage, profileAvatar, nameInput, jobInput, popupImage, cardElements, obj} from '../utils/constants.js'
import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithDel from '../components/PopupWithDel.js'
import UserInfo from '../components/UserInfo.js'
import '../pages/index.css'; // импорт главного файла стилей 
//Подключалка к серверу
function connector(entity) {
return fetch(`https://mesto.nomoreparties.co/v1/cohort-27/${entity}`, {
  headers: {
    authorization: '822c2109-7d84-466c-adc0-fb811f9f5603'
  },
  mode: 'cors'
})
};

//Вызов валидации трех форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();
const validatorFormAvatar = new FormValidator (obj, formElementAvatar);
validatorFormAvatar.enableValidation();

connector('users/me')
.then((res) => {
  if (res.ok) {
    return res.json()
  }
   return Promise.reject(res.status);
  }) 
    .then((result) => {

      return result;
  })
 .then((usersData) => {
    //Подставляем данные о пользователе.
    function addProfileInform(data) {
      nameProfile.textContent = data.name;
      subnameProfile.textContent = data.about;
      profileAvatarImage.src = data.avatar;
   }
  addProfileInform(usersData)

   

  connector('cards')
    .then((res) => {
      if (res.ok) {
       return res.json()
    }
    return Promise.reject(res.status);
    }) 
      .then((result) => {
        let cards = Array.from(result);
        cards.reverse(); //Разворачиваем массив, что бы новые карточки были вверху
        return cards;
      })
        .then((cards) =>{
        //Рисуем секцию карточек
        const cardList = new Section ({
        items: cards,
        renderer: (item) => {
          const cardElement = { 
            name: item.name, 
            link: item.link, 
            alt: item.name,
            likes: item.likes,
            ownerId: item.owner._id,
            id: item._id,
            userId: usersData._id
          }; 
          addCard(cardElement);
          }
        }, cardElements)
        cardList.renderer();
     
       //Создание Карточки
        function createCard(data) {
          const card = new Card(data.name, data.link, data.alt, data.likes, data.ownerId, data.id, data.userId, '#elementcard', likeValidate, addLike, handleCardClick, handlePopupDelete);
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




        //Проверка стоит ли уже лайк
        function likeValidate(likes) {
          if (likes.find(like => like._id === usersData._id)) {
          return true
          } else {return false}
         return
        }

        //ДизЛайк
        function disLike(cardId, likes, ownerId, evt) {
        fetch(`https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/${cardId}`, {
         method: 'DELETE',
         headers: {
            authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
            'Content-Type': 'application/json'
          },
         })
         .then((res) => {
          if (res.ok) {
           return res.json()
          }
        })
        .then((result) => {
          const data = Array.from(result.likes);
          evt.target.querySelector('.element__nlikes').textContent = data.length;
        })
      }

        


         //Лайки Отправка
         function addLike(cardId, likes, ownerId, evt) {
          if (likeValidate(likes))
         {
          disLike(cardId, likes, ownerId, evt);

         } else {
         fetch(`https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: {
            authorization: '822c2109-7d84-466c-adc0-fb811f9f5603'
          },
          mode: 'cors'
         })
         .then((res) => {
          if (res.ok) {
           return res.json()
          }
        })
        .then((result) => {
          const data = Array.from(result.likes);
          evt.target.querySelector('.element__nlikes').textContent = data.length;
        })

      }
         };
        
//Отправка отредактированных данных пользователя
  function nameUploader(userData, callBack) {
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
    }) 
    .then (() => {
     callBack(userData);
    })
  }

  //Отправка новой карточки
  function cardUploader(data, callBack) {
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
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
       return Promise.reject(res.status);
      }) 
        .then((result) => { 
         const cardData = {
          name: result.name, 
          link: result.link, 
          alt: result.name,
          likes: result.likes,
          ownerId: result.owner._id,
          id: result._id,
          userId: usersData._id}
         callBack(cardData);
        return cardData;
        })
        
  };


  //Удаление Карточки с Сервера
  function cardDeleter(cardId) {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-27/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
        'Content-Type': 'application/json'
      }
    }); 
  } 

   
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
const openPopupDel = new PopupWithDel (popupDel, cardDeleter);
function handlePopupDelete(elem, cardId) {
  openPopupDel.open(elem, cardId); 
}
openPopupDel.setEventListeners();

//popup Edit Avatar
const openPopupEditAvatar = new PopupWithForm (popupAvatar, addProfileInform, avatarUploader);
editAvatar.addEventListener('click', () => {
        validatorFormAvatar.resetValidation();
        openPopupEditAvatar.open();
        });
        openPopupEditAvatar.setEventListeners();



function avatarUploader(data, callBack) {
  fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: data.link
    })
  })
callBack(data);

}




       })
      
  })

  .catch((err) => {
    //Вывод ошибки
    console.log(`Ошибка: ${err}`); 
    })
    .finally(() => {
      renderLoading(false)
    });


//Окно загрузки
    function renderLoading(isLoading) {
     const loading = document.querySelector('.elements__loading');
    
      if (isLoading) {
        loading.classList.remove('elements__loading_invisible');
      } else {
        loading.classList.add('elements__loading_invisible');
      }
    }