import React from 'react'

export default class Search extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match
    }
  }

  clickHandle(item) {
    // this.props.history.push('/detail/' + item)
  }

  render() {
    const { category, keyword } = this.state.match.params
    console.log(category)
    return (
      <div>
        <h3>List Page</h3>
      </div>
    )
  }
}
