import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'Actions';
import styles from '../Header.module.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { AppRootReducer } from '../../../store';

function User() {
  const [openSignIn, setSignInOpen] = useState(false);
  const [openSignUp, setSignUpOpen] = useState(false);

  const dispatch = useDispatch();
  const { isAuth, img } = useSelector<AppRootReducer>((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
        <div>
            <Avatar
              src={isAuth ? img : null}
              alt="avatar"
              className={styles.avatar__img}
              onClick={() => setSignInOpen(true)}
            >
                U
            </Avatar>
            <Button onClick={() => dispatch(fetchUser())} color="primary" variant="outlined">Click</Button>
            <SignIn
              open={openSignIn}
              onClose={() => setSignInOpen(false)}
              onSwitch={() => setSignUpOpen(true)}
            />
            <SignUp
              open={openSignUp}
              onClose={() => setSignUpOpen(false)}
              onSwitch={() => setSignInOpen(true)}
            />
        </div>
  );
}

export default User;
