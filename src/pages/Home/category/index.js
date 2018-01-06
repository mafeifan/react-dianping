import React from 'react'
import SwipeCarousel from '$components/SwipeCarousel';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.styl'

class Category extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0
    }
  }

  render() {
    const swipeOptions = {
      auto: 1500, // 切换间隔
      callback: function (index) {
        // 更新当前轮播图的index
        this.setState({index: index});
      }.bind(this)
    }
    // 正常情况下，分类应该是从后台读取并显示的，这里偷懒写死了
    return (
      <div id="home-category">
        <SwipeCarousel swipeOptions={swipeOptions}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/jingdian"><li className="float-left jingdian">景点</li></Link>
              <Link to="/search/ktv"><li className="float-left jingdian">KTV</li></Link>
              <Link to="/search/gouwu"><li className="float-left jingdian">购物</li></Link>
              <Link to="/search/shenghuofuwu"><li className="float-left jingdian">生活服务</li></Link>
              <Link to="/search/jianshenyundong"><li className="float-left jingdian">健身运动</li></Link>
              <Link to="/search/meifa"><li className="float-left jingdian">美发</li></Link>
              <Link to="/search/qinzi"><li className="float-left jingdian">亲子</li></Link>
              <Link to="/search/xiaochikuaican"><li className="float-left jingdian">小吃快餐</li></Link>
              <Link to="/search/zizhucan"><li className="float-left jingdian">自助餐</li></Link>
              <Link to="/search/jiuba"><li className="float-left jingdian">酒吧</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/meishi"><li className="float-left jianshenyundong">美食</li></Link>
              <Link to="/search/dianying"><li className="float-left jianshenyundong">电影</li></Link>
              <Link to="/search/jiudian"><li className="float-left jianshenyundong">酒店</li></Link>
              <Link to="/search/xuixianyule"><li className="float-left jianshenyundong">休闲娱乐</li></Link>
              <Link to="/search/waimai"><li className="float-left jianshenyundong">外卖</li></Link>
              <Link to="/search/huoguo"><li className="float-left jianshenyundong">火锅</li></Link>
              <Link to="/search/liren"><li className="float-left jianshenyundong">丽人</li></Link>
              <Link to="/search/dujiachuxing"><li className="float-left jianshenyundong">度假出行</li></Link>
              <Link to="/search/zuliaoanmo"><li className="float-left jianshenyundong">足疗按摩</li></Link>
              <Link to="/search/zhoubianyou"><li className="float-left jianshenyundong">周边游</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/ribencai"><li className="float-left shaokao">日本菜</li></Link>
              <Link to="/search/spa"><li className="float-left shaokao">SPA</li></Link>
              <Link to="/search/jiehun"><li className="float-left shaokao">结婚</li></Link>
              <Link to="/search/xuexipeixun"><li className="float-left shaokao">学习培训</li></Link>
              <Link to="/search/xican"><li className="float-left shaokao">西餐</li></Link>
              <Link to="/search/huochejipiao"><li className="float-left shaokao">火车机票</li></Link>
              <Link to="/search/shaokao"><li className="float-left shaokao">烧烤</li></Link>
              <Link to="/search/jiazhuang"><li className="float-left shaokao">家装</li></Link>
              <Link to="/search/chongwu"><li className="float-left shaokao">宠物</li></Link>
              <Link to="/search/all"><li className="float-left shaokao">全部分类</li></Link>
            </ul>
          </div>
        </SwipeCarousel>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? 'selected' : ''}></li>
            <li className={this.state.index === 1 ? 'selected' : ''}></li>
            <li className={this.state.index === 2 ? 'selected' : ''}></li>
          </ul>
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
)(Category)
