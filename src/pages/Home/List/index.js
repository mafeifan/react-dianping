import React from 'react'
import { connect } from 'react-redux'
import { getListData } from '../../../services/HomeService';
import ListComponent from "../../../components/List/index";

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this.resultHandle(result)
  }

  loadMoreData() {
   this.setState({
     isLoadingMore: true
   })

   const page = this.state.page

   this.setState({
     page: page + 1,
     isLoadingMore: false
   })
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
