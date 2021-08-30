export default class Api {
    constructor(dataApi, headers) {
        this._baseUrl = dataApi.baseUrl;
        this._headers = headers;
    }

    _checkResponse(res){
      
        if (res.ok) {
          return res.json()
        }
         return Promise.reject(res.status);
        
    }

    getProfileData() {
      return fetch(`${this._baseUrl}users/me`, {
        headers: this._headers,
          })
          .then(this._checkResponse)
    }

    getInitialCards(entity) {
      return fetch(`${this._baseUrl}${entity}`, {
        headers: this._headers,
          })
          .then(this._checkResponse)
    }

    getPutLike(entity) {
      return fetch(`${this._baseUrl}cards/likes/${entity}`, {
          method: 'PUT',
          headers: this._headers,
          })
          .then(this._checkResponse)
    }

    getPutDisLike(entity) {
      return fetch(`${this._baseUrl}cards/likes/${entity}`, {
          method: 'DELETE',
          headers: this._headers,
          })
          .then(this._checkResponse)
    }

    updateUserInfo(data) {
      return fetch(`${this._baseUrl}users/me`, {
          method: 'PATCH',
          headers: this._headers,
           body: JSON.stringify({
            name: data.name,
            about: data.about
          })
          })
          .then(this._checkResponse)
    }

    updateСardInfo(data) {
      return fetch(`${this._baseUrl}cards`, {
          method: 'POST',
          headers: this._headers,
           body: JSON.stringify({
            name: data.name,
            link: data.link
          })
          })
          .then(this._checkResponse)
    }

    deleteСard(cardId) {
      return fetch(`${this._baseUrl}cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers,
          })
          .then(this._checkResponse)
    }

    updateAvatar(data) {
      return fetch(`${this._baseUrl}users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
           body: JSON.stringify({
             avatar: data.avatar
            })
          })
        .then(this._checkResponse)
    }
}    

