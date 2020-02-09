import React from 'react';
import { MovieInfo } from '../MovieDetails/types';

export interface Movie {
  backdropPath?: string;
  posterPath?: string;
  genreIds: number[];
  voteAverage: number;
  title: string;
  id: number;
}

export interface Genre {
  id: number;
  name: string;
}

export type Filter = 'popular' | 'nowPlaying' | 'topRated' | 'upcoming';

const filterLabels: Record<Filter, string> = {
  popular: 'Popular',
  nowPlaying: 'Now playing',
  topRated: 'Top rated',
  upcoming: 'Upcoming'
};

export const filters = Object.keys(filterLabels).map((key) => ({
  name: key as Filter,
  label: filterLabels[key as Filter]
}));

export interface MoviePage {
  movies: Movie[];
  totalPages: number;
}

export interface MoviesState {
  fetchingGenres: boolean;
  genres: Record<number, string>;
  currentPage: number;
  fetchingMovies: boolean;
  currentFilter: Filter;
  movies: Movie[];
  totalPages: number;
  error: string | null;
  watchList: MovieInfo[];
}

export interface MoviesDispatchProps {
  onPageChange({ selected }: { selected: number }): void;
}

export interface HomeDispatchProps {
  fetchMovies(): void;
}

export type HomeProps = HomeDispatchProps;

export type MoviesProps = MoviesDispatchProps & MoviesState;

export interface MovieFilterDispatchProps {
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export interface MovieFilterStateProps {
  filter: Filter;
}

export type MovieFilterProps = MovieFilterDispatchProps & MovieFilterStateProps;

export interface WatchListDispatchProps {
  removeFromWatchList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export interface WatchListItem {
  id: number;
  title: string;
  posterPath: string;
}

export interface WatchListStateProps {
  watchList: WatchListItem[];
}

export type WatchListProps = WatchListDispatchProps & WatchListStateProps;
