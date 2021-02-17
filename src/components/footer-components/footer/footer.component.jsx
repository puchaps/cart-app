import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-icon">
        <a href="https://t.me/adamovuch_ps">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/2111/2111710.svg?token=exp=1612900349~hmac=a44f32b6c5a6c9a485f9c306600e7ac8"
            alt="telegram"
          />
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://www.instagram.com/adamovich_ps/?igshid=2rl7e5y71xkf">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1384/1384031.svg?token=exp=1612900393~hmac=4a1bbb0a0fb642f9e4a3431faec87425"
            alt="instagram"
          />
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://github.com/puchaps">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1612900421~hmac=56fce59cc0225fdc9f0f6d90fa7ae4d3"
            alt="git-hub"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
