import './modal.css';

type IProps = {
  onClickModal: () => void;
};

const Modal = ({ onClickModal }: IProps) => {
  return (
    <div className="modal-body" data-testid="modal">
      Данные успешно добавлены
      <span className="close-modal" data-testid="close" onClick={onClickModal}></span>
    </div>
  );
};
export default Modal;
