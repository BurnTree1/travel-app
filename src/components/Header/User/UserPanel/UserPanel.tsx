import React from 'react';
import { Popper, Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from 'Actions';
import { Link } from 'react-router-dom';
import './UserPanel.scss';
import { AUTH_TOKEN_NAME } from 'Helpers';

function UserPanel({ anchorEl, onClose }) {
  const dispatch = useDispatch();

  const signOut = () => {
    localStorage.removeItem(AUTH_TOKEN_NAME);
    dispatch(logout());
    onClose();
  };

  return (
        <Popper className="popper" anchorEl={anchorEl} open={Boolean(anchorEl)}>
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical outlined primary button group"
            >
            <Button className="admin__button" onClick={signOut} color="inherit" variant="contained">
                Logout
            </Button>
            <Button className="admin__button" color="inherit" variant="contained">
                <Link to="/admin">
                    Admin
                </Link>
            </Button>
            </ButtonGroup>
        </Popper>
  );
}

export default UserPanel;
