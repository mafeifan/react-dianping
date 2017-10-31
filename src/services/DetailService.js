import fetch from '../util/fetch'

export function getDetail(id) {
  return fetch.get(`/api/detail/info/${id}`)
}

export function getComment(page, id) {
  return fetch.get(`/api/detail/comment/${page}/${id}`)
}
