!function(){"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar"),r=document.querySelector("#form-edit"),o=document.querySelector("#form-add"),i=document.querySelector("#popup-avatar"),a=document.querySelector("#name"),c=document.querySelector("#about"),u=(document.querySelector("#mestoname"),document.querySelector("#mestosrc"),document.querySelector("#profileName")),s=document.querySelector("#profileSubname"),l=(document.querySelectorAll(".popup"),document.querySelector("#submitadd"),document.querySelector(".popup__image"),document.querySelector(".popup__text"),document.querySelector(".profile__avatar"),document.querySelector(".profile__avatar-image")),f={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input-error_type",errorClass:"popup__input-error_active"};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o,i,a,c,u,s,l,f,p){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._text=r,this._likes=o,this._ownerId=i,this._cardId=a,this._userId=c,this._cardElement=u,this._likeValidate=s,this._addLike=l,this._handleCardClick=f,this._handlePopupDelete=p}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardElement).content.querySelector(".element").cloneNode(!0)}},{key:"_setLickeClickHandler",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){e._addLike(e._cardId,e._likes,e,t)}))}},{key:"updateLikes",value:function(e,t){this._element.querySelector(".element__nlikes").textContent=e.likes.length,t.target.classList.toggle("element__like_active"),this._likes=e.likes}},{key:"_setDeleteCardHandler",value:function(){var e=this;this._element.querySelector(".element__trash").classList.add("element__trash_visible"),this._element.querySelector(".element__trashbutton").addEventListener("click",(function(){e._handlePopupDelete(e._element,e._cardId)}))}},{key:"_setEventListeners",value:function(){var e=this;this._setLickeClickHandler(),this._imageElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._ownerId==this._userId&&this._setDeleteCardHandler()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like"),this._imageElement=this._element.querySelector(".element__image"),this._imageElement.src=this._link,this._imageElement.alt=this._text,this._element.querySelector(".element__title").textContent=this._name,1==this._likeValidate(this._likes)&&this._likeButton.classList.add("element__like_active"),this._element.querySelector(".element__nlikes").textContent=this._likes.length,this._setEventListeners(),this._element}}])&&p(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(){var e=this._formElement.querySelector(this._submitButtonSelector);this._hasInvalidInput(this._inputList)?(e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled",!0)):(e.classList.remove(this._inactiveButtonClass),e.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){var e=this._formElement;this._setEventListeners(),e.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&_(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"_handleEcsClose",(function(e){"Escape"===e.key&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEcsClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEcsClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&v(t.prototype,n),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageElement=t._popup.querySelector(".popup__image"),t._popupText=t._popup.querySelector(".popup__text"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imageElement.src=t,this._imageElement.alt=e,this._popupText.textContent=e,E(L(a.prototype),"open",this).call(this)}}])&&g(t.prototype,n),a}(b);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._uploader=t,n._formValues={},n._formElement=n._popup.querySelector(".popup__container"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._profileAvatarImage=document.querySelector(".profile__avatar-image"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;I(R(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._valuesArr=e._getInputValues(),e._uploader(e._valuesArr,e._formElement)}))}},{key:"close",value:function(){I(R(a.prototype),"close",this).call(this),this._formElement.reset()}}])&&P(t.prototype,n),a}(b);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitDelButton=n._popup.querySelector("#submitdel"),n._callBack=t,n}return t=a,(n=[{key:"open",value:function(e,t){x(V(a.prototype),"open",this).call(this),this._element=e,this._cardId=t}},{key:"setEventListeners",value:function(){var e=this;x(V(a.prototype),"setEventListeners",this).call(this),this._submitDelButton.addEventListener("click",(function(t){t.preventDefault(),e._callBack(e._cardId,e._popup,e._element)}))}}])&&T(t.prototype,n),a}(b);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"setUserInfo",(function(e){o._nameProfile.textContent=e.name,o._subnameProfile.textContent=e.about,o._profileAvatarImage.src=e.avatar})),this._nameProfile=t,this._subnameProfile=n,this._profileAvatarImage=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.name=this._nameProfile.textContent,this._userData.about=this._subnameProfile.textContent,this._userData.avatar=this._profileAvatarImage.src,this._userData}}])&&N(t.prototype,n),e}();function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfileData",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers}).then(this._checkResponse)}},{key:"getPutLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"getPutDisLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"updateСardInfo",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteСard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}])&&z(t.prototype,n),e}(),F=new d(f,r);F.enableValidation();var G=new d(f,o);G.enableValidation();var K=new d(f,i);K.enableValidation();var Q=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27/"},{authorization:"822c2109-7d84-466c-adc0-fb811f9f5603","Content-Type":"application/json"}),W=new J(u,s,l);function X(e){var t=document.querySelector(".elements__loading");e?t.classList.remove("elements__loading_invisible"):t.classList.add("elements__loading_invisible")}function Y(e,t){t.querySelector(".popup__submit").value=e?"Загрузка...":"Применить"}Q.getProfileData().then((function(r){W.setUserInfo(r),Q.getInitialCards("cards").then((function(e){X(!0);var t=Array.from(e);return t.reverse(),t})).then((function(o){var i=new m({items:o,renderer:function(e){u({name:e.name,link:e.link,alt:e.name,likes:e.likes,ownerId:e.owner._id,id:e._id,userId:r._id})}},".elements");function u(e){var t=function(e){return new h(e.name,e.link,e.alt,e.likes,e.ownerId,e.id,e.userId,"#elementcard",s,l,p,v).generateCard()}(e);i.addItem(t)}function s(e){return!!e.find((function(e){return e._id===r._id}))}function l(e,t,n,r){s(t)?Q.getPutDisLike("".concat(e)).then((function(e){n.updateLikes(e,r)})).catch((function(e){console.log("Ошибка: ".concat(e))})):Q.getPutLike("".concat(e)).then((function(e){n.updateLikes(e,r)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}i.renderer();var f=new O("#popup-image");function p(e,t){f.open(e,t)}f.setEventListeners();var _=new B("#popup-add",(function(e,t){Y(!0,t),Q.updateСardInfo(e).then((function(e){var t={name:e.name,link:e.link,alt:e.name,likes:e.likes,ownerId:e.owner._id,id:e._id,userId:r._id};return u(t),_.close(),t})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Y(!1,t)}))}));t.addEventListener("click",(function(){G.resetValidation(),_.open()})),_.setEventListeners();var d=new B("#popup-edit",(function(e,t){Y(!0,t),Q.updateUserInfo(e).then((function(e){d.close(),W.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Y(!1,t)}))}));e.addEventListener("click",(function(){var e;e=W.getUserInfo(),a.value=e.name,c.value=e.about,d.open(),F.resetValidation()})),d.setEventListeners();var y=new H("#popup-del",(function(e,t,n){Y(!0,t),Q.deleteСard(e).then((function(){n.remove(),y.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Y(!1,t)}))}));function v(e,t){y.open(e,t)}y.setEventListeners();var b=new B("#popup-avatar",(function(e,t){Y(!0,t),Q.updateAvatar(e).then((function(e){b.close(),W.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Y(!1,t)}))}));n.addEventListener("click",(function(){K.resetValidation(),b.open()})),b.setEventListeners()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){X(!1)}))})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){X(!1)}))}();