import React from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { connect } from 'react-redux';
import { IReduxState, countriesType } from 'Types';
import {
  Fab, ListItemText, Menu, MenuItem, MenuProps, withStyles,
} from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
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

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
    <Fab color="primary" aria-label="add" size="medium" onClick={handleClick}>
      {anchorEl ? <ExpandLess /> : <ExpandMore />}
    </Fab>
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
        <StyledMenuItem>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
    </StyledMenu>
    </>
  );
};

const mapStateToProps = (state: { countries: IReduxState }) => ({
  country: state.countries.country,
});

export default connect(mapStateToProps)(SightScoresList);
