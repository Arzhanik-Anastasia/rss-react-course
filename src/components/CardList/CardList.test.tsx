import { render } from '@testing-library/react';
import { vi } from 'vitest';
import data from '../../data';
import CardList from './CardList';

describe('CardList test', (): void => {
  it('renderCard', () => {
    const onLiked = vi.fn();
    const { getAllByRole } = render(<CardList term={''} data={data} onLiked={onLiked} />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(6);
  });
  it('filtered card', () => {
    const onLiked = vi.fn();
    const { getAllByRole } = render(<CardList term="zoo" data={data} onLiked={onLiked} />);
    const li = getAllByRole('listitem');
    expect(li.length).toEqual(1);
  });
});
