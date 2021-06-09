import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import React, { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={appNameStyle}>
          Covid19 Status
        </Typography>
        <Button color='inherit' component={Link} to='/'>
          Summary
        </Button>
        <Button color='inherit' component={Link} to='/detailed'>
          Detailed
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const appNameStyle = { flexGrow: 1 };
