import React, { FC, useState } from 'react';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core';
import { initUser } from 'Actions';
import { useDispatch } from 'react-redux';
import { userApi } from 'Api';
import { AUTH_TOKEN_NAME } from 'Helpers';
import styles from '../UserDialog.module.css';
import LoginWithAvatar from '../inputs/LoginWithAvatar/LoginWithAvatar';
import Password from '../inputs/Password/Password';

type props = {
  open: boolean,
  onClose: () => void,
  openSignIn: () => void
};

const SignUp: FC<props> = ({ open, onClose, openSignIn }) => {
  const [login, setLogin] = useState('');
  const [image, setImage] = useState();
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

  const validate = () => ((image)
      && (login && login !== '')
      && (password && password !== ''));

  const sendUserData = () => {
    if (!validate()) {
      setIsError(true);
      return;
    }
    setIsLoaded(true);
    userApi.signUp(login, password, image)
      .then((data) => {
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
    openSignIn();
  };

  return (
        <Dialog open={open} onClose={clearAndClose}>
            <DialogTitle className={styles.header} disableTypography>
                <Typography align="center" variant="h4">
                    Sign Up
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
                        <LoginWithAvatar login={login} setLogin={setLogin} setFile={setImage} />
                        <Password password={password} setPassword={setPassword} />
                        <Typography color="secondary">
                            {isError ? 'Please input correct data' : ''}
                        </Typography>
                        <Grid item>
                            <Button color="primary" variant="outlined" onClick={sendUserData}>
                                Sign Up
                            </Button>
                        </Grid>
                        {isLoaded && <CircularProgress />}
                    </Grid>
                </form>
            </DialogContent>
            <div className={styles.footer}>
                <Typography
                  align="center"
                  display="block"
                  variant="overline"
                >
                    Have an account?&nbsp;
                    <Button color="primary" onClick={switchDialog}>
                        Sign in
                    </Button>
                </Typography>
            </div>
        </Dialog>
  );
};

export default SignUp;
