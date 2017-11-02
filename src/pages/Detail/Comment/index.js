import React from 'react'
import ListLoadingMoreComponent from '$components/base/ListLoadingMoreComponent';
import { getComment } from '$services/DetailService';
import CommentList from './CommentList'

import './style.styl'

export default class Comment extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match,
      shopDetail: '',
      data: []
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const url = `/api/detail/comment/{page}/${this.props.id}`
    return (
      <div className="detail-comment-subpage">
        <h2>用户点评</h2>
        <ListLoadingMoreComponent url={url}>
          <CommentList></CommentList>
        </ListLoadingMoreComponent>
      </div>
    )
  }
}
