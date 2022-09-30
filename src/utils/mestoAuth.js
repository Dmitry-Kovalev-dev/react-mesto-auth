
const baseUrl = 'https://auth.nomoreparties.co';

const request = ({url, method = 'POST', token, data}) => {
  return fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...!!token && { "Authorization": `Bearer ${token}` }
    },
    ...!!data && { body: JSON.stringify(data) }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status)
    });
};

export const register = (password, email) => {
  return request({
    url: '/signup',
    data: {
      password: password,
      email: email
    }
  })
};

export const authorization = (password, email) => {
  return request({
    url: '/signin',
    data: {
      password: password,
      email: email
    }
  })
};

export const checkToken = (token) => {
  return request({
    url: '/users/me',
    method: 'GET',
    token
  })
};

