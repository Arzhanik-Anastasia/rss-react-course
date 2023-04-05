import { render, screen } from '@testing-library/react';
import CardListItem from './CardListItem';

describe('CardItem', (): void => {
  const fakeData = {
    id: 2,
    title: 'Fake Heading',
    author: 'Fake Author',
    img: './../assets/jpg/card56.jpg',
    description: 'Fake Description',
    likedCount: 421,
    seeCount: 812,
    liked: false,
  };

  it('render card with Fakedata', () => {
    const { id, title, author, description, img, seeCount, likedCount, liked } = fakeData;
    render(
      <CardListItem
        id={id}
        title={title}
        author={author}
        description={description}
        img={img}
        likedCount={likedCount}
        seeCount={seeCount}
        liked={liked}
      />
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(author)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(likedCount)).toBeInTheDocument();
    expect(screen.getByText(seeCount)).toBeInTheDocument();
    expect(screen.getByTestId('like-btn')).not.toHaveClass('active');
  });

  it('render card with like true', async () => {
    const { id, title, author, description, img, seeCount, likedCount } = fakeData;
    const like = true;
    const { getByTestId } = render(
      <CardListItem
        id={id}
        title={title}
        author={author}
        description={description}
        img={img}
        likedCount={likedCount}
        seeCount={seeCount}
        liked={like}
      />
    );
    expect(getByTestId('like-btn')).toHaveClass('icon-like-active');
  });
});
