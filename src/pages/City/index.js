import React from 'react'
import Header from './Header'
import CityList from './CityList'
import localStore from '../../util/localStore'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as userInfoActions from '$redux/actions/userInfo'

import './style.styl'

const CurrentCity = ({cityName}) => {
  return (
    <div className="current-city">
      <h2>{cityName}</h2>
    </div>
  )
}

class City extends React.Component {
  constructor({ match }) {
    super();
    this.state = {
      match
    }
  }

  changeCity(newCity) {
    if (newCity == null) {
      return
    }
    // 修改 redux
    const userInfo = this.props.userInfo
    userInfo.cityName = newCity
    this.props.userInfoActions.update(userInfo)

    localStore.set('cur_city', newCity)

    // 跳转页面
    this.props.history.push('/')
  }

  render() {
    const cityName = this.props.userInfo.cityName;
    return (
      <div>
        <Header title="选择城市"></Header>
        <CurrentCity cityName={cityName} />
        <CityList changeCallback={this.changeCity.bind(this)}></CityList>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
