import React from 'react'
import SearchInput from '$components/SearchInput/index'

export default class SearchList extends React.Component {
  constructor() {
    super();
  }

  clickHandle() {
    window.history.back()
  }

  enterHandle(value) {
    // /search/:page/:city/:category/:keyword
    this.props.history.push('/api/search/{page}/武汉/all/' + encodeURIComponent(value))
  }

  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
            <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }
}
