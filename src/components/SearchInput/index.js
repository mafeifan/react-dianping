import React from 'react'
import './style.styl'

export default class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    // 默认值
    this.setState({
      value: this.props.value || ''
    })
  }

  ChangeHandle(e) {
    // 监控变化
    this.setState({
      value: e.target.value
    })
  }

  KeyUpHandle(e) {
    // 监控 enter 事件
    if (e.keyCode !== 13) {
      return
    }
    // 加验证
    if (e.target.value) {
      this.props.enterHandle(e.target.value)
    }else {
      alert('请输入关键字')
    }
  }

  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="请输入关键字"
        onChange={this.ChangeHandle.bind(this)}
        onKeyUp={this.KeyUpHandle.bind(this)}
        value={this.state.value}/>
    )
  }
}
