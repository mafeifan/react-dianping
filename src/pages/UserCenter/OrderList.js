import React from 'react'
import Item from './Item'
import { getOrderList } from '$services/OrderService'

export default class OrderList extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getOrderList('11').then(res => {
      this.setState({
        data: res
      })
    })
  }

  submitComment() {

  }

  render() {
    const data = this.state.data
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          data.length ?
             <div>
              {data.map((item, index) => {
                return <Item key={index} data={item}
                             />
              })}
            </div> :
            <div>{/* loading */}</div>
        }
      </div>
    )
  }
}
