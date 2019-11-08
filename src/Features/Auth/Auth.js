import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AuthRedirect } from './components/AuthRedirect'
import { AuthForm } from './components/AuthForm'
import { authAction, closeAction, openResetPasswordAction, resetPasswordAction } from '../../Stores/authReducer/auth.actions'

const propTypes = {
  isConnected: PropTypes.bool.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  auth: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}

const Auth = ({
  isConnected, isInvalid, auth, close
}) => {
  return (
  isConnected
    ? <AuthRedirect close={close} />
    : <AuthForm close={close} isInvalid={isInvalid} submit={auth} />
  )
}

Auth.propTypes = propTypes

const mapStateToProps = ({
  authReducer,
}) => ({
  isConnected: authReducer.isConnected,
  isInvalid: authReducer.isInvalid,
})

const mapDispatchToProps = {
  auth: authAction,
  close: closeAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
