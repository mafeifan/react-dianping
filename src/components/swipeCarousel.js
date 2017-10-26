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
    const options = {
      auto: 2000,
      callback: index => this.setState({
        index: index
      })
    }
    return (
      <ReactSwipe className="carousel" swipeOptions={options}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
    );
  }
}
