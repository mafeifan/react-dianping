import React from 'react'
import { postComment } from '$services/OrderService'

// commentState  0-未评价 1-评价中 2-已评价
const [ STATUS_NOT_COMMENT, STATUS_COMMENTING, STATUS_COMMENTED ] = [0, 1, 2]

export default class Item extends React.Component {
  constructor() {
    super()
    this.state = {
      commentState: STATUS_NOT_COMMENT
    }
  }

  showComment() {
    this.setState({
      commentState: STATUS_COMMENTING
    })
  }

  hideComment() {
    this.setState({
      commentState: STATUS_NOT_COMMENT
    })
  }

  submitComment() {
    const id = this.props.data.id
    const commentText = this.refs.commentText.value.trim()
    postComment(id, commentText).then(res => {
      if (res.errno === 0) {
        this.setState({
          commentState: STATUS_COMMENTED
        })
      }
    })
  }

  render() {
    const data = this.props.data

    return (
      <div className="order-item-container">
        <div className="clear-fix">
          <div className="order-item-img float-left">
            <img src={data.img}/>
          </div>
          <div className="order-item-comment float-right">
            {
              this.state.commentState === STATUS_NOT_COMMENT ?
                // 未评价
                 <button className="btn" onClick={this.showComment.bind(this)}>评价</button> :
                this.state.commentState === STATUS_COMMENTING ?
                  // 评价中
                   '' :
                  // 已经评价
                   <button className="btn unseleted-btn">已评价</button>
            }
          </div>
          <div className="order-item-content">
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
        {
          // “评价中”才会显示输入框
          this.state.commentState === STATUS_COMMENTING ?
            <div className="comment-text-container">
              <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
              <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
              &nbsp;
              <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
            </div> : ''
        }
      </div>
    )
  }
}
