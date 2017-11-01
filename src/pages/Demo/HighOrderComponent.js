import React from 'react'

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

export function withHeader(WrappedComponent) {
  return class HOC extends React.Component {
    // 在React组件查看中显示Hoc(被传入的组件名)
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
      return <div>
        <div className="demo-header">
          我是标题
        </div>
        <WrappedComponent {...this.props}/>
      </div>
    }
  }
}

export const HighOrderComponent = (WrapComponent, title) => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: ''
      }
    }
    componentWillMount() {
      let username = localStorage.getItem('username');
      this.setState({
        username: username
      });
    }
    static displayName = `HOC(${getDisplayName(WrapComponent)})`;
    render() {
      return(
        <div>
          <h3>{title}</h3>
          <WrapComponent username={this.state.username}></WrapComponent>
        </div>
      )
    }
  }
}
