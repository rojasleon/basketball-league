import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import SideBar from '../components/side-bar'
import { getTeamNames } from '../api'
import slug from 'slug'

class Teams extends Component {
  state = {
    teamNames: [],
    loading: true
  }

  async componentDidMount() {
    const teamNames = await getTeamNames()

    this.setState(() => ({
      teamNames,
      loading: false
    }))
  }

  render() {
    const { loading, teamNames } = this.state
    const { location, match } = this.props
    return (
      <div className="container two-column">
        <SideBar
          loading={loading}
          title="Teams"
          list={teamNames}
          {...this.props}
        />

        {loading === false && location.pathname === '/teams'
          ? <div className="sidebar-instruction">Select a team</div>
          : null
        }
      </div>
    )
  }
}
export default Teams