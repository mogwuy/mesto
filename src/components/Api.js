export default class Api {
    constructor(dataApi) {
        this._baseUrl = dataApi.baseUrl;
    }

    getProfileData(entity) {
      return fetch(`${this._baseUrl}${entity}`, {
          headers: {
             authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
             'Content-Type': 'application/json'
           },
          })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
             return Promise.reject(res.status);
            }) 
    }

    getInitialCards(entity) {
      return fetch(`${this._baseUrl}${entity}`, {
          headers: {
             authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
             'Content-Type': 'application/json'
           },
          })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
           return Promise.reject(res.status);
          }) 
    }

    getPutLike(entity) {
      return fetch(`${this._baseUrl}cards/likes/${entity}`, {
          method: 'PUT',
          headers: {
             authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
             'Content-Type': 'application/json'
           }
          })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
           return Promise.reject(res.status);
          }) 
  }
    getPutDisLike(entity) {
      return fetch(`${this._baseUrl}cards/likes/${entity}`, {
          method: 'DELETE',
          headers: {
             authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
             'Content-Type': 'application/json'
           }
          })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
           return Promise.reject(res.status);
          }) 
    }

    updateUserInfo(data) {
      return fetch(`${this._baseUrl}users/me`, {
          method: 'PATCH',
          headers: {
             authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            name: data.name,
            about: data.about
          })
          })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
           return Promise.reject(res.status);
          }) 
        
    }

    updateСardInfo(data) {
      return fetch(`${this._baseUrl}cards`, {
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
        
    }

    deleteСard(cardId) {
      return fetch(`${this._baseUrl}cards/${cardId}`, {
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
           return Promise.reject(res.status);
          }) 
        
    }
    updateAvatar(data) {
      return fetch(`${this._baseUrl}users/me/avatar`, {
          method: 'PATCH',
          headers: {
             authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             avatar: data.avatar
            })
          })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
           return Promise.reject(res.status);
          }) 
        
    }
}    

