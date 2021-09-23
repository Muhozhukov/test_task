class Api {
    constructor(options) {
      this.headers = options.headers;
      this.baseUrl = options.baseUrl;
    }
    _handleOriginalResponse(res) {
      if(res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getPosts() {
      return fetch(`${this.baseUrl}`, {
        headers: {
          // authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
      .then(this._handleOriginalResponse)
    }
  }
  //123
  const api = new Api({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts/',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  export default api;
  