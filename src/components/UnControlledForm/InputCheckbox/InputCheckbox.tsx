import { Component } from 'react';

type IProps = {
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
};

class InputCheckbox extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
    const { errorText, refElem } = this.props;
    return (
      <label htmlFor="check">
        <p>
          {'Согласие на обработку данных'}
          {errorText && errorText?.length > 0 ? (
            <span className="error-span" data-testid="error-checkbox" style={{ color: 'red' }}>
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
        />
      </label>
    );
  }
}
export default InputCheckbox;
