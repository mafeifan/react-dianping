import React from 'react'
import Star from '$components/Star/index'

export default (props) => {
  return props.content ?
    <div id="detail-info-container">
      <div className="info-container clear-fix">
        <div className="info-img-container float-left">
          <img src={props.content.img}/>
        </div>
        <div className="info-content">
          <h1>{props.content.title}</h1>
          <div className="star-container">
            {/* 引用 Star 组件 */}
            <Star star={props.content.star}></Star>
            <span className="price">￥{props.content.price}</span>
          </div>
          <p className="sub-title">{props.content.subTitle}</p>
        </div>
      </div>
      {/*  */}
      <p dangerouslySetInnerHTML={{ __html: props.content.desc }}></p>
    </div>
    : ''
}
