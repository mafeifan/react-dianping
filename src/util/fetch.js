export default {
  get: function (url) {
    return fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    })
    .then(res => res.json())
    .then(res => res)
  },
  post: function () {
  }
}
