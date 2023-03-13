import { Component } from 'react';
import './footer.css';

class Footer extends Component {
  info = {
    name: 'Anastasia Arzhanik',
    year: 2023,
    pathGithube: 'https://github.com/Arzhanik-Anastasia',
    pathRss: 'https://rs.school/js/',
  };

  render() {
    return (
      <footer className="footer">
        <a href={this.info.pathRss}>
          <img src="./../svg/rs_school-logo.svg" alt="logo RS-School" width="70" height="70" />
        </a>
        <div className="footer_date">
          {this.info.year} {this.info.name}
        </div>
        <a href={this.info.pathGithube}>
          <img src="./../svg/github.svg" alt="logo githube" width="50" height="50" />
        </a>
      </footer>
    );
  }
}

export default Footer;
