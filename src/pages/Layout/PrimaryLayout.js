import React from 'react'
import localStore from '../../util/localStore'
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'
import * as userInfoActions from '$redux/actions/userInfo'
import { bindActionCreators } from 'redux'

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
        <header>
          <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }}/>
        </header>
        <main>
          <div>{ this.state.initDone ? this.props.children : <p>加载中...</p>}</div>
        </main>
        <footer/>
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
