import React from 'react';
import {
  ButtonHeader,
  HeaderContainer,
  Player,
} from './style';
import iconTopHeader from '../../assets/images/header_images/icon-top-header.svg';
import iconPlay from '../../assets/images/header_images/icon-play.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={iconTopHeader} alt="logo icon" />
        <ButtonHeader type="button">Become a Nanny Share Host</ButtonHeader>
      </nav>
      <article>
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
      </article>
    </HeaderContainer>
  );
}
