import React from 'react'

import './style.styl'

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
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
  clickHandle() {
    window.history.back()
  }
}
