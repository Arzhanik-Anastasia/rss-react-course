import { Component } from 'react';
import './inputFile.css';

type IProps = {
  textLabel: string;
  error?: boolean;
  errorText?: string;
  refElem: React.RefObject<HTMLInputElement>;
  datatestId: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

class InputFile extends Component<IProps> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
  }
  render() {
    const { textLabel, error, errorText, refElem, onChange } = this.props;
    return (
      <div className="wraper-input-file">
        <label htmlFor="avatar" className="label-input-file">
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
            type="file"
            name="avatar"
            ref={refElem}
            data-testid="input-avatar"
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}
export default InputFile;
