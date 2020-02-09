import React from 'react';
import { propOr } from 'ramda';
import Autosuggest, {
  ChangeEvent,
  GetSuggestionValue,
  InputProps,
  OnSuggestionsClearRequested,
  RenderSuggestion,
  SuggestionsFetchRequested
} from 'react-autosuggest';

import { searchMovies } from '../../api/movies';
import { Movie } from '../../Movies/types';
import '../../styles/autosuggest.css';
import renderSuggestionWithGenres from './renderSuggestion';
import StyledAutosuggest from './StyledAutosuggest';
import { SearchBoxProps } from '../types';

interface State {
  value: string;
  suggestions: Movie[];
}

const getSuggestionValue: GetSuggestionValue<Movie> = propOr('', 'title');

class SearchBox extends React.PureComponent<SearchBoxProps, State> {
  readonly state: State = {
    value: '',
    suggestions: []
  };

  componentDidMount(): void {
    this.props.fetchGenres();
  }

  onSuggestionFetchRequested: SuggestionsFetchRequested = async ({ value }) => {
    const { data } = await searchMovies(value);
    this.setState({
      suggestions: data.results.slice(0, 5)
    });
  };

  onSuggestionsClearRequested: OnSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  onChange = (event: React.FormEvent<HTMLInputElement>, params: ChangeEvent): void => {
    this.setState({ value: params.newValue });
  };

  getInputProps = (): InputProps<Movie> => ({
    placeholder: 'Search by title',
    value: this.state.value,
    onChange: this.onChange
  });

  renderSuggestion: RenderSuggestion<Movie> = (suggestion, onSuggestionSelected) =>
    renderSuggestionWithGenres(suggestion, onSuggestionSelected, this.props.genres);

  render() {
    return (
      <StyledAutosuggest>
        <Autosuggest
          suggestions={this.state.suggestions}
          getSuggestionValue={getSuggestionValue}
          inputProps={this.getInputProps()}
          onSuggestionsFetchRequested={this.onSuggestionFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.props.onSuggestionSelected}
        />
      </StyledAutosuggest>
    );
  }
}

export default SearchBox;
