import { Component } from 'react';
import './inputFile.css';

type IProps = {
  className?: string;
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

class InputFile extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
    const { nameInput, textLabel, type, error, errorText, refElem, onChange, datatestId, max } =
      this.props;
    return (
      <div className="wraper-input-file">
        <label htmlFor={nameInput} className="label-input-file">
          <span className="icon-file">
            <img src="./../svg/icon-file.svg" alt="icon-file" />
          </span>
          <p className="file-text">
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
            className="input-file"
            type={type}
            name={nameInput}
            ref={refElem}
            data-testid={datatestId}
            onChange={onChange}
            max={max}
          />
        </label>
      </div>
    );
  }
}
export default InputFile;
