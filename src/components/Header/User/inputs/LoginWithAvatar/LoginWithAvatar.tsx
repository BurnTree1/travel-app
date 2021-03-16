import React, { useState } from 'react';
import { Avatar, Grid, Input } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

function LoginWithAvatar({ login, setLogin, setFile }) {
  const [image, setImage] = useState('');

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setFile(file);
    reader.onloadend = () => {
      setImage((reader as any).result);
    };
    reader.readAsDataURL(file);
  };

  return (
        <Grid item style={{ display: 'flex' }}>
            <Input
              style={{ width: '165px' }}
              error={login === ''}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              placeholder="Username"
              startAdornment={<AccountCircle />}
            />
            <div>
                <label htmlFor="image-input">
                    <input
                      style={{ display: 'none' }}
                      accept="image/*"
                      id="image-input"
                      type="file"
                      onChange={handleUploadClick}
                    />
                    <Avatar src={image} />
                </label>
            </div>
        </Grid>
  );
}

export default LoginWithAvatar;
