import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Component } from 'react';

export type PropsType = {
  title: string;
  cont: JSX.Element;
};

class Layout extends Component<{ content: PropsType }> {
  render() {
    const { title, cont } = this.props.content;
    return (
      <>
        <Header title={title} />
        <div className="content">{cont}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
