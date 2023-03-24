import { Component } from 'react';

type IProps = {
  error?: boolean;
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

class InputCheckbox extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
    const { error, errorText, refElem, onChange } = this.props;
    return (
      <label htmlFor="check">
        <p>
          {'Согласие на обработку данных'}
          {error ? (
            <span className="error-span" data-testid="error" style={{ color: 'red' }}>
              {errorText}
            </span>
          ) : (
            ''
          )}
        </p>
        <input
          type="checkbox"
          className="input__checkbox"
          name="check"
          ref={refElem}
          data-testid="input-checkbox"
          onChange={onChange}
        />
      </label>
    );
  }
}
export default InputCheckbox;
