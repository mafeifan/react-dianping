import React from 'react'
import localStore from '../../util/localStore'
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'
import * as userInfoActions from '$redux/actions/userInfo'
import { bindActionCreators } from 'redux'

// 为当前的 theme 创建一个 context（“light”为默认值）。
import {ThemeContext} from '../../context/theme.context';

class PrimaryLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initDone: false,
      themeConfig: {
        color: 'red'
      }
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
      <ThemeContext.Provider value={this.state.themeConfig.color}>
        <div className="primary-layout">
          <header>
            <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }}/>
          </header>
          <main>
            <div>{ this.state.initDone ? this.props.children : <p>加载中...</p>}</div>
          </main>
          <footer/>
        </div>
      </ThemeContext.Provider>
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
