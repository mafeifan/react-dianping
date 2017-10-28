import React from 'react'
import { connect } from 'react-redux'
import { getAdData } from '../../../services/HomeService';

import './style.styl'

class Ad extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    getAdData()
      .then(res => {
        this.setState({
          items: res
        })
      })
  }
  render() {
    return (
      <div id="home-sale">
        <h2>超值特惠</h2>
        <div className="sale-container clear-fix">
          {this.state.items.map((item, index) => {
            return <div key={index} className="sale-item float-left">
              <a href="#"><img src={item.img} alt={item.title}/></a>
            </div>
          })}
        </div>
      </div>
    )
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ad)
