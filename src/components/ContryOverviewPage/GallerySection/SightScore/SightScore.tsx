import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
import { IReduxState, countriesType } from 'Types';
import Box from '@material-ui/core/Box';
import './sightScore.css';
import SightScoresList from './sightsScoresList/SightScoresList';

const SightScore = (props: { country: countriesType }) => {
  const { country } = props;
  console.log(country);

  return (
    <>
      <SightScoresList />
      <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="customized-empty"
            defaultValue={2}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
      </Box>
    </>
  );
};

const mapStateToProps = (state: { countries: IReduxState }) => ({
  country: state.countries.country,
});

export default connect(mapStateToProps)(SightScore);
