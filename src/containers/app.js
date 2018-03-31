import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import Players from './players'
import Teams from './teams'

import Navbar from '../components/navbar'

import ErrorBoundarie from './error-boundarie'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/players" component={Players} />
            <ErrorBoundarie>
              <Route path="/teams" component={Teams} />
            </ErrorBoundarie>
            <Route render={() => <p>Page not found</p>} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App