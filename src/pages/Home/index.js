import React from 'react'
import HomeHeader from '../../components/HomeHeader/index';
import { connect } from 'react-redux'
import Category from "./category/index";
import Ad from "./ad/index";
import List from "./List/index";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader cityName = { this.props.userInfo.cityName }></HomeHeader>
        <Category></Category>
        <div style={{height: '15px'}}>{/* 分割线 */}</div>
        <Ad></Ad>
        <List cityName={this.props.userInfo.cityName}></List>
      </div>
    )
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
