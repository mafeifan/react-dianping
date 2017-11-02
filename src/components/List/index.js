import React from 'react'
import Item from './Item';
import './style.styl'

export default class ListComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  componentDidMount() {
    this.setState({
    })
  }

  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return <div key={index}><Item data={item}></Item></div>
        })}
      </div>
    )
  }
}
