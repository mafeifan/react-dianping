import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import SearchInput from '$components/SearchInput/index'

export default class SearchHeader extends React.Component {
  constructor(props, content) {
    super(props, content);
    this.state = {
      redirect: false
    }
  }

  clickHandle() {
    // window.history.back()
    window.location.href = '/'
  }

  enterHandle(value) {
    this.setState({
      redirect: false
    })
    // 避免渲染错误
    if (value === this.props.keyword) {
      return
    }
    if (value) {
      this.setState({
        redirect: '/search/all/' + encodeURIComponent(value)
      })
    }else {
      this.setState({
        redirect: '/'
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return true;
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
          <SearchInput value={decodeURIComponent(this.props.keyword || '') } enterHandle={this.enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }
}
