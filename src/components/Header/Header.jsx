import React from 'react';
import {
  ButtonHeader,
  HeaderContainer,
  Player,
} from './style';
import iconTopHeader from '../../assets/images/header_images/icon-top-header.svg';
import iconPlay from '../../assets/images/header_images/icon-play.svg';
import imgJaneKate from '../../assets/images/header_images/jane-kate.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={iconTopHeader} alt="logo icon" />
        <ul>
          <li>Create Your Nanny Share</li>
          <li>Browse Shares</li>
          <li>Our Story</li>
        </ul>
        <ButtonHeader type="button">Become a Nanny Share Host</ButtonHeader>
      </nav>
      <article>
        <section>
          <h2>Easily create or join a local nanny share with Hapu</h2>
          <p>
            Hapu is Airbnb for nanny share. Share your home,
            nanny and costs and create new flexible, affordable
            solutions in childcare.
          </p>
          <Player>
            <img src={iconPlay} alt="logo play" />
            <a href="#test">See hapu in action (27 seconds)</a>
          </Player>
        </section>
        <img src={imgJaneKate} className="imgHidden" alt="manage nanny share" />
      </article>
    </HeaderContainer>
  );
}
