import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const propTypes = {
  close: PropTypes.func.isRequired,
}

export const AuthRedirect = ({ close }) => {
  useEffect(() => {
    close()
  }, [close])

  return <Redirect to="/" />
}
AuthRedirect.propTypes = propTypes