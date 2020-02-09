import { Genre } from '../Movies/types';
import React from 'react';

export type MovieStatus =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';

export interface MovieInfo {
  id: number;
  backdropPath?: string;
  budget: number;
  genres: Genre[];
  overview?: string;
  posterPath?: string;
  releaseDate: string;
  runtime: number; // in minutes
  status: MovieStatus;
  tagline?: string;
  title?: string;
  voteAverage?: number;
}

export interface Actor {
  character: string;
  id: number;
  name: string;
  profilePath: string;
}

export interface MovieDetailsState {
  fetchingMovie: boolean;
  movieInfo?: MovieInfo;
  actors?: Actor[];
  images?: string[];
}

export interface MovieDetailsDispatchProps {
  fetchMovieDetails(id: number): void;
  addToWatchList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeFromWatchList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export interface MovieDetailsStateProps {
  movieDetails: MovieDetailsState;
  isInWatchList: boolean;
}

export type MovieDetailsProps = MovieDetailsDispatchProps & MovieDetailsStateProps;
