const { version } = require("../../package.json");

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>
        <small> Version {version} </small>
      </p>
    </footer>
  );
};

export default Footer;
