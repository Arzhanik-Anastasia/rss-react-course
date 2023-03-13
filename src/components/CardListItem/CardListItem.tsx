import { Component } from 'react';
import './cardListItem.css';

type IProps = {
  title: string;
  author: string;
  img: string;
  description: string;
  likedCount: number;
  seeCount: number;
  liked: boolean;
  onLiked?: () => void;
};

class CardListItem extends Component<IProps> {
  render() {
    const { title, author, description, img, seeCount, liked, onLiked, likedCount } = this.props;
    return (
      <li className="card_item">
        <img className="card__img" src={img} alt={title} />
        <h2 className="card__title">{title}</h2>
        <p className="card__author">{author}</p>
        <p className="card__author">{description}</p>
        <div className="card__buttons-block">
          <svg
            className={liked ? 'icon-like-active' : 'icon-like'}
            data-testid="like-btn"
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onLiked}
          >
            <path
              d="M10.9615 0H10.9255C9.49399 0 8.22836 0.6825 7.5 1.69C6.77163 0.6825 5.50601 0 4.07452 0H4.03846C1.80649 0.0195 0 1.65425 0 3.6725C0 4.875 0.584135 6.58125 1.72356 7.98525C3.89423 10.66 7.5 13 7.5 13C7.5 13 11.1058 10.66 13.2764 7.98525C14.4159 6.58125 15 4.875 15 3.6725C15 1.65425 13.1935 0.0195 10.9615 0Z"
              fill="white"
            />
          </svg>

          <span data-testid="like-count">{liked ? likedCount + 1 : likedCount}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" className="icon-see">
            <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
          </svg>
          <span>{seeCount}</span>
        </div>
      </li>
    );
  }
}

export default CardListItem;
