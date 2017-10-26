import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../pages/Home/'
import List from '../pages/List/'
import Detail from '../pages/Detail/'
import NoMatch from './404'

export class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={List} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
