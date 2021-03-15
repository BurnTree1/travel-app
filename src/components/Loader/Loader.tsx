import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styles from './Loader.module.scss';

export const Loader = () => (
    <div className={styles.overlay}>
      <CircularProgress size={100} />
    </div>
);
