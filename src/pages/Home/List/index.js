import React from 'react'
import { connect } from 'react-redux'
import ListComponent from '$components/List/index'
import ListLoadingMoreComponent from '$components/base/ListLoadingMoreComponent'

class List extends React.Component {
  constructor() {
    super()
  }

  render() {
    const url = '/api/homelist/' + encodeURIComponent(this.props.cityName) + '/{page}'
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <ListLoadingMoreComponent url={url}>
          <ListComponent></ListComponent>
        </ListLoadingMoreComponent>
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
