/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './unConrolledForm.css';
import React from 'react';

type IState = {
  firstNameError: boolean;
  firstNameErrorText: string;
  lastNameError: boolean;
  lastNameErrorText: string;
  zipCodeError: boolean;
  zipCodeErrorText: string;
  birthDayError: boolean;
  birthDayErrorText: string;
};

type IProps = {
  onAddCard: (firstName: string, lastName: string, zipCode: string, birthDay: string) => void;
};

class UncontrolledForm extends React.Component<IProps, IState> {
  firstName = React.createRef<HTMLInputElement>();
  lastName = React.createRef<HTMLInputElement>();
  zipCode = React.createRef<HTMLInputElement>();
  birthDay = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLInputElement>();
  sexInput = React.createRef<HTMLInputElement>();
  email = React.createRef<HTMLInputElement>();
  agree = React.createRef<HTMLInputElement>();
  state = {
    firstNameError: true,
    firstNameErrorText: '',
    lastNameError: true,
    lastNameErrorText: '',
    zipCodeError: true,
    zipCodeErrorText: '',
    birthDayError: true,
    birthDayErrorText: '',
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
        this.birthDay.current!.value
      );
    }
  };

  onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('чен', e.target.name);
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
        console.log(this.birthDay.current!.value);
        if (this.birthDay.current!.value) {
          this.setState({ birthDayError: false, birthDayErrorText: '' });
        } else {
          this.setState({
            birthDayError: true,
            birthDayErrorText: 'Обязательное к заполнению поле',
          });
        }
        break;
    }
    // this.onValidate();
  }

  render() {
    console.log(
      'ошибки',
      this.state.firstNameError,
      this.state.lastNameError,
      this.state.zipCodeError,
      this.state.birthDayError
    );
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label htmlFor="firstName">
          <p>
            First Name
            {this.state.firstNameError ? (
              <span className="error-span" style={{ color: 'red' }}>
                {this.state.firstNameErrorText}
              </span>
            ) : (
              ''
            )}
          </p>
          <input
            type="text"
            name="firstName"
            ref={this.firstName}
            onChange={(e) => this.onChangeHandle(e)}
          />
        </label>
        <label htmlFor="lastName">
          <p>
            Last Name
            {this.state.lastNameError ? (
              <span className="error-span" style={{ color: 'red' }}>
                {this.state.lastNameErrorText}
              </span>
            ) : (
              ''
            )}
          </p>
          <input
            type="text"
            name="lastName"
            ref={this.lastName}
            onChange={(e) => this.onChangeHandle(e)}
          />
        </label>
        <label htmlFor="zipcode">
          <p>
            Zip Code
            {this.state.zipCodeError ? (
              <span className="error-span" style={{ color: 'red' }}>
                {this.state.zipCodeErrorText}
              </span>
            ) : (
              ''
            )}
          </p>
          <input
            type="number"
            name="zipcode"
            ref={this.zipCode}
            onChange={(e) => this.onChangeHandle(e)}
          />
        </label>
        <label htmlFor="birthDay">
          Birth Day
          <input
            type="date"
            name="birthDay"
            ref={this.birthDay}
            onChange={(e) => this.onChangeHandle(e)}
          />
        </label>
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
