import React from 'react'
import Header from '$components/Header'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '$redux/actions/userInfo'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      checking: true
    }
  }

  componentDidMount() {
    // 判断是否已经登录
    this.doCheck()
  }

  doCheck() {
    const userInfo = this.props.userInfo
    if (userInfo.username) {
      // 已经登录，则跳转到用户主页
      this.goUserPage()
    } else {
      // 未登录，则验证结束
      this.setState({
        checking: false
      })
    }
  }

  loginHandle(username) {
    // 保存用户名
    const actions = this.props.userInfoActions
    let userInfo = this.props.userInfo
    userInfo.username = username
    actions.update(userInfo)

    const { refer } = this.props.match.params
    if (refer) {
      // 跳转到指定的页面
      this.props.history.push(refer)
    } else {
      // 跳转到用户主页
      this.goUserPage()
    }
  }

  goUserPage() {
    this.props.history.push('/user')
  }

  render() {
    return (
      <div>
        <Header title="登录"/>
        <LoginForm loginHandle={this.loginHandle.bind(this)}></LoginForm>
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
  mapDispatchToProps
)(Login)
