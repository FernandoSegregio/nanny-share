import React from 'react';
import { FooterContainer } from './style';
import logoHapu from '../../assets/images/footer_images/logo-hapu.svg';
import logoFacebook from '../../assets/images/footer_images/facebook.svg';
import logoTwitter from '../../assets/images/footer_images/twitter.svg';
import logoInstagram from '../../assets/images/footer_images/instagram.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <h3>Become a nanny share host</h3>
      <p>Takes less than 5 minutes to get started</p>
      <button type="button">
        <p>Create Your Nanny Share</p>
        <p>Takes less than 5 minutes</p>
      </button>
      <a href="local">Or browse local nanny-shares</a>
      <img src={logoHapu} alt="logo hapu" />
      <div>
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
      </div>
      <hr />
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </FooterContainer>
  );
}
