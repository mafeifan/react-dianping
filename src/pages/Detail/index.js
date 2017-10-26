import React from 'react'

export default class Detail extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match
    }
  }

  render() {
    console.log(this.state.match)
    return (
      <div>Detail Page {this.state.match.params.id}</div>
    )
  }
}
