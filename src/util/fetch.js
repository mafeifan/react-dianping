// 对原生fetch方法的简单封装

export default {
  get: function (url) {
    return fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    })
    .then(res => res.json())
  },

  post: function () {
  }
}
