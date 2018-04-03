import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SideBar from '../components/side-bar'
import { getTeamNames } from '../api'
import TeamLogo from '../components/team-logo'
import slug from 'slug'
import Team from '../containers/team'

import Loading from '../components/loading'

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

        <Route path={`${match.url}/:teamId`} render={({ match }) => (
          <div className="panel">
            <Team id={match.params.teamId}>
              {(team) => team === null
                ? <Loading />
                : <div style={{ width: '100%' }}>
                    <TeamLogo id={team.id} className="center" />
                    <h1 className="medium-header">{team.name}</h1>
                    <ul className="info-list row">
                      <li>Established<div>{team.established}</div></li>
                      <li>Manager<div>{team.manager}</div></li>
                      <li>Coach<div></div>{team.coach}</li>
                    </ul>
                    <Link className="center btn-main" to={`/${match.params.teamId}`}>
                      {team.name} Team page
                    </Link>
                  </div>
              }
            </Team>
          </div>
        )} />
      </div>
    )
  }
}
export default Teams
