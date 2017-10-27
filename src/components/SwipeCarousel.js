import React from 'react'
import ReactSwipe from 'react-swipe';

export default class SwipeCarouselComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  render() {
    const options = {
      // auto: 2000,
      // callback: index => this.setState({
      //   index: index
      // })
    }
    return (
      <ReactSwipe className="carousel" swipeOptions={Object.assign(options, this.props.swipeOptions)}>
        {this.props.children}
      </ReactSwipe>
    );
  }
}
