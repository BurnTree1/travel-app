import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { initUser } from 'Actions';
import { userApi } from 'Api';
import { AUTH_TOKEN_NAME } from 'Helpers';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  const clearAndClose = () => {
    setLogin('');
    setPassword('');
    setIsError(false);
    onClose();
  };

  const validate = () => ((login && login !== '')
        && (password && password !== ''));

  const sendUserData = () => {
    if (!validate()) {
      setIsError(true);
      return;
    }
    setIsLoaded(true);
    userApi.signIn(login, password)
      .then(({ data }) => {
        localStorage.setItem(AUTH_TOKEN_NAME, data.token);
        dispatch(initUser(data));
        clearAndClose();
      })
      .catch(() => {
        setIsError(true);
      })
      .then(() => setIsLoaded(false));
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
                            {isLoaded && <CircularProgress />}
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
