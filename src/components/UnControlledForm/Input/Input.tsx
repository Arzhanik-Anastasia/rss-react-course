import './input.css';

type IProps = {
  nameInput: string;
  textLabel: string;
  type: string;
  error?: boolean;
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
  datatestId: string;
  max?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const Input = ({
  nameInput,
  textLabel,
  type,
  error,
  errorText,
  refElem,
  onChange,
  datatestId,
  max,
}: IProps) => {
  return (
    <label htmlFor={nameInput}>
      <p>
        {textLabel}
        {error ? (
          <span className="error-span" data-testid="error" style={{ color: 'red' }}>
            {errorText}
          </span>
        ) : (
          ''
        )}
      </p>
      <input
        type={type}
        name={nameInput}
        ref={refElem}
        data-testid={datatestId}
        onChange={onChange}
        max={max}
      />
    </label>
  );
};

export default Input;
