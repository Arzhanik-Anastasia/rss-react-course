import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieListItem from './MovieListItem';
import { results } from './../../mocks/mockMovie';

describe('MovieCard', () => {
  it('render', async () => {
    const { container } = render(<MovieListItem id={'1'} item={results[0]} />);
    const user = userEvent.setup();
    expect(container).toHaveTextContent(/Dragon Ball/i);
    const itemMovie = screen.getByTestId('movie-card');
    await user.click(itemMovie);
    const modal = await screen.findByTestId('modal-info');
    expect(modal).toHaveTextContent(/Dragon Ball/i);
    expect(container).toHaveTextContent(/2015-04-18/i);
    const closeElem = screen.getByTestId('close-info');
    expect(closeElem).toBeInTheDocument();
    await user.click(closeElem);
    expect(modal).not.toBeInTheDocument();
  });

  it('close modal with click overlay', async () => {
    render(<MovieListItem id={'1'} item={results[0]} />);
    const user = userEvent.setup();
    const itemMovie = screen.getByTestId('movie-card');
    await user.click(itemMovie);
    const modal = await screen.findByTestId('modal-info');
    const overlay = screen.getByTestId('overlay');
    await user.click(overlay);
    expect(modal).not.toBeInTheDocument();
  });
});
