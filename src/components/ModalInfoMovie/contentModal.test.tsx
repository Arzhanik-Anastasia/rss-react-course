import { render, screen } from '@testing-library/react';
import Content from './ContentModal';
import { vi } from 'vitest';

describe('Content', () => {
  it('render component Content', () => {
    const onCloseModal = vi.fn();
    render(
      <Content
        backdrop_path={'img'}
        overview={'description'}
        release_date={'2020-02-08'}
        title={'title'}
        vote_average={73.2}
        vote_count={236}
        onCloseModal={onCloseModal}
      ></Content>
    );
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image.src).toContain('img');
  });

  it('render component Content without img', () => {
    const onCloseModal = vi.fn();
    render(
      <Content
        backdrop_path={null}
        overview={'description'}
        release_date={'2020-02-08'}
        title={'title'}
        vote_average={73.2}
        vote_count={236}
        onCloseModal={onCloseModal}
      />
    );
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image.src).toContain('no-photo');
  });
});
