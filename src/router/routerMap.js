import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '$pages/Home/'
import List from '$pages/List/'
import City from '$pages/City/'
import Detail from '$pages/Detail/'
import Search from '$pages/Search/'
import Demo from '$pages/Demo/'
import NoMatch from './404'

export class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          { /*
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
          <hr/>
          */ }
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city" component={City} />
            <Route path="/list" component={List} />
            <Route exact path="/demo" component={Demo} />
            <Route path="/search/:category/:keyword?" component={Search} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
