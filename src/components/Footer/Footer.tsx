import './footer.css';

const Footer = () => {
  const info = {
    name: 'Anastasia Arzhanik',
    year: 2023,
    pathGithube: 'https://github.com/Arzhanik-Anastasia',
    pathRss: 'https://rs.school/js/',
  };
  return (
    <footer className="footer">
      <a href={info.pathRss}>
        <img src="./../svg/rs_school-logo.svg" alt="logo RS-School" width="70" height="70" />
      </a>
      <div className="footer_date">
        {info.year} {info.name}
      </div>
      <a href={info.pathGithube}>
        <img src="./../svg/github.svg" alt="logo githube" width="50" height="50" />
      </a>
    </footer>
  );
};

export default Footer;
