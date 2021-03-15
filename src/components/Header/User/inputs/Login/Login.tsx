import React from 'react';
import { Grid, Input } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

function Login({ login, setLogin }) {
  return (
        <Grid item>
            <Input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              placeholder="Username"
              startAdornment={<AccountCircle />}
            />
        </Grid>
  );
}

export default Login;
