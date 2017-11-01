
// 对原生fetch方法的简单封装
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

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
