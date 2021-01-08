import React from 'react'

class MyContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // https://doc.react-china.org/docs/react-api.html#reactchildren
    const childrenWithProps = React.Children.map(this.props.children, child => {
        // console.log(child)
        return React.cloneElement(child, { style: {color: '#f00'}, baseInfo: 'efg' })
      }
    );

    // https://doc.react-china.org/docs/react-api.html#reactchildrentoarray
    // 使用他更好操作，比如切割，重新排序
    const children = React.Children.toArray(this.props.children);
    children.forEach(function(item){
      console.log(item)
    });

    return (
      <div>
        <h1>I am Main Container</h1>
        {childrenWithProps}
      </div>
    );
  }
}

class MySub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p style={this.props.style}>
        {this.props.subInfo} # I-am-sub-container # {this.props.baseInfo}
      </p>
    );
  }
}


export default () => {
  return (
    <div>
      <MyContainer>
        <MySub subInfo={"abc"} />
        <MySub subInfo={"ggg"} />
      </MyContainer>
    </div>
  )
}
