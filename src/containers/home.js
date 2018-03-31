import React, { Component } from 'react'
import TeamLogo from '../components/team-logo'
import { Link } from 'react-router-dom'
import { getTeamNames } from '../api'

class Home extends Component {
  state = {
    teamNames: []
  }
  async componentDidMount() {
    const teamNames = await getTeamNames()
    this.setState(() =>({ teamNames }))
    console.log(this.state.teamNames)
  }
  render() {
    const { teamNames } = this.state
    return (
      <div className="container two-column">
        <h1 className="large-header">Hash History Basketball League</h1>
        <h3 className="header text-center">Select a name</h3>
        <div className="home-grid">
          {teamNames.map((id) => {
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width="125px" />
            </Link>
          })}
        </div>
      </div>
    )
  }
}
export default Home