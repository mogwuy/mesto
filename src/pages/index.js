import {editButton, addButton, editAvatar, popupEdit, popupAdd, popupDel, popupAvatar, formElementEdit, formElementAdd, formElementAvatar, nameProfile, subnameProfile, profileAvatarImage, profileAvatar, nameInput, jobInput, popupImage, cardElements, obj} from '../utils/constants.js'
import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithDel from '../components/PopupWithDel.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import '../pages/index.css'; // импорт главного файла стилей 

//Вызов валидации трех форм
const validatorFormEdit = new FormValidator (obj, formElementEdit);
validatorFormEdit.enableValidation();
const validatorFormAdd = new FormValidator (obj, formElementAdd);
validatorFormAdd.enableValidation();
const validatorFormAvatar = new FormValidator (obj, formElementAvatar);
validatorFormAvatar.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27/'
}); 

api.getProfileData('users/me')

  .then((usersData) => {
    //Подставляем данные о пользователе.
    function addProfileInform(data) {
      const fillProfileData = new UserInfo (nameProfile, subnameProfile, profileAvatarImage)
      fillProfileData.setUserInfo(data);
      profileAvatarImage.src = data.avatar;
          
    }
  addProfileInform(usersData)
   
  api.getInitialCards('cards')
    .then((result) => {
      renderLoading(true)
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
          }, cardElements);
          cardList.renderer();
     
          //Создание Карточки
          function createCard(data) {
            const card = new Card(data.name, data.link, data.alt, data.likes, data.ownerId, data.id, data.userId, '#elementcard', likeValidate, addLike, handleCardClick, handlePopupDelete);
            const cardElem = card.generateCard();
          return cardElem
          }
    
          //Вставка карточки в DOM
          function addCard(data) {
            const cardCreated = createCard(data);
            cardList.addItem(cardCreated);
          }

          // Popup Add
          const openPopupWithForm = new PopupWithForm (popupAdd, addCard, cardUploader);
          addButton.addEventListener('click', () => {
            validatorFormAdd.resetValidation();
            openPopupWithForm.open();
          })
          openPopupWithForm.setEventListeners();

          //Проверка стоит ли уже лайк
          function likeValidate(likes) {
          if (likes.find(like => like._id === usersData._id)) {
          return true
          } else {return false}
          return
          }

          //Обновление карточки
          function replaceCard(result, cardElement) {
            const elements = document.querySelector(cardElements);
            const cardData = { 
              name: result.name, 
              link: result.link, 
              alt: result.name,
              likes: result.likes,
              ownerId: result.owner._id,
              id: result._id,
              userId: usersData._id
            }
            const nodeElement = createCard(cardData)
            elements.replaceChild(nodeElement, cardElement);
          }

          //Лайки
          function addLike(cardId, likes, cardElement) {
            if (likeValidate(likes)) {
              api.getPutDisLike(`${cardId}`,)
                .then((result) => {
                  replaceCard(result, cardElement)
                })
                .catch((err) => {
                  //Вывод ошибки
                  console.log(`Ошибка: ${err}`); 
                  })
                  .finally(() => {
                  })
            } else {
              api.getPutLike(`${cardId}`) 
                .then((result) => {
                  replaceCard(result, cardElement)
                })
                .catch((err) => {
                  //Вывод ошибки
                  console.log(`Ошибка: ${err}`); 
                })
                .finally(() => {
                });
            }
          }   

          //Отправка отредактированных данных пользователя
          function nameUploader(userData, callBack, element) {
            api.updateUserInfo(userData)
              .then (() => {
                callBack(userData);
              })
              .catch((err) => {
                //Вывод ошибки
                console.log(`Ошибка: ${err}`); 
                })
                .finally(() => {
                  //Тут надо вывести загрузку
                   renderLoadingForm(false, element)
                });
          }

          //Отправка новой карточки
          function cardUploader(data, callBack, element) {
            api.updateСardInfo(data)
             .then((result) => { 
                const cardData = {
                  name: result.name, 
                  link: result.link, 
                  alt: result.name,
                  likes: result.likes,
                  ownerId: result.owner._id,
                  id: result._id,
                  userId: usersData._id
                }
                callBack(cardData);
              return cardData;
            })
            .catch((err) => {
              //Вывод ошибки
              console.log(`Ошибка: ${err}`); 
              })
              .finally(() => {
                //Тут надо вывести загрузку
                renderLoadingForm(false, element)
              });
          };

          //Удаление Карточки с Сервера
          function cardDeleter(cardId, element) {
            api.deleteСard(cardId)
            .catch((err) => {
              //Вывод ошибки
              console.log(`Ошибка: ${err}`); 
              })
              .finally(() => {
                //Тут надо вывести загрузку
                //renderLoadingForm(false, element)
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
            jobInput.value = profileInputs.about;
          }
    
          // Popup Edit
          const openPopupUserInfo = new PopupWithForm (popupEdit, handlePopupClick, nameUploader);
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

          //Загрузчки аватарки
          function avatarUploader(data) {
            api.updateAvatar(data)
            .catch((err) => {
              //Вывод ошибки
              console.log(`Ошибка: ${err}`); 
            })
            .finally(() => {
              renderLoading(false)
            });
            profileAvatarImage.src = data.avatar;
          }
        })
        .catch((err) => {
          //Вывод ошибки
          console.log(`Ошибка: ${err}`); 
        })
        .finally(() => {
          renderLoading(false)
        });
  })
  .catch((err) => {
    //Вывод ошибки
    console.log(`Ошибка: ${err}`); 
  })
  .finally(() => {
      renderLoading(false)
  });


//Окна загрузки
//Окно загрузки карточек при открытии странички
    function renderLoading(isLoading) {
     const loading = document.querySelector('.elements__loading');
    
      if (isLoading) {
        loading.classList.add('elements__loading_invisible');
      } else {
        loading.classList.remove('elements__loading_invisible');
      }
    }
//Окно загрузки в формах
    function renderLoadingForm(isLoading, elem){
      const loading = elem.querySelector('.popup__submit');
      if (isLoading) {
        loading.value = "Загрузка...";
      } else {
        loading.value = "Применить";
      }
    }