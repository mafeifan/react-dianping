import React from 'react'

export default class List extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match
    }
  }

  clickHandle(item) {
    this.props.history.push('/detail/' + item)
  }

  render() {
    const arr = [1,2,3]
    console.log(this.state.match)
    return (
      <div>
        <h3>List Page</h3>
        <ul>
          {
            arr.map((item, index) =>
              <li key={index} onClick={this.clickHandle.bind(this, item)}>{item}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
