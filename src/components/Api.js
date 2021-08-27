export default class Api {
    constructor(dataApi, renderLoadingForm) {
        this._baseUrl = dataApi.baseUrl;
        this._renderLoadingForm = renderLoadingForm;
    }

    getTasks(entity, method, bodyData) {
        return fetch(`${this._baseUrl}${entity}`, {
            method: method,
            headers: {
               authorization: '822c2109-7d84-466c-adc0-fb811f9f5603',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(bodyData)
            })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
             return Promise.reject(res.status);
            }) 
          .catch((err) => {
              //Вывод ошибки
              console.log(`Ошибка: ${err}`); 
              })
              .finally(() => {
                this._renderLoadingForm(false)
              });
    }

   
}

