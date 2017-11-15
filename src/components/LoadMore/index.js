import React from 'react'
import './style.styl'

export default class LoadMoreComponent extends React.Component {

  clickHandle() {
    this.props.loadMoreFn();
  }

  render() {
    return (
      <div className="load-more">
        {
          this.props.isLoadingMore ?
          <span>加载中...</span> :
          <span onClick={this.clickHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}
