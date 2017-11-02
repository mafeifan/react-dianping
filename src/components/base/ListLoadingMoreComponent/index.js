import React from 'react'
import PropTypes from 'prop-types';
import LoadMoreComponent from "$components/LoadMore/index";
import './style.styl'

export default class ListLoadingComponent extends React.Component {
  static defaultProps = {
    url: ''
  }

  static propTypes = {
    url: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [], // 后台返回结果中必须带有这个
      hasMore: false, // 后台返回结果中必须带有这个
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

  // 替换 {page} 为当前实际的请求地址
  getRealUrl() {
    return this.props.url.replace('{page}', this.state.page)
  }

  loadFirstPageData() {
    const url = this.getRealUrl()
    const result = this.fetch(url)
    this.resultHandle(result)
  }

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })

    const url = this.getRealUrl()
    const result = this.fetch(url)

    // 本地模拟 延迟一秒处理数据
    setTimeout(() => {
      this.resultHandle(result)
      this.setState({
        isLoadingMore: false
      })
    }, 1000)
  }

  // 从后台成功拿到数据后更新state
  resultHandle(result) {
    result.then(res => {
      this.setState({
        page: ++this.state.page,
        // TODO 验证返回结果里必须带有这个字段
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data)
      })
    })
  }

  clickHandle() {
    this.props.loadMoreFn();
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        data: this.state.data,
      });
    });

    return (
      <div className="List-loading-container">
        {childrenWithProps}
        <LoadMoreComponent
          isLoadingMore={this.state.isLoadingMore}
          loadMoreFn={this.loadMoreData.bind(this)}>
        </LoadMoreComponent>
      </div>
    )
  }
}
