import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const { title, author, description, img, seeCount, likedCount, liked } = fakeData;
    render(
      <CardListItem
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
    expect(screen.getByTestId('like-btn')).not.toHaveClass('icon-like-active');
  });

  it('render card with like true', () => {
    const { title, author, description, img, seeCount, likedCount } = fakeData;
    const { container, getByTestId } = render(
      <CardListItem
        title={title}
        author={author}
        description={description}
        img={img}
        likedCount={likedCount}
        seeCount={seeCount}
        liked={true}
      />
    );
    expect(getByTestId('like-btn')).toHaveClass('icon-like-active');
    userEvent.click(getByTestId('like-btn'));
    expect(container.innerHTML).toMatch((likedCount + 1).toString());
  });
});
