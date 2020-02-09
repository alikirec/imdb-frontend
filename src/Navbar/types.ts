import { OnSuggestionSelected } from 'react-autosuggest';

import { Genre, Movie } from '../Movies/types';
import React from 'react';

export interface SearchBoxDispatchProps {
  onSuggestionSelected: OnSuggestionSelected<Movie>;
  fetchGenres(): void;
}

export interface SearchBoxStateProps {
  genres: Genre[];
}

export type SearchBoxProps = SearchBoxDispatchProps & SearchBoxStateProps;

interface CustomMenuProps {
  open: boolean;
}

export interface MenuStateProps {
  isAuthenticated: boolean;
}

export interface MenuDispatchProps {
  logout(): void;
}

export type MenuOwnProps = CustomMenuProps & React.HTMLAttributes<HTMLDivElement>;

export type MenuProps = MenuStateProps & MenuDispatchProps & MenuOwnProps;
