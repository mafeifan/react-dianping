import React from 'react'
import Header from '$components/Header'

import { getDetail } from '$services/DetailService';
import './style.styl'
import Comment from "./Comment/index";

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
      <div id="detail-info-container">
        <Header title="商户详情" type="share"/>
        <Info content={this.state.shopDetail}></Info>
        <Desc content={this.state.shopDetail}></Desc>
        <Comment></Comment>
      </div>
    )
  }
}


const Info = (props) => {
  return props.content ?
    <div className="info-container clear-fix">
      <div className="info-img-container float-left">
        <img src={props.content.img}/>
      </div>
      <div className="info-content">
        <h1>{props.content.title}</h1>
        <div className="star-container">
          {/* 引用 Star 组件 */}
          ***
          <span className="price">￥{props.content.price}</span>
        </div>
        <p className="sub-title">{props.content.subTitle}</p>
      </div>
    </div>
    :  ''
}

const Desc = props => props.content ? <p dangerouslySetInnerHTML={{ __html: props.content.desc }}></p> : ''
