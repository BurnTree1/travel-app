import React, { FC } from 'react';
import {
  Dialog, DialogTitle, DialogContent,
  Typography, TextField, Grid, Button,
} from '@material-ui/core';
import { useInputState } from 'Helpers';
import { userApi } from 'Api';
import { useDispatch } from 'react-redux';
import { initUser } from 'Actions';
import styles from '../UserDialog.module.css';

type props = {
  open: boolean,
  onClose: () => void,
  onSwitch: () => void
};

const SignIn: FC<props> = ({ open, onClose, onSwitch }) => {
  const [login, setLogin] = useInputState('');
  const [password, setPassword] = useInputState('');
  const dispatch = useDispatch();

  const sendUserData = () => {
    // @ts-ignore
    userApi.signIn(login, password)
      .then((user) => {
        console.log(user);
        dispatch(initUser(user));
      });
  };

  // @ts-ignore
  return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle className={styles.header} disableTypography>
                    <Typography align="center" variant="h4">
                        Sign In
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <form className={styles.userForm}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          spacing={3}
                        >
                            <Grid item>
                                {/* @ts-ignore */}
                                <TextField
                                  value={login}
                                  onChange={setLogin}
                                  required
                                  placeholder="Username"
                                />
                            </Grid>
                            <Grid item>
                                {/* @ts-ignore */}
                                <TextField
                                  value={password}
                                  onChange={setPassword}
                                  required
                                  placeholder="Password"
                                  type="password"
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                  color="primary"
                                  variant="outlined"
                                  onClick={sendUserData}
                                >
Sign In
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <div className={styles.footer}>
                    <Typography align="center" display="block" variant="overline">
                        Dont Have an account?&nbsp;
                        <Button color="primary" onClick={onSwitch}>
                            Create one
                        </Button>
                    </Typography>
                </div>
            </Dialog>
        </div>
  );
};

export default SignIn;
