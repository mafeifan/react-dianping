import fetch from '../util/fetch'

export function getOrderList(userName) {
  return fetch.get(`/api/orderlist/${userName}`)
}

export function postComment(id, comment) {
  return fetch.post(`/api/submitComment`, {
    id,
    comment
  })
}
