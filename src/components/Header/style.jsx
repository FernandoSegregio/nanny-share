import styled from 'styled-components';
import backgroundMobile from '../../assets/images/background-mobile.svg';

export const HeaderContainer = styled.header`
  background-image: url(${backgroundMobile}), linear-gradient(var(--color-overlay));
  background-repeat: no-repeat;
  background-size: 100%;
  height: 540px;
  width: 100%;

  h2 {
    color: var(--neutral-color-white-100);
    font-size: var(--font-size-xl);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-500);
    line-height: var(--line-height-m);
    text-align: center;
    width: 272px;
  }
`;

export const ButtonHeader = styled.button`
  border-radius: var(--border-width-thick);
  background-color: var(--brand-color-primary);
  border: var(--border-width-none);
  color: var(--neutral-color-white-100);
  cursor: pointer;
  height: 44px;
  width: 234px;
`;
