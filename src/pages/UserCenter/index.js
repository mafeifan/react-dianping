import React from 'react'
import Header from '$components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '$redux/actions/userInfo'

class UserCenter extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header title="用户中心"/>
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
)(UserCenter)
