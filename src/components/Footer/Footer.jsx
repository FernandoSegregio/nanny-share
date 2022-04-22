import React from 'react';
import { FooterContainer, FooterCopy } from './style';
import logoHapu from '../../assets/images/footer_images/logo-hapu.svg';
import logoFacebook from '../../assets/images/footer_images/facebook.svg';
import logoTwitter from '../../assets/images/footer_images/twitter.svg';
import logoInstagram from '../../assets/images/footer_images/instagram.svg';
import calendar from '../../assets/images/footer_images/calendar.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <h3>Become a nanny share host</h3>
        <p>Takes less than 5 minutes to get started</p>
      </div>
      <button type="button">
        <img src={calendar} alt="" />
        <div>
          <p>Create Your Nanny Share</p>
          <span>Takes less than 5 minutes</span>
        </div>
      </button>
      <a href="local">Or browse local nanny-shares</a>
      <section>
        <img src={logoHapu} alt="logo hapu" />
        <div>
          <h5>Share Your Nanny</h5>
          <h5>Our Story</h5>
          <h5>Blog</h5>
          <h5>Terms & Privacy</h5>
        </div>
        <div>
          <img src={logoFacebook} alt="logo Facebook" />
          <img src={logoTwitter} alt="logo Twitter" />
          <img src={logoInstagram} alt="logo Instagram" />
        </div>
      </section>
      <hr />
      <FooterCopy>Copyright © 2017 Hapu PTY Limited All rights reserved</FooterCopy>
    </FooterContainer>
  );
}
