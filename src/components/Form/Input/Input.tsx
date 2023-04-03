import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import './input.css';

type IProps = {
  register: UseFormRegisterReturn;
  nameInput: string;
  textLabel: string;
  type: string;
  datatestId: string;
  errors: FieldErrors<FieldValues>;
  max?: string;
  className?: string;
  classNameLabel?: string;
};

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
}: IProps) => {
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
