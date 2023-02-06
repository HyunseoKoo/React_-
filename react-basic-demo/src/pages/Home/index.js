import React from 'react';
import styled from 'styled-components';
import { flex } from '../style/common';
import { movieInfo } from '../style/common';
import { borderRadius } from '../style/common';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
function Movie({ adult, title, vote_average, poster_path, release_date }) {
  return (
    <S.MovieContainer>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <S.MovieInfo>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </S.MovieInfo>
      <S.MovieInfoDetail>
        {adult ? '전체관람' : '청소년관림불가'}
        <div>개봉일: {release_date}</div>
      </S.MovieInfoDetail>
    </S.MovieContainer>
  );
}
export default Movie;

const MovieContainer = styled.div`
  margin: 16px;
  width: 250px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const MovieInfo = styled.div`
  ${flex}
  ${movieInfo}
`;

const MovieInfoDetail = styled.div`
  ${movieInfo}
`;

const S = {
  MovieContainer,
  MovieInfo,
  MovieInfoDetail,
};
