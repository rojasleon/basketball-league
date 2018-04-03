import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import Players from './players'
import Teams from './teams'
import TeamPage from './team-page'
import Articles from './articles'

import Navbar from '../components/navbar'
//import ErrorBoundarie from './error-boundarie'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/players" component={Players} />
            <Route path="/teams" component={Teams} />
            <Route path="/:teamId" exact component={TeamPage} />
            <Route path="/:teamId/articles" component={Articles} />
            <Route render={() => <p>Page not found</p>} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App