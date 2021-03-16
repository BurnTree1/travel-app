import React from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import {
  Fab, Menu, MenuProps, withStyles, MenuItem,
} from '@material-ui/core';
import { IScoreData } from 'Types';
import UserCard from './UserCard/UserCard';
import styles from './SightScoresList.module.scss';

const StyledMenu = withStyles({
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

const SightScoresList = (props: { scoreList: IScoreData[] }) => {
  const { scoreList } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Fab color="primary" aria-label="add" size="small" onClick={handleClick}>
      {anchorEl ? <ExpandLess /> : <ExpandMore />}
    </Fab>
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className="custom-material-list"
    >
      {
        scoreList.length > 0
          // eslint-disable-next-line react/no-array-index-key
          ? scoreList.map((item, index) => (<UserCard key={index} scoreData={item} />))
          : (
              <MenuItem className="custom-material-li">
                  <p className={styles.noData}>No Scores</p>
              </MenuItem>
          )
      }
    </StyledMenu>
    </>
  );
};

export default SightScoresList;
