import { useState } from 'react';
import CardForm from '../../components/CardForm/CardForm';
import Header from '../../components/Header/Header';
import Modal from '../../components/Form/Modal/Modal';
import Form from '../../components/Form/Form';
import { ICardForm } from '../../types/interfaces';
import './formPage.css';

const FormPage = () => {
  const [formValue, setFormValue] = useState<ICardForm[] | []>([]);
  const [modal, setOpenModal] = useState(false);

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
    const newArr = [
      ...formValue,
      { firstName, lastName, zipCode, birthDay, country, news, avatar, check },
    ];
    setFormValue(newArr);
    setOpenModal(true);
  };

  const elements = formValue.map((item, index) => {
    return <CardForm key={index} {...item} />;
  });

  return (
    <>
      <div className="form__page">
        <Header />
        <h2 className="formpage__title">Form Page</h2>
        <Form onAddCard={onAddCard} />
        <ul className="card__list-form">{elements}</ul>
      </div>
      {modal ? <div className="overlay"></div> : ''}
      {modal ? <Modal onClickModal={() => setOpenModal(false)} /> : ''}
    </>
  );
};

export default FormPage;
