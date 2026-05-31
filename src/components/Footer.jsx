function Footer() {
  const currrentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Built with code by Faizullah Hussain ©{currrentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
