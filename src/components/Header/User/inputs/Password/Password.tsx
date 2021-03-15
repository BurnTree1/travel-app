import React from 'react';
import { Grid, Input } from '@material-ui/core';
import { VpnKey } from '@material-ui/icons';

function Password({ password, setPassword }) {
  return (
        <Grid item>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              type="password"
              startAdornment={<VpnKey />}
            />
        </Grid>
  );
}

export default Password;
