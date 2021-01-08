import React from 'react'
import child from './child'


class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  static displayName = 'I am demo component'

  render() {
    return <div>我是一个普通组件</div>
  }
}


// export default EnhanceDemo

export default child
