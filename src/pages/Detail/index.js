import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as shopActions from '$redux/actions/shop'
import Header from '$components/Header'
import Info from './Info'
import Buy from './Buy'
import Comment from './Comment/index'
import { getDetail } from '$services/DetailService'
import './style.styl'

class Detail extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match,
      shopDetail: '',
      isStore: false
    }
  }

  componentDidMount() {
    const shopId = this.state.match.params.id
    getDetail(shopId)
      .then(res => {
        this.setState({
          shopDetail: res
        })
      })
  }

  checkLogin() {
    return true
  }

  // 点击购买按钮
  // 未登陆跳转到登录页面，否则跳转到用户中心页面
  buyHandle() {
    console.log(this.props.userInfo)
  }

  // 点击收藏按钮
  storeHandle() {
    const id = this.state.shopDetail.id
    const shopActions = this.props.shopActions
    if (this.state.isStore) {
      shopActions.del({id: id})
    }else {
      shopActions.add({id: id})
    }
    // 修改状态
    this.setState({
      isStore: !this.state.isStore
    })
  }

  render() {
    return (
      <div>
        <Header title="商户详情" type="share"/>
        <Info content={this.state.shopDetail}></Info>
        <Buy
          isStore={this.state.isStore}
          buyHandle={this.buyHandle.bind(this)}
          storeHandle={this.storeHandle.bind(this)}>
        </Buy>
        <Comment id={this.state.match.params.id}></Comment>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    store: state.store
  }
}

function mapDispatchToProps(dispatch) {
  return {
    shopActions: bindActionCreators(shopActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
