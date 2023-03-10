import { Component } from 'react';
import CardForm from '../../components/CardForm/CardForm';
import Header from '../../components/Header/Header';
import UncontrolledForm from '../../components/UnControlledForm/UnControlledForm';
import { IFormValue } from '../../types/interfaces';
import './formPage.css';

type IState = {
  formValue: IFormValue[] | [];
};

class FormPage extends Component<IState> {
  state = {
    formValue: [],
  };

  onAddCard = (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string
  ) => {
    const newItem = {
      firstName,
      lastName,
      zipCode,
      birthDay,
      country,
    };

    const newArr = [...this.state.formValue, newItem];
    this.setState({ formValue: newArr });
  };

  render() {
    const { formValue } = this.state;
    const elements = formValue.map((item, index) => {
      return <CardForm key={index} {...item} />;
    });

    return (
      <div className="form__page">
        <Header />
        <h2 className="formpage__title">Form Page</h2>
        <UncontrolledForm onAddCard={this.onAddCard} />
        <ul className="card__list-form">{elements}</ul>
      </div>
    );
  }
}

export default FormPage;
