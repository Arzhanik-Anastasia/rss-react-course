import { UseFormRegisterReturn } from 'react-hook-form';
import './switcher.css';

type IProps = {
  register: UseFormRegisterReturn;
};

const Switcher = ({ register }: IProps) => {
  return (
    <>
      <div className="switcher-text">Получать уведомления</div>
      <label className="switch">
        <input type="checkbox" data-testid="input-switcher" {...register} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Switcher;
