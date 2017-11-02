import React from 'react'
import SearchHeader from './SearchHeader';
import SearchList from './SearchList';
import './style.styl'

export default class Search extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match
    }
  }

  //路由 /search/:category/:keyword?

  render() {
    const { category, keyword } = this.state.match.params
    return (
      <div>
        <SearchHeader></SearchHeader>
        <SearchList category={category} keyword={keyword}></SearchList>
      </div>
    )
  }
}
