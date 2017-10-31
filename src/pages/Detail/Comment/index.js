import React from 'react'

import LoadLoadingComponent from '$components/base/ListLoadingComponent';

import { getComment } from '$services/DetailService';
import './style.styl'

export default class Comment extends React.Component {
  constructor({ match }) {
    console.log(match)
    super();
    this.state = {
      match,
      shopDetail: ''
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    // const shopId = this.state.match.params.id
    // getComment(1, shopId)
    //   .then(res => {
    //     this.setState({
    //       shopDetail: res
    //     })
    //   })
  }

  render() {
    return (
      <div id="detail-info-container">
        <LoadLoadingComponent url={`/api/detail/comment/1/1848371718587769`}>

        </LoadLoadingComponent>
      </div>
    )
  }
}
