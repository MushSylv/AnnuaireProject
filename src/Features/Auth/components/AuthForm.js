import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import {
  AuthBackground, AuthBox, AuthTitle, AuthMessage, SendMessage
} from './styled'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const generalStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '2%'
  },
  internalButton: {
    flex: 1,
    padding: 0,
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    marginRight: "2%"
  }
}));

const GreenButton = withStyles({
  root: {
    color: "rgba(0, 128, 43, 1)",
    border: "1px solid rgba(0, 128, 43, 0.5)",
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      border: "1px solid rgba(0, 128, 43, 1)",
      backgroundColor: "rgba(0, 128, 43, 0.07)",
    }
  }
})(Button)

const GreenTextField = withStyles({
  root: {
    marginBottom: "3%",
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField)

const propTypes = {
  close: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  openReset: PropTypes.func.isRequired
}

export const AuthForm = ({ close, submit, isInvalid, resetPassword, isForgettingPassword, openReset, isMailSend}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const classes = generalStyles();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  const handleChangeResetEmail = (e) => {
    setResetEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(email, pass)
  }

  const prevent = (e) => {
    e.stopPropagation()
  }

  const authPage = () =>  {
    return (
      <>
        <AuthTitle>Connexion</AuthTitle>
        <form noValidate onSubmit={handleSubmit} className={classes.container} >
          <GreenTextField
            value={email}
            onChange={handleChangeEmail}
            // error={isInvalid}
            label="email"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <GreenTextField
            id="outlined-password-input"
            // error={isInvalid}
            label="mot de passe"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChangePass}
            value={pass}
          />
          <div className={classes.buttonContainer}>
            <GreenButton type="submit" variant="outlined" color="primary" size="large" className={classes.internalButton}>
              se connecter
            </GreenButton>
          </div>
        </form>
      </>
    )
  }
}

AuthForm.propTypes = propTypes
