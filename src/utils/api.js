class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
  
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }

    postCard({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }

    patchAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link
            })
        })
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }


    putLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {headers: this._headers})
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }

    patchUserInfo({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then(this._checkResponse)
        .then((result) => {
            return result;
        })
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
    headers: {
      authorization: 'b14febf0-0b28-4e38-a9e1-9974acb9fa00'
    }
  });

export default api;