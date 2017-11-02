import React from 'react'
import HomeHeader from '$components/HomeHeader/index'
import { connect } from 'react-redux'
import Category from "./category/index"
import Ad from './ad/index'
import List from './List/index'
import fetch from "../../util/fetch";

class Home extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    fetch.get(`/api/search/1/武汉/all/锅`).then(res => {
      console.log(res)
    })
  }

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
