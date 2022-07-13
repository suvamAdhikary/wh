const { version } = require("../package.json");

const Footer = () => {
  return (
    <footer className="absolute bottom-1 left-0 right-0 z-50 flex items-center text-gray-500 w-full justify-center text-center">
      <p className="text-xs">Version {version}</p>
    </footer>
  );
};

export default Footer;
