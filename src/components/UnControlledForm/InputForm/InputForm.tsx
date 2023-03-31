import './inputForm.css';

type IProps = {
  nameInput: string;
  textLabel: string;
  type: string;
  error?: boolean;
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const Input = ({ nameInput, textLabel, type, error, errorText, refElem, onChange }: IProps) => {
  return (
    <label htmlFor={nameInput}>
      <p>
        {textLabel}
        {error ? (
          <span className="error-span" style={{ color: 'red' }}>
            {errorText}
          </span>
        ) : (
          ''
        )}
      </p>
      <input type={type} name={nameInput} ref={refElem} onChange={onChange} />
    </label>
  );
};

export default Input;
