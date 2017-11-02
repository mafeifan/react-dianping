import fetch from '../util/fetch'

export function getSearchData(cityName, category, keyword) {
  const keywordStr = keyword ? '/' + keyword : ''

  return `/api/search/{page}/${cityName}/${category}${keywordStr}`
}
