import React from 'react'
import Header from '$components/Header'
import OrderList from './OrderList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '$redux/actions/userInfo'
import './style.styl'

class UserCenter extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { userName, cityName } = this.props.userInfo
    return (
      <div>
        <Header title="用户中心" backUrl='/'/>
        <div className="userInfo-container">
          <p>
            <i className="icon-user"></i>
            &nbsp;
            <span>{userName}</span>
          </p>
          <p>
            <i className="icon-map-marker"></i>
            &nbsp;
            <span>{cityName}</span>
          </p>
        </div>
        <OrderList></OrderList>
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
