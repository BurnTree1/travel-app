import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { initUser } from 'Actions';
import { userApi } from 'Api';
import styles from '../UserDialog.module.css';

import LoginInput from '../inputs/Login/Login';
import PasswordInput from '../inputs/Password/Password';

type props = {
  open: boolean,
  onClose: () => void,
  openSignUp: () => void
};

const SignIn: FC<props> = ({ open, onClose, openSignUp }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const clearAndClose = () => {
    setLogin('');
    setPassword('');
    setIsError(false);
    onClose();
  };

  const sendUserData = () => {
    userApi.signIn(login, password)
      .then(({ data }) => {
        dispatch(initUser(data));
        clearAndClose();
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const switchDialog = () => {
    clearAndClose();
    openSignUp();
  };

  return (
        <div>
            <Dialog open={open} onClose={clearAndClose}>
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
                          alignItems="center"
                          spacing={3}
                        >
                            <LoginInput login={login} setLogin={setLogin} />
                            <PasswordInput
                              password={password}
                              setPassword={setPassword}
                            />
                            <Typography color="secondary">
                                {isError ? 'incorrect login or password' : ''}
                            </Typography>
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
                        <Button color="primary" onClick={switchDialog}>
                            Create one
                        </Button>
                    </Typography>
                </div>
            </Dialog>
        </div>
  );
};

export default SignIn;
