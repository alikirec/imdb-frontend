import { Movie } from '../types';

export const moviesList = {
  page: 1,
  totalResults: 100,
  totalPages: 5,
  results: [
    {
      popularity: 334.089,
      voteCount: 2135,
      video: false,
      posterPath: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
      id: 419704,
      adult: false,
      backdropPath: '/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
      originalLanguage: 'en',
      originalTitle: 'Ad Astra',
      genreIds: [12, 18, 9648, 878, 53],
      title: 'Ad Astra',
      voteAverage: 6,
      overview:
        'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
      releaseDate: '2019-09-17'
    }
  ]
};

export const genresList = {
  genres: [{ id: 28, name: 'Action' }]
};

export const movie = {
  id: 419704,
  backdropPath: '/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
  genreIds: [12, 18, 9648, 878, 53],
  title: 'Ad Astra',
  voteAverage: 6
};
