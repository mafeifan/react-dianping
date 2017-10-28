import React from 'react'
import localStore from '../../util/localStore'

import { connect } from 'react-redux';
import * as userInfoActions from "../../actions/userInfo";
import { bindActionCreators } from 'redux';

class PrimaryLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      initDone: false
    }
  }
  componentDidMount() {
    let cityName = localStore.get('cur_city')
    if (cityName == null) {
      cityName = '北京'
    }

    this.props.userInfoActions.update({
      cityName: cityName
    })

    // 模拟加载中
    setTimeout(() => this.setState({
      initDone: true
    }), 1000)
  }
  render() {
    return (
      <div className="primary-layout">
        <header></header>
        <main>
          <div>{ this.state.initDone ? this.props.children : <div>加载中...</div>}</div>
        </main>
        <footer className="float-left"><p>2017 copyright &copy;</p></footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrimaryLayout)
