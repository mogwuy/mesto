export default class Api {
    constructor(dataApi) {
        this._baseUrl = dataApi.baseUrl;
    }

    getInitialCards(entity) {
        return fetch(`${this._baseUrl}${entity}`, {
            headers: {
              authorization: '822c2109-7d84-466c-adc0-fb811f9f5603'
            },
            mode: 'cors'
          })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
             return Promise.reject(res.status);
            }) 
    }

    getLikes (cardId, evt, method)
    {
        fetch(`${this._baseUrl}cards/likes/${cardId}`, {
         method: method,
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
            console.log('Оходит на сервер',cardId, method)    
            console.log('Ответ от сервера',result)     
            const data = Array.from(result.likes);
            console.log('Кол-во Лайков',data.length)
            evt.target.querySelector('.element__nlikes').textContent = data.length;
            return
          })
      }


}

