import React from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { connect } from 'react-redux';
import { IReduxState, countriesType } from 'Types';
import {
  Fab, Menu, MenuProps, withStyles,
} from '@material-ui/core';
import UserCard from './UserCard/UserCard';

const StyledMenu = withStyles({
  paper: {},
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

const SightScoresList = (props: { country: countriesType }) => {
  const { country } = props;
  console.log(country);
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
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
    </StyledMenu>
    </>
  );
};

const mapStateToProps = (state: { countries: IReduxState }) => ({
  country: state.countries.country,
});

export default connect(mapStateToProps)(SightScoresList);
