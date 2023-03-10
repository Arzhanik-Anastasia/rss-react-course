/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './unConrolledForm.css';
import React from 'react';
import Input from './InputForm/InputForm';

type IState = {
  firstNameError: boolean;
  firstNameErrorText: string;
  lastNameError: boolean;
  lastNameErrorText: string;
  zipCodeError: boolean;
  zipCodeErrorText: string;
  birthDayError: boolean;
};

type IProps = {
  onAddCard: (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string
  ) => void;
};

class UncontrolledForm extends React.Component<IProps, IState> {
  firstName = React.createRef<HTMLInputElement>();
  lastName = React.createRef<HTMLInputElement>();
  zipCode = React.createRef<HTMLInputElement>();
  birthDay = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLSelectElement>();
  /* sexInput = React.createRef<HTMLInputElement>();
  email = React.createRef<HTMLInputElement>();
  agree = React.createRef<HTMLInputElement>(); */
  state = {
    firstNameError: true,
    firstNameErrorText: '',
    lastNameError: true,
    lastNameErrorText: '',
    zipCodeError: true,
    zipCodeErrorText: '',
    birthDayError: true,
  };

  onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.setState({
      firstNameError: false,
      lastNameError: false,
      zipCodeError: false,
      birthDayError: false,
    });
    if (!this.state.firstNameError && !this.state.lastNameError) {
      this.props.onAddCard(
        this.firstName.current!.value,
        this.lastName.current!.value,
        this.zipCode.current!.value,
        this.birthDay.current!.value,
        this.country.current!.value
      );
    }
  };

  onChangeHandle(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    switch (e.target.name) {
      case 'firstName':
        if (this.firstName.current!.value) {
          this.setState({
            firstNameError: false,
            firstNameErrorText: '',
          });
        } else {
          this.setState({
            firstNameError: true,
            firstNameErrorText: 'Недостаточное количество символов',
          });
        }
        break;
      case 'lastName':
        if (this.lastName.current!.value) {
          this.setState({ lastNameError: false, firstNameErrorText: '' });
        } else {
          this.setState({
            lastNameError: true,
            lastNameErrorText: 'Недостаточное количество символов',
          });
        }
        break;
      case 'zipcode':
        if (this.zipCode.current!.value.length >= 6) {
          this.setState({ zipCodeError: false, zipCodeErrorText: '' });
        } else {
          this.setState({
            zipCodeError: true,
            zipCodeErrorText: 'Минимальное количество символов - 6',
          });
        }
        break;
      case 'birthDay':
        if (this.birthDay.current!.value) {
          this.setState({ birthDayError: false });
        } else {
          this.setState({
            birthDayError: true,
          });
        }
        break;
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <Input
          nameInput={'firstName'}
          textLabel={'First Name'}
          type={'text'}
          error={this.state.firstNameError}
          errorText={this.state.firstNameErrorText}
          refElem={this.firstName}
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput={'lastName'}
          textLabel={'Last Name'}
          type={'text'}
          error={this.state.lastNameError}
          errorText={this.state.lastNameErrorText}
          refElem={this.lastName}
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput={'zipcode'}
          textLabel={'Zip Code'}
          type={'text'}
          error={this.state.zipCodeError}
          errorText={this.state.zipCodeErrorText}
          refElem={this.zipCode}
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput={'birthDay'}
          textLabel={'Birth Day'}
          type={'date'}
          refElem={this.birthDay}
          onChange={(e) => this.onChangeHandle(e)}
        />

        <select name="country" ref={this.country} onChange={(e) => this.onChangeHandle(e)}>
          <option value="Belarus">Беларусь</option>
          <option value="Ukraine"> Украина</option>
          <option value="Latvia">Латвия</option>
        </select>
        <button
          type="submit"
          className="form__btn-submit"
          onSubmit={this.onSubmit}
          disabled={
            this.state.firstNameError ||
            this.state.lastNameError ||
            this.state.zipCodeError ||
            this.state.birthDayError
          }
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UncontrolledForm;
