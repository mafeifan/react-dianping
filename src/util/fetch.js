
// 对原生fetch方法的简单封装
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
  var result = '';
  var item;
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item]);
  }

  if (result) {
    result = result.slice(1);
  }

  return result;
}

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

  post: function (url, paramsObj) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: obj2params(paramsObj)
    })
    .then(res => res.json())
  }
}
