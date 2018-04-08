import React from 'react'
import Layout from '../components/Layout'
import { getTitle, getAlertVisibility } from '../selectors'
import { connect } from 'react-redux'
import { getIsAuthenticated } from '../selectors/authSelectors'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  title: getTitle(state),
  isAlertShown: getAlertVisibility(state),
  isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(LayoutContainer)
