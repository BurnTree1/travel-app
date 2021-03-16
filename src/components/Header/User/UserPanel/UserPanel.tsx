import React from 'react';
import { Popper, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from 'Actions';
import { userApi } from 'Api';

function UserPanel({ anchorEl, onClose }) {
  const dispatch = useDispatch();

  const signOut = () => userApi.logout()
    .then(() => {
      dispatch(logout());
      onClose();
    });

  return (
        <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} style={{ zIndex: 2 }}>
            <Button onClick={signOut} color="inherit" variant="contained">
                Logout
            </Button>
        </Popper>
  );
}

export default UserPanel;
