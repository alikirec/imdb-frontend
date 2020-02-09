import { Actor, MovieInfo } from '../types';

export const exampleMovieInfo: MovieInfo = {
  id: 123,
  backdropPath: '/backdrop',
  budget: 100000,
  genres: [{ id: 1, name: 'Action' }],
  overview: 'Lorem ipsum',
  posterPath: '/poster',
  releaseDate: '2019-12-10',
  runtime: 120,
  status: 'Released',
  tagline: 'Tag line',
  title: 'Pulp fiction',
  voteAverage: 8.7
};

export const exampleActor: Actor = {
  character: 'Vincent Vega',
  name: 'John Travolta',
  id: 123,
  profilePath: '/profile_image'
};
