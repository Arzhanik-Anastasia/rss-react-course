import { render } from '@testing-library/react';
import data from '../../data';
import CardList from './CardList';

describe('CardList test', (): void => {
  it('renderCard', () => {
    const { getAllByRole } = render(<CardList search={''} data={data} />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(6);
  });
  it('filtered card', () => {
    const { getAllByRole } = render(<CardList search="zoo" data={data} />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(1);
  });
});
