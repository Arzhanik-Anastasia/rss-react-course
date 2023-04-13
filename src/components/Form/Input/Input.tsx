import { IPropsInput } from './../../../types/interfaces';
import './input.css';

const Input = ({
  register,
  nameInput,
  textLabel,
  type,
  datatestId,
  errors,
  max,
  className,
  classNameLabel,
}: IPropsInput) => {
  return (
    <label htmlFor={nameInput} className={classNameLabel}>
      <p>
        {textLabel}
        <span className="error-span" data-testid="error" style={{ color: 'red' }}>
          {errors?.[nameInput]?.message?.toString()}
          {errors?.[nameInput]?.type === 'validate' && 'Только старше 18 лет'}
        </span>
      </p>
      <input className={className} type={type} data-testid={datatestId} {...register} max={max} />
    </label>
  );
};

export default Input;
