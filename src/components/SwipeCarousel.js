import React from 'react'
import ReactSwipe from 'react-swipe';

export default class SwipeCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  render() {
    // 默认配置
    const options = {
      auto: 2000,
    }
    return (
      <ReactSwipe className="carousel" swipeOptions={Object.assign(options, this.props.swipeOptions)}>
        {this.props.children}
      </ReactSwipe>
    );
  }
}
