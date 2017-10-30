import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput'
import { Redirect } from 'react-router-dom'

import './style.styl'

export default class HomeHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      isToSearch: ''
    }
  }
  enterHandle(value) {
    this.setState({
      isToSearch: encodeURIComponent(value)
    })
    // this.context.router.push('/search/all/' + encodeURIComponent(value))
    // this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
  render() {
    if (this.state.isToSearch) {
      return (
        <Redirect to={'/search/all/' + encodeURIComponent(this.state.isToSearch)}/>
      )
    }

    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to="/Login">
            <i className="icon-user"></i>
          </Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            &nbsp;
            <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
