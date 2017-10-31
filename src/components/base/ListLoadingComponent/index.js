import React from 'react'
import LoadMoreComponent from "$components/LoadMore/index";

import './style.styl'


export default class ListLoadingComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1,
    }
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  fetch(url) {
    return fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    }).then(res => res.json())
  }

  loadFirstPageData() {
    const result = this.fetch(this.props.url)
    this.resultHandle(result)
  }

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })

    const result = this.fetch(this.props.url)

    setTimeout(() => {
      this.resultHandle(result)
      this.setState({
        isLoadingMore: false
      })
    }, 1000)
  }

  resultHandle(result) {
    result.then(res => {
      this.setState({
        page: ++this.state.page,
        // TODO 返回结果里必须带有这个字段
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data)
      })
    })
  }

  clickHandle() {
    this.props.loadMoreFn();
  }

  render() {
    return (
      <div className="List-loading-container">
        {this.props.children}
        <LoadMoreComponent
          isLoadingMore={this.state.isLoadingMore}
          loadMoreFn={this.loadMoreData.bind(this)}>
        </LoadMoreComponent>
      </div>
    )
  }
}
