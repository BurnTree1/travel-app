import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'Actions';
import styles from '../Header.module.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { AppRootReducer } from '../../../store';
import UserPanel from './UserPanel/UserPanel';

function User() {
  const [openSignIn, setSignInOpen] = useState(false);
  const [openSignUp, setSignUpOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  // @ts-ignore
  const { isAuth, img } = useSelector<AppRootReducer>((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const avaClick = (e) => ((isAuth) ? setAnchorEl(anchorEl ? null : e.currentTarget)
    : setSignInOpen(true));

  return (
        <div>
            <Avatar src={isAuth ? img : null} className={styles.avatar__img} onClick={avaClick} />
            <UserPanel
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
            />
            <SignIn
              open={openSignIn}
              onClose={() => setSignInOpen(false)}
              openSignUp={() => setSignUpOpen(true)}
            />
            <SignUp
              open={openSignUp}
              onClose={() => setSignUpOpen(false)}
              openSignIn={() => setSignInOpen(true)}
            />
        </div>
  );
}

export default User;
