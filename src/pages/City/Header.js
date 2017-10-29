import React from 'react'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  clickHandle() {
    window.history.back()
    // const backRouter = this.props.backRouter
    // if (backRouter) {
    //   this.props.history.push(hashHistory)
    // } else {
    //
    // }
  }

  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHandle.bind(this)}>
            <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
