import { render } from '@testing-library/react';
import CardList from './CardList';

describe('CardList test', (): void => {
  it('renderCard', () => {
    const { getAllByRole } = render(<CardList term="" />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(6);
  });

  it('filtered card', () => {
    const { getAllByRole } = render(<CardList term="zoo" />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(1);
  });
});
