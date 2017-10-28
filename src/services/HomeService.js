import fetch from '../util/fetch'

export function getAdData() {
  return fetch.get('/api/homead')
}

export function getListData(city, page) {
  return fetch.get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
}
