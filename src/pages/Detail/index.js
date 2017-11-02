import React from 'react'
import Header from '$components/Header'
import { getDetail } from '$services/DetailService'
import Comment from './Comment/index'
import Info from './Info'
import './style.styl'

export default class Detail extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match,
      shopDetail: ''
    }
  }

  componentWillMount() {

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

  render() {
    return (
      <div>
        <Header title="商户详情" type="share"/>
        <Info content={this.state.shopDetail}></Info>
        <Comment id={this.state.match.params.id}></Comment>
      </div>
    )
  }
}


