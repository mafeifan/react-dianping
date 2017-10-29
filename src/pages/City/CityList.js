import React from 'react'

export default class CityList extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match
    }
  }

  cityList() {
    return ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津',
            '重庆', '厦门', '武汉', '郑州'];
  }

  clickHandle(cityName) {
    console.log(cityName)
    const changeFn = this.props.changeCallback
    changeFn(cityName)
  }

  render() {
    return (
      <div className="city-list-container">
        <h3>选择城市</h3>
        <div>热门城市</div>
        <ul className="clear-fix">
          {this.cityList().map((item, index) => {
            return <li key={index}><span onClick={this.clickHandle.bind(this, item)}>{item}</span></li>
          })}
        </ul>
      </div>
    )
  }
}
