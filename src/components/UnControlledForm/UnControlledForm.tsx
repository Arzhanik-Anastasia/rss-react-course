import Switcher from './Switcher/Switcher';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValue } from '../../types/interfaces';
import { checkedDate, getToday } from '../../utils/helpers';
import InputFile from './InputFile/InputFile';
import Input from './Input/Input';
import './InputFile/inputFile.css';
import './unConrolledForm.css';

type IProps = {
  onAddCard: (
    firstName: string,
    lastName: string,
    zipCode: string,
    birthDay: string,
    country: string,
    news: boolean,
    avatar: File,
    check: boolean
  ) => void;
};

const Form = ({ onAddCard }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValue>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFormValue> = (data) => {
    onAddCard(
      data.firstName,
      data.lastName,
      data.zipCode,
      data.birthDay,
      data.country,
      data.news,
      data.avatar?.[0],
      data.check
    );
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register('firstName', {
          required: 'Поле обязательно к заполнению',
          minLength: { value: 2, message: 'Слишком короткое имя' },
        })}
        nameInput={'firstName'}
        textLabel={'First Name'}
        datatestId={'input-firstName'}
        type={'text'}
        errors={errors}
      />
      <Input
        register={register('lastName', {
          required: 'Поле обязательно к заполнению',
          minLength: { value: 2, message: 'Слишком короткая фамилия' },
        })}
        nameInput={'lastName'}
        textLabel={'Last Name'}
        datatestId={'input-lastName'}
        type={'text'}
        errors={errors}
      />
      <Input
        register={register('zipCode', {
          required: 'Поле обязательно к заполнению',
          minLength: { value: 6, message: 'Минимальное количество символов - 6' },
        })}
        nameInput={'zipCode'}
        textLabel={'Zip Code'}
        datatestId={'input-zipcode'}
        type={'number'}
        errors={errors}
      />
      <Input
        register={register('birthDay', {
          required: 'Поле обязательно к заполнению',
          validate: (input) => checkedDate(input) === true,
        })}
        nameInput={'birthDay'}
        textLabel={'Birth Day'}
        datatestId={'input-birthDay'}
        type={'date'}
        errors={errors}
        max={getToday()}
      />
      <select {...register('country')}>
        <option value="Belarus">Беларусь</option>
        <option value="Ukraine">Украина</option>
        <option value="Latvia">Латвия</option>
      </select>
      <Switcher register={register('news')} />
      <InputFile register={register('avatar', { required: 'Необходимо фото' })} errors={errors} />
      <Input
        nameInput="check"
        textLabel="Согласие на обработку данных"
        register={register('check', { required: 'Необходимо Ваше согласие' })}
        type="checkbox"
        datatestId="input-checkbox"
        errors={errors}
        className={'input-checkbox'}
        classNameLabel={'checkbox-label'}
      />
      <button data-testid="button-submit-form" className="form__btn-submit">
        Отправить
      </button>
    </form>
  );
};

export default Form;
