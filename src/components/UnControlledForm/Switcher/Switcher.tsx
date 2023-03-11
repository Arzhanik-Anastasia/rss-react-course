import './switcher.css';

type IProps = {
  refElem: React.RefObject<HTMLInputElement>;
};

const Switcher = ({ refElem }: IProps) => {
  return (
    <>
      <div className="switcher-text">Получать уведомления</div>
      <label className="switch">
        <input type="checkbox" ref={refElem} data-testid="input-switcher" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Switcher;
