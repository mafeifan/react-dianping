import React from 'react'
import { withHeader } from './HighOrderComponent'
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


const EnhanceDemo = withHeader(Demo);

// export default EnhanceDemo

export default child
