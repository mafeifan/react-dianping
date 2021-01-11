import React from 'react'
// 1. 引入 context
import {ThemeContext} from '../../context/theme.context';
import {Link, Redirect} from 'react-router-dom'
import SearchInput from '../SearchInput'

import './style.styl'

export default class HomeHeader extends React.Component {
  // 2.  指定 contextType 读取当前的 theme context。
  static contextType = ThemeContext;

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      isToSearch: ''
    }
  }

  enterHandle(value) {
    this.setState({
      isToSearch: encodeURIComponent(value)
    })
  }


  render() {
    // 3. 使用 context
    let theme = this.context;
    console.log(theme);
    let className = `clear-fix ${theme}`;
    return this.state.isToSearch ? <Redirect to={'/search/all/' + encodeURIComponent(this.state.isToSearch)}/> : (
      <div id="home-header" className={className}>
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
