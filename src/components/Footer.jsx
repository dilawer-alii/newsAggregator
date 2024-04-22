import React from "react";
// import "./Footer.css"; // Don't forget to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2024 News Aggregator</p>
          </div>
          <div className="col-md-6">
            <ul className="footer-links">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
