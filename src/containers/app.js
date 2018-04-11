import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from '../components/loading'
import DynamicImport from './dynamic-import'

import Navbar from '../components/navbar'


//import ErrorBoundarie from './error-boundarie'

const Home = (props) => (
  <DynamicImport load={() => import('./home')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)

const Players = (props) => (
  <DynamicImport load={() => import('./players')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)

const Teams = (props) => (
  <DynamicImport load={() => import('./teams')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)

const TeamPage = (props) => (
  <DynamicImport load={() => import('./team-page')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)

const Articles = (props) => (
  <DynamicImport load={() => import('./articles')}>
    {(Component) => Component === null
      ? <Loading a />
      : <Component {...props} />
    }
  </DynamicImport>
)

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
