import CardForm from '../../components/CardForm/CardForm';
import Modal from '../../components/Form/Modal/Modal';
import Form from '../../components/Form/Form';
import { useAppDispatch, useAppSelector } from './../../store/hooks';
import { addformCard, toggleModal } from './../../reducer/formReducer';
import './formPage.css';

const FormPage = () => {
  const formCard = useAppSelector((state) => state.formCard.cardForm);
  const modal = useAppSelector((state) => state.formCard.modal);
  const dispatch = useAppDispatch();

  const onAddCard = (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string,
    news: boolean,
    avatar: File,
    check: boolean
  ) => {
    dispatch(addformCard({ firstName, lastName, zipCode, birthDay, country, news, avatar, check }));
    dispatch(toggleModal(true));
  };

  const elements = formCard.map((item, index) => {
    return <CardForm key={index} {...item} />;
  });

  return (
    <>
      <div className="form__page">
        <h2 className="formpage__title">Form Page</h2>
        <Form onAddCard={onAddCard} />
        <ul className="card__list-form">{elements}</ul>
      </div>
      {modal ? <div className="overlay"></div> : ''}
      {modal ? <Modal onClickModal={() => dispatch(toggleModal(false))} /> : ''}
    </>
  );
};

export default FormPage;
