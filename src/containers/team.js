import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getTeam } from '../api'

export default class Team extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
  }

  state = {
    team: null
  }

  componentDidMount() {
    this.fetchTeam(this.props.id)
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
    componentWillReceiveProps(nextProps) {
    this.fetchTeam(nextProps.id)
  }

  fetchTeam = async id => {
    this.setState(() => ({
      team: null
    }))

    const team = await getTeam(id)
    this.setState(() => ({ team }))
  }
  render() {
    return (
      this.props.children(this.state.team)
    )
  }
}