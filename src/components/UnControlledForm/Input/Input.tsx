import { Component } from 'react';
import './input.css';

type IProps = {
  nameInput: string;
  className?: string;
  textLabel: string;
  type: string;
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
  datatestId: string;
  max?: string;
};

class Input extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
    const { nameInput, className, textLabel, type, errorText, refElem, datatestId, max } =
      this.props;
    return (
      <label htmlFor={nameInput}>
        <p>
          {textLabel}
          {errorText && errorText.length > 0 ? (
            <span
              className="error-span"
              data-testid={`error-${nameInput}`}
              style={{ color: 'red' }}
            >
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
          max={max}
        />
      </label>
    );
  }
}
export default Input;
