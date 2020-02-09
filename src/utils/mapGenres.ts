import { Genre } from '../Movies/types';

export default function(genreIds: number[], genres: Genre[], limit: number): string {
  return genreIds
    .slice(0, limit)
    .map((id) => genres[id])
    .join(', ');
}
