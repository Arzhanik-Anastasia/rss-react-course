import './contentModal.css';

export type IPropsContentModal = {
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  onCloseModal: () => void;
};

const Content = ({
  onCloseModal,
  title,
  backdrop_path,
  overview,
  release_date,
  vote_average,
  vote_count,
}: IPropsContentModal) => {
  console.log(vote_average.toFixed(2));
  const img = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : './public/png/no-photo.png';
  return (
    <div className="modal-info" data-testid="modal-info">
      <div className="movie-img">
        <img src={img} alt={title} />
        <div id="cont" data-pct={vote_average * 10} className="percent">
          <svg id="svg" width="50" height="50" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="transparent" />
            <circle cx="60" cy="60" r="50" fill="#100e19" stroke="#94e1ff" strokeWidth="8" />
          </svg>
          <span className="per">{((vote_average * 1000) / 100).toFixed(2)}%</span>
        </div>
      </div>
      <h2 className="modal-info-title">{title}</h2>
      <div className="modal-info-desc">
        <span>Обзор: </span>
        {overview}
      </div>
      <div className="modal-info-release">
        <span>Дата релиза: </span>
        {release_date}
      </div>
      <div className="modal-info-count">
        <span>Количество голосов: </span>
        {vote_count}
      </div>
      <span className="close-modal" data-testid="close-info" onClick={onCloseModal}></span>
    </div>
  );
};

export default Content;
