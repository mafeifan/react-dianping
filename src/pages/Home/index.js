import React from 'react'
import SwipeCarousel from '../../components/swipeCarousel';
import HomeHeader from '../../components/HomeHeader';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader></HomeHeader>
        <SwipeCarousel></SwipeCarousel>
      </div>
    )
  }
}
