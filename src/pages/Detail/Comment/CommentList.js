import React from 'react'
import './style.styl'

export default (props) => {
  const data = props.data
  return (
    <div className="comment-list">
      {data.map((item, index) => {
        return <ListItem key={index} item={item}/>
      })}
    </div>
  )
}

const ListItem = (props) => {
  const item = props.item
  return (
    <div className="comment-item">
      <h3>
        <i className="icon-user"></i>
        &nbsp;
        {item.username}
      </h3>
      <p>{item.comment}</p>
    </div>
  )
}
