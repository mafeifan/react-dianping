import React from 'react'
import LoadLoadingComponent from '$components/base/ListLoadingComponent';
import { getComment } from '$services/DetailService';
import CommentList from './CommentList'

import './style.styl'

export default class Comment extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match,
      shopDetail: ''
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="detail-comment-subpage">
        <h2>用户点评</h2>
        <LoadLoadingComponent url={`/api/detail/comment/{page}/7777`}>
          <CommentList></CommentList>
        </LoadLoadingComponent>
      </div>
    )
  }
}
