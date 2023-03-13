import { Component } from 'react';
import './input.css';

type IProps = {
  nameInput: string;
  className?: string;
  textLabel: string;
  type: string;
  error?: boolean;
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
  datatestId: string;
  max?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

class Input extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
    const {
      nameInput,
      className,
      textLabel,
      type,
      error,
      errorText,
      refElem,
      onChange,
      datatestId,
      max,
    } = this.props;
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
          className={className ? className : ''}
          name={nameInput}
          ref={refElem}
          data-testid={datatestId}
          onChange={onChange}
          max={max}
        />
      </label>
    );
  }
}
export default Input;
