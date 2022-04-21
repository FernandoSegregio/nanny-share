import React from 'react';
import { HeaderContainer, ButtonHeader } from './style';
import iconTopHeader from '../../assets/images/icon-top-header.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={iconTopHeader} alt="logo icon" />
        <ButtonHeader type="button">Become a Nanny Share Host</ButtonHeader>
      </div>
      <h2>Easily create or join a local nanny share with Hapu</h2>
    </HeaderContainer>
  );
}
