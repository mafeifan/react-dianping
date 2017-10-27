import React from 'react'
import HomeHeader from '../../components/HomeHeader';
import { connect } from 'react-redux'
import Category from "./Category";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader cityName = { this.props.userInfo.cityName }></HomeHeader>
        <Category></Category>
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
