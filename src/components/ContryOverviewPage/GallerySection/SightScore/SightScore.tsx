/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect, useDispatch } from 'react-redux';
import {
  IReduxState, countriesType, sight, IScoreData,
} from 'Types';
import { userApi } from 'Api';
import Box from '@material-ui/core/Box';
import './sightScore.css';
import { updateSightScore } from 'Actions';
import SightScoresList from './sightsScoresList/SightScoresList';

const getScore = (user: any, item: sight) => {
  if (user && item.scores && item.scores.length > 0) {
    const index = item.scores.findIndex((score: IScoreData) => score.user === user._id);
    if (index > -1) {
      return item.scores[index].score;
    }
  }
  return 0;
};

const SightScore = (props: { country: countriesType, isAuth: boolean, user: any, slideId: number }) => {
  const {
    country, isAuth, user, slideId,
  } = props;
  const [currentScore, setScore] = useState<number>(getScore(user, country.sights[slideId]));
  const dispatch = useDispatch();

  useEffect(() => {
    setScore(getScore(user, country.sights[slideId]));
  }, [slideId, user, country]);

  const onChangeRating = async (event: any, value: number | null) => {
    if (value) {
      setScore(value);
      await userApi.score(value, country.sights[slideId]._id);

      const data = {
        country,
        score: value,
        user,
        sightId: country.sights[slideId]._id,
      };

      dispatch(updateSightScore(data));
    }
  };

  return (
    <div className="sight-score-controls">
      <SightScoresList scoreList={country.sights[slideId].scores} />
      {isAuth && (
        <Box component="fieldset" mb={0} borderColor="transparent">
            <Rating
              name="customized-empty"
              value={currentScore}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={onChangeRating}
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
