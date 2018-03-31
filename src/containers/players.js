import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SideBar from '../components/side-bar'
import { getPlayers } from '../api'
import { parse } from 'query-string'
import slug from 'slug'

class Players extends Component {
  state = {
    players: [],
    loading: true
  }

  componentDidMount() {
    const { location } = this.props

    location.search
      ? this.fetchPlayers(parse(location.search).teamId)
      : this.fetchPlayers()
  }

  fetchPlayers = async (teamId) => {
    const players = await getPlayers(teamId)
    this.setState(() => ({
      loading: false,
      players
    }))
  }
  render() {
    const { players, loading } = this.state
    const { match, location } = this.props
    return (
      <div className="container two-column">
        <SideBar
          loading={loading}
          title="Players"
          list={players.map(player => player.name)}
          {...this.props}
        />

        {loading === false && location.pathname === '/players'
          ? <div className="sidebar-instruction">Select a Player</div>
          : null
        }
      </div>
    )
  }
}
export default Players