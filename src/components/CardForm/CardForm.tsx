import { Component } from 'react';
import { IFormValue } from '../../types/interfaces';
import './cardForm.css';

class CardForm extends Component<IFormValue> {
  render() {
    const { firstName, lastName, zipCode, birthDay } = this.props;
    return (
      <li className="card_form">
        <p>name: {firstName}</p>
        <p>surName: {lastName}</p>
        <p>zipcode: {zipCode} </p>
        <p>birthDay: {birthDay}</p>
        {/* <p>sex: Female</p>
        <p>birthDay: 1705020</p>
        <p>Country: Belarus</p> */}
      </li>
    );
  }
}
export default CardForm;
