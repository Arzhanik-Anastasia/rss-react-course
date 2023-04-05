import { useState } from 'react';
import { IData } from './../../types/interfaces';
import './cardListItem.css';

const CardListItem = (item: IData) => {
  const { img, title, author, description, liked, seeCount, likedCount } = item;
  const [like, setLike] = useState(liked);
  return (
    <li className="card_item">
      <img className="card__img" src={img} alt={title} />
      <h2 className="card__title">{title}</h2>
      <p className="card__author">{author}</p>
      <p className="card__author">{description}</p>
      <div className="card__buttons-block">
        <svg
          width="16"
          height="16"
          viewBox="0.5 0.5 16 16"
          data-testid="like-btn"
          className={like ? 'icon-like-active' : 'icon-like'}
          onClick={() => setLike(!like)}
        >
          <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
        </svg>
        <span data-testid="like-count">{like ? likedCount + 1 : likedCount}</span>

        <svg width="16" height="16" viewBox="0 0 16 16" className="icon-see">
          <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
        </svg>
        <span>{seeCount}</span>
      </div>
    </li>
  );
};

export default CardListItem;
