import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import './inputFile.css';

type IProps = {
  register: UseFormRegisterReturn;
  errors: FieldErrors<FieldValues>;
};

const InputFile = ({ register, errors }: IProps) => {
  return (
    <div className="wraper-input-file">
      <label htmlFor="avatar" className="label-input-file">
        <span className="icon-file">
          <img src="./../svg/icon-file.svg" alt="icon-file" />
        </span>
        <p className="file-text">
          {errors?.avatar?.message ? (
            <span className="error-span" data-testid="error" style={{ color: 'red' }}>
              {errors?.avatar?.message?.toString()}
            </span>
          ) : (
            'Выберите аватар'
          )}
        </p>

        <input
          {...register}
          className="input-file"
          type="file"
          name="avatar"
          data-testid="input-avatar"
          accept=".jpg, .jpeg, .png"
        />
      </label>
    </div>
  );
};

export default InputFile;
