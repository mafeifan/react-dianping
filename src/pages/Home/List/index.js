import React from 'react'
import { connect } from 'react-redux'
import { getListData } from '../../../services/HomeService';
import ListComponent from "../../../components/List/index";
import LoadMoreComponent from "../../../components/LoadMore/index";

class List extends React.Component {
  constructor() {
    super()
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

  loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, this.state.page)
    this.resultHandle(result)
  }

  // 这个方法是供loadMore组件调用
  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })

    const cityName = this.props.cityName
    const result = getListData(cityName, this.state.page)

    setTimeout(() => {
      this.resultHandle(result)
      this.setState({
        page: this.state.page++,
        isLoadingMore: false
      })
    }, 1000)

 }

  resultHandle(result) {
     result.then(res => {
       this.setState({
         hasMore: res.hasMore,
         data: this.state.data.concat(res.data)
       })
     })
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <ListComponent data={this.state.data}></ListComponent>
        <LoadMoreComponent
          isLoadingMore={this.state.isLoadingMore}
          loadMoreFn={this.loadMoreData.bind(this)}>
        </LoadMoreComponent>
      </div>
    )
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
