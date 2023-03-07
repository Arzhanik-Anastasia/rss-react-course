import { Component } from 'react';
import Header from '../../component/Header/Header';
import './about.css';

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="about__page">
          <h2 className="about__title">About</h2>
          <p className="about__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, omnis laborum?
            Commodi magnam voluptas error accusantium repudiandae esse? Temporibus atque error vitae
            similique doloribus harum voluptatum consectetur sint itaque distinctio!
          </p>
        </div>
      </>
    );
  }
}
export default About;
