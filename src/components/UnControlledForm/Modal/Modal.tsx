import { Component } from 'react';
import './modal.css';

type IProps = {
  onClickModal: () => void;
};
class Modal extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const { onClickModal } = this.props;
    return (
      <div className="modal-body" data-testid="modal">
        Данные успешно добавлены
        <span className="close-modal" data-testid="close" onClick={onClickModal}></span>
      </div>
    );
  }
}
export default Modal;
