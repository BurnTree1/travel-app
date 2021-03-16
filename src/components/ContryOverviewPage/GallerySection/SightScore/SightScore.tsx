import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
import { IReduxState, countriesType } from 'Types';
import Box from '@material-ui/core/Box';
import './sightScore.css';
import SightScoresList from './sightsScoresList/SightScoresList';

const SightScore = (props: { country: countriesType, isAuth: boolean, user: any, slideId: number }) => {
  const {
    country, isAuth, user, slideId,
  } = props;
  console.log(country);
  console.log('user', user);
  console.log('slideId', slideId);

  return (
    <div className="sight-score-controls">
      <SightScoresList scoreList={country.sights[slideId].scores} />
      {isAuth && (
        <Box component="fieldset" mb={0} borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={0}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={(...arg) => console.log(arg)}
            />
        </Box>
      )}
    </div>
  );
};

const mapStateToProps = (state: { countries: IReduxState, user: { isAuth: boolean, user: any } }, props) => ({
  country: state.countries.country,
  isAuth: state.user.isAuth,
  user: state.user,
  ...props,
});

export default connect(mapStateToProps)(SightScore);
