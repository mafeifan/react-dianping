import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import SearchInput from '$components/SearchInput/index'

export default class SearchList extends React.Component {
  constructor(props, content) {
    super(props, content);
    this.state = {
      redirect: false
    }
  }

  clickHandle() {
    window.history.back()
  }

  enterHandle(value) {
    if (value) {
      this.setState({
        redirect: '/search/all/'
      })
    }else {
      this.setState({
        redirect: '/'
      })
    }
  }

  render() {
    return this.state.redirect ? <Redirect push to={this.state.redirect} /> : (
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
