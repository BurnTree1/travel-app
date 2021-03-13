import React, { FC } from 'react';
import { Dialog } from '@material-ui/core';

type props = {
  open: boolean,
  onClose: () => void,
  onSwitch: () => void
};

const SignUp: FC<props> = ({ open, onClose }) => (
        <div>
            <Dialog open={open} onClose={onClose} />
        </div>
);

export default SignUp;
