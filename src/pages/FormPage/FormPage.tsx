import { Component } from 'react';
import CardForm from '../../components/CardForm/CardForm';
import Header from '../../components/Header/Header';
import Modal from '../../components/UnControlledForm/Modal/Modal';
import UncontrolledForm from '../../components/UnControlledForm/UnControlledForm';
import { IFormValue } from '../../types/interfaces';
import './formPage.css';

type IState = {
  formValue: IFormValue[] | [];
  modal: boolean;
};

class FormPage extends Component<Record<string, unknown>, IState> {
  state = {
    formValue: [],
    modal: false,
  };

  onAddCard = (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string,
    news: boolean,
    avatar: File,
    agree: boolean
  ) => {
    const newItem = {
      firstName,
      lastName,
      zipCode,
      birthDay,
      country,
      news,
      avatar,
      agree,
    };
    const newArr = [...this.state.formValue, newItem];
    this.setState({ formValue: newArr, modal: true });
  };

  onClickModal() {
    this.setState({ modal: false });
  }

  render() {
    const { formValue, modal } = this.state;
    const elements = formValue.map((item, index) => {
      const card = item as IFormValue;
      return <CardForm key={index} {...card} />;
    });

    return (
      <>
        <div className="form__page">
          <Header />
          <h2 className="formpage__title">Form Page</h2>
          <UncontrolledForm onAddCard={this.onAddCard} />
          <ul className="card__list-form">{elements}</ul>
        </div>
        {modal ? <div className="overlay"></div> : ''}
        {modal ? <Modal onClickModal={() => this.onClickModal()} /> : ''}
      </>
    );
  }
}

export default FormPage;
