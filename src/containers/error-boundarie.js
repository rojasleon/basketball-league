import React, { Component } from 'react'

export default class ErrorBoundarie extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState(() => ({ hasError: true }))
    console.log("Error: ", error)
    console.log("Info: ", info)
  }

  render() {
    if(this.state.hasError) {
      return <p>Something went wrong</p>
    }
    return this.props.children
  }
}