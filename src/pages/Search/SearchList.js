import React from 'react'
import { connect } from 'react-redux'
import ListComponent from '$components/List/index'
import ListLoadingMoreComponent from '$components/base/ListLoadingMoreComponent'
import { getSearchData } from '$services/SearchService'

class SearchList extends React.Component {
  constructor() {
    super();
  }

  clickHandle(item) {
    // this.props.history.push('/detail/' + item)
  }

  render() {
    const cityName = this.props.userInfo.cityName
    const category = this.props.category
    const keywordStr = this.props.keyword ? '/' + this.props.keyword : ''
    const url = `/api/search/{page}/${cityName}/${category}${keywordStr}`
    console.log(url)
    return (
      <div>
        <ListLoadingMoreComponent url={url}>
          <ListComponent></ListComponent>
        </ListLoadingMoreComponent>
      </div>
    )
  }
}

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
)(SearchList)
