
const Footer = () => {
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <div className="footer-div">
        <a
          href="https://www.eypes.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}>
          <code className="brand">{"<Eypes/>"}</code>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
