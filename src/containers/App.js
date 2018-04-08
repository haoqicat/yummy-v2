import React, { Component } from 'react'
import Main from '../components/Main'
import '../assets/global.css'
import { fetchUsers } from '../actions/userActions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  render() {
    return <Main />
  }
}

export default connect(null, {
  fetchUsers
})(App)
