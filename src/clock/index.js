import React from 'react'
import button from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/button";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: true
    }
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    })
  }

  render() {
    return (<button onClick={() => this.handleClick()}>{this.state.isOn ? 'ON' : 'OFF'}</button>);
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick())
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return <h2><Toggle/>{this.state.date.toLocaleTimeString()}</h2>
  }
}

export default Clock
