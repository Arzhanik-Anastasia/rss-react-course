/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './unConrolledForm.css';
import React from 'react';
import Input from './Input/Input';
import Switcher from './Switcher/Switcher';
import InputFile from './InputFile/InputFile';

type IState = {
  firstNameError: boolean;
  firstNameErrorText: string;
  lastNameError: boolean;
  lastNameErrorText: string;
  zipCodeError: boolean;
  zipCodeErrorText: string;
  birthDayError: boolean;
  birthDayErrorText: string;
  photoError: boolean;
  photoErrorText: string;
  agreeError: boolean;
  agreeErrorText: string;
};

type IProps = {
  onAddCard: (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string,
    news: boolean,
    photo: File,
    agree: boolean
  ) => void;
};

class UncontrolledForm extends React.Component<IProps, IState> {
  firstName = React.createRef<HTMLInputElement>();
  lastName = React.createRef<HTMLInputElement>();
  zipCode = React.createRef<HTMLInputElement>();
  birthDay = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLSelectElement>();
  news = React.createRef<HTMLInputElement>();
  photo = React.createRef<HTMLInputElement>();
  agree = React.createRef<HTMLInputElement>();
  form = React.createRef<HTMLFormElement>();
  state = {
    firstNameError: true,
    firstNameErrorText: '',
    lastNameError: true,
    lastNameErrorText: '',
    zipCodeError: true,
    zipCodeErrorText: '',
    birthDayError: true,
    birthDayErrorText: '',
    photoError: true,
    photoErrorText: '',
    modal: true,
    agreeError: true,
    agreeErrorText: '',
  };

  onSubmit = (e: { preventDefault: () => void }) => {
    const { onAddCard } = this.props;
    e.preventDefault();
    this.setState({
      firstNameError: true,
      lastNameError: true,
      zipCodeError: true,
      birthDayError: true,
      photoError: true,
      agreeError: true,
    });
    onAddCard(
      this.firstName.current!.value,
      this.lastName.current!.value,
      this.zipCode.current!.value,
      this.birthDay.current!.value,
      this.country.current!.value,
      this.news.current!.checked,
      this.photo.current!.files![0],
      this.agree.current!.checked
    );
    this.firstName.current!.value = '';
    this.lastName.current!.value = '';
    this.zipCode.current!.value = '';
    this.birthDay.current!.value = '';
    this.country.current!.value = 'Belarus';
    this.news.current!.checked = false;
    this.photo.current!.value = '';
    this.agree.current!.checked = false;
  };

  onChangeHandle(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    switch (e.target.name) {
      case 'firstName':
        if (this.firstName.current!.value.length >= 3) {
          this.setState({
            firstNameError: false,
            firstNameErrorText: '',
          });
        } else {
          this.setState({
            firstNameError: true,
            firstNameErrorText: 'Слишком короткое имя',
          });
        }
        break;
      case 'lastName':
        if (this.lastName.current!.value.length >= 3) {
          this.setState({ lastNameError: false, lastNameErrorText: '' });
        } else {
          this.setState({
            lastNameError: true,
            lastNameErrorText: 'Слишком короткое имя',
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
        const checked = this.checkedDate(this.birthDay.current!.value);
        if (this.birthDay.current!.value && checked) {
          this.setState({ birthDayError: false, birthDayErrorText: '' });
        } else {
          this.setState({
            birthDayError: true,
            birthDayErrorText: 'Только пользователи старше 18 лет',
          });
        }
        break;
      case 'avatar':
        if (this.photo.current!.files![0]) {
          this.setState({ photoError: false, photoErrorText: '' });
        } else {
          this.setState({
            photoError: true,
            photoErrorText: 'Выберите фото',
          });
        }
        break;
      case 'check':
        if (!this.agree.current?.checked) {
          this.setState({
            agreeError: true,
            agreeErrorText: 'Необходимо Ваше согласие',
          });
        } else {
          this.setState({
            agreeError: false,
          });
        }
        break;
    }
  }

  checkedDate = (value: string): boolean => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dob = new Date(value);
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
      age = age - 1;
    }
    return age >= 18 ? true : false;
  };

  getToday(): string {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
      today.getDate()
    ).padStart(2, '0')}`;
  }

  render() {
    const {
      firstNameError,
      firstNameErrorText,
      lastNameError,
      lastNameErrorText,
      zipCodeError,
      zipCodeErrorText,
      birthDayError,
      birthDayErrorText,
      photoError,
      photoErrorText,
      agreeError,
      agreeErrorText,
    } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit} ref={this.form}>
        <Input
          nameInput={'firstName'}
          textLabel={'First Name'}
          type={'text'}
          error={firstNameError}
          errorText={firstNameErrorText}
          refElem={this.firstName}
          datatestId="input-firstName"
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput={'lastName'}
          textLabel={'Last Name'}
          type={'text'}
          error={lastNameError}
          errorText={lastNameErrorText}
          refElem={this.lastName}
          datatestId="input-lastName"
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput={'zipcode'}
          textLabel={'Zip Code'}
          type={'number'}
          error={zipCodeError}
          errorText={zipCodeErrorText}
          refElem={this.zipCode}
          datatestId="input-zipcode"
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput={'birthDay'}
          textLabel={'Birth Day'}
          type={'date'}
          refElem={this.birthDay}
          error={birthDayError}
          errorText={birthDayErrorText}
          max={this.getToday()}
          datatestId="input-birthDay"
          onChange={(e) => this.onChangeHandle(e)}
        />
        <select name="country" ref={this.country}>
          <option value="Belarus">Беларусь</option>
          <option value="Ukraine">Украина</option>
          <option value="Latvia">Латвия</option>
        </select>
        <Switcher refElem={this.news} />
        <InputFile
          nameInput="avatar"
          textLabel={
            this.photo.current && this.photo.current!.files![0]
              ? 'Файл загружен'
              : 'Выберите аватар'
          }
          type="file"
          refElem={this.photo}
          error={photoError}
          errorText={photoErrorText}
          datatestId="input-avatar"
          onChange={(e) => this.onChangeHandle(e)}
        />
        <Input
          nameInput="check"
          textLabel="Согласие на обработку данных"
          refElem={this.agree}
          type="checkbox"
          datatestId="input-checkbox"
          error={agreeError}
          errorText={agreeErrorText}
          onChange={(e) => this.onChangeHandle(e)}
        />
        <button
          data-testid="button-submit-form"
          type="submit"
          className="form__btn-submit"
          onSubmit={this.onSubmit}
          disabled={
            firstNameError ||
            lastNameError ||
            zipCodeError ||
            birthDayError ||
            photoError ||
            agreeError
          }
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UncontrolledForm;
