import { IFormValue } from '../../types/interfaces';
import './cardForm.css';

const CardForm = ({
  firstName,
  lastName,
  zipCode,
  birthDay,
  country,
  news,
  avatar,
}: IFormValue) => {
  const imgAvatar = URL.createObjectURL(avatar);
  return (
    <li className="card_form">
      <div className="user__avatar">
        <img src={imgAvatar} alt="avatar" data-testid="img-avatar" />
      </div>
      <div className="user__info">
        UserInfo
        <p>name: {firstName}</p>
        <p>surName: {lastName}</p>
        <p>zipcode: {zipCode} </p>
        <p>birthDay: {birthDay}</p>
        <p>country: {country}</p>
        <p data-testid="news">Получать уведомления: {news ? 'Да' : 'Нет'} </p>
        <p>Согласен на обработку данных: Да </p>
      </div>
    </li>
  );
};

export default CardForm;
