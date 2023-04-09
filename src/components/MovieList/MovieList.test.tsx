import { render } from '@testing-library/react';
import { movies } from './../../mocks/mockMovie';
import MovieList from './MovieList';

describe('MovieList', () => {
  it('render', async () => {
    const { container } = render(<MovieList movies={movies} search="Dragon Ball" />);
    expect(container).toHaveTextContent(/Dragon Ball/i);
  });
});
