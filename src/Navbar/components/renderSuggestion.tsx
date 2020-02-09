import React from 'react';
import { RenderSuggestionParams } from 'react-autosuggest';

import { Genre, Movie } from '../../Movies/types';
import { Span, Text } from '../../UiElements/Typography/Text';
import Box from '../../UiElements/Layout/Box';
import mapGenres from '../../utils/mapGenres';

const renderSuggestionWithGenres = (
  suggestion: Movie,
  suggestionParams: RenderSuggestionParams,
  genres: Genre[]
) => {
  const { query } = suggestionParams;
  const { title, genreIds } = suggestion;
  const matchStart = title.toLowerCase().indexOf(query.toLowerCase());
  const genresCopy = mapGenres(genreIds, genres, 2);

  const movieGenres = (
    <Text small mb={1} color='copy.secondary'>
      {genresCopy}
    </Text>
  );

  if (matchStart !== -1) {
    return (
      <Box boxShadow={1} p={2}>
        <Text mb={1}>
          <Span color='primary.main'>{title.slice(matchStart, matchStart + query.length)}</Span>
          {title.slice(matchStart + query.length)}
        </Text>
        {movieGenres}
      </Box>
    );
  }

  return (
    <Box boxShadow={1} p={2}>
      <Text mb={0}>{title}</Text>
      {movieGenres}
    </Box>
  );
};

export default renderSuggestionWithGenres;
