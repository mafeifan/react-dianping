import React from 'react'

export default class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  buyClickHandle() {
    const buyHandle = this.props.buyHandle
    buyHandle()
  }

  storeClickHandle() {
    const storeHandle = this.props.storeHandle
    storeHandle()
  }

  render() {
    return (
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            // 是否收藏
            this.props.isStore
            ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
            : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
          }
          <div className="item-container float-right">
            <button onClick={this.buyClickHandle.bind(this)}>购买</button>
          </div>
        </div>
      </div>
    )
  }
}


