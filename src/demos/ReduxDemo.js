import React from 'react';
import { connect } from 'react-redux';
import * as userInfoActions from "$redux/actions/userInfo";
import { bindActionCreators } from 'redux';

class C extends React.Component {
  handleClick() {
    const actions = this.props.actions;
    actions.login({
      userId: 'edg'
    })
  }
  render() {
    return (
      <div><button onClick={this.handleClick.bind(this)}>{this.props.userInfo.userId}</button></div>
    )
  }
}

class ReduxDemo extends React.Component {
  render() {
    return (
      <div>
        <C actions={this.props.userInfoActions} userInfo={this.props.userInfo}></C>
      </div>
    )
  }

  componentDidMount() {
    this.props.userInfoActions.login({
      userId: 'abc'
    })
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
)(ReduxDemo)
