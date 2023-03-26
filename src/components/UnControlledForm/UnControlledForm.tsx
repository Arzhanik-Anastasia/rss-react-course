import './unConrolledForm.css';
import React from 'react';
import Input from './Input/Input';
import Switcher from './Switcher/Switcher';
import InputFile from './InputFile/InputFile';
import {
  checkedDate,
  getToday,
  validateFirstName,
  validateLastName,
  validateZipCode,
} from './../../utils/helpers';
import Select from './Select/Select';
import InputCheckbox from './InputCheckbox/InputCheckbox';

type IState = {
  firstNameErrorText: string;
  lastNameErrorText: string;
  zipCodeErrorText: string;
  birthDayErrorText: string;
  photoErrorText: string;
  agreeErrorText: string;
  modal: boolean;
  validate: boolean;
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
    firstNameErrorText: '',
    lastNameErrorText: '',
    zipCodeErrorText: '',
    birthDayErrorText: '',
    photoErrorText: '',
    modal: true,
    agreeErrorText: '',
    validate: false,
  };

  onSubmit = (e: { preventDefault: () => void }) => {
    const { onAddCard } = this.props;
    e.preventDefault();
    const validate = this.checkedValidity();
    if (validate) {
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
    }
  };

  checkedValidity(): boolean {
    const validFirstName = validateFirstName(this.firstName.current!.value);
    const validLastName = validateLastName(this.lastName.current!.value);
    const validCode = validateZipCode(this.zipCode.current!.value);
    const checked = checkedDate(this.birthDay.current!.value);
    const validBirthDay = this.birthDay.current!.value && checked;

    if (validFirstName) {
      this.setState({
        firstNameErrorText: '',
      });
    } else {
      this.setState({
        firstNameErrorText: 'Слишком короткое имя',
      });
    }

    if (validLastName) {
      this.setState({ lastNameErrorText: '' });
    } else {
      this.setState({
        lastNameErrorText: 'Слишком короткое имя',
      });
    }

    if (validCode) {
      this.setState({ zipCodeErrorText: '' });
    } else {
      this.setState({
        zipCodeErrorText: 'Минимальное количество символов - 6',
      });
    }

    if (validBirthDay) {
      this.setState({ birthDayErrorText: '' });
    } else {
      this.setState({
        birthDayErrorText: 'Только пользователи старше 18 лет',
      });
    }
    if (this.photo.current!.files![0]) {
      this.setState({ photoErrorText: '' });
    } else {
      this.setState({
        photoErrorText: 'Выберите фото',
      });
    }
    if (!this.agree.current?.checked) {
      this.setState({
        agreeErrorText: 'Необходимо Ваше согласие',
      });
    } else {
      this.setState({
        agreeErrorText: '',
      });
    }
    if (
      validFirstName &&
      validLastName &&
      validCode &&
      validBirthDay &&
      this.photo.current!.files![0] &&
      this.agree.current?.checked
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {
      firstNameErrorText,
      lastNameErrorText,
      zipCodeErrorText,
      birthDayErrorText,
      photoErrorText,
      agreeErrorText,
    } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit} ref={this.form}>
        <Input
          nameInput={'firstName'}
          textLabel={'First Name'}
          type={'text'}
          errorText={firstNameErrorText}
          refElem={this.firstName}
          datatestId="input-firstName"
        />
        <Input
          nameInput={'lastName'}
          textLabel={'Last Name'}
          type={'text'}
          errorText={lastNameErrorText}
          refElem={this.lastName}
          datatestId="input-lastName"
        />
        <Input
          nameInput={'zipcode'}
          textLabel={'Zip Code'}
          type={'number'}
          errorText={zipCodeErrorText}
          refElem={this.zipCode}
          datatestId="input-zipcode"
        />
        <Input
          nameInput={'birthDay'}
          textLabel={'Birth Day'}
          type={'date'}
          refElem={this.birthDay}
          errorText={birthDayErrorText}
          max={getToday()}
          datatestId="input-birthDay"
        />
        <Select refSelect={this.country} />
        <Switcher refElem={this.news} />
        <InputFile
          textLabel={
            this.photo.current && this.photo.current!.files![0]
              ? 'Файл загружен'
              : 'Выберите аватар'
          }
          refElem={this.photo}
          errorText={photoErrorText}
          datatestId="input-avatar"
        />
        <InputCheckbox errorText={agreeErrorText} refElem={this.agree} />
        <button data-testid="button-submit-form" type="submit" className="form__btn-submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UncontrolledForm;
