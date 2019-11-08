import React from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { openAction } from './../../../Stores/authReducer/auth.action'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const propTypes = {
  open: PropTypes.func.isRequired,
}

const Navbar = ({open, isConnected }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Annuaire Project
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
               { !isConnected && <MenuItem onClick={handleClose}>Connexion</MenuItem> }
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = propTypes

const mapStateToProps = ({ authReducer }) => ({
  open: authReducer.open,
  isConnected: authReducer.isConnected
})

const mapDispatchToProps = {
  open: openAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)