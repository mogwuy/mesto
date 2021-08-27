export default class Api {
    constructor(dataApi) {
        this._baseUrl = dataApi.baseUrl;
    }

    getInitialCards(entity, method) {
        return fetch(`${this._baseUrl}${entity}`, {
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
             return Promise.reject(res.status);
            }) 
    }

}

