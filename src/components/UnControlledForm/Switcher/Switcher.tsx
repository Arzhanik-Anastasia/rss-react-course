import { Component } from 'react';
import './switcher.css';

type IProps = {
  refElem: React.RefObject<HTMLInputElement>;
};

class Switcher extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { refElem } = this.props;
    return (
      <>
        <div className="switcher-text">Получать уведомления</div>
        <label className="switch">
          <input type="checkbox" ref={refElem} data-testid="input-switcher" />
          <span className="slider round"></span>
        </label>
      </>
    );
  }
}

export default Switcher;
