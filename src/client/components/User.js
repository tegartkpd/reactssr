import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from '../../store/reducer/user'

class User extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  renderUser () {
    return this.props.user.map((user, i) => (
      <li key={i}>{user.name}</li>
    ))
  }
  render () {
    return (
      <div>
        <h2 />List of User
        <ul>{this.renderUser()}</ul>
      </div>
    )
  }
}

export const loadData = store => store.dispatch(fetchUser())

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { fetchUser })(User)
