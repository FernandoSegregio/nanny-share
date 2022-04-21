import styled from 'styled-components';
import backgroundMobile from '../../assets/images/background-mobile.svg';

export const HeaderContainer = styled.header`
  align-items: center;
  background-image: url(${backgroundMobile}), linear-gradient(var(--color-overlay));
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 540px;
  width: 100%;

  nav {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    height: 64px;
    position: fixed;
    top: 0;
    width: 88%;
  }

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
  margin-bottom: var(--spacing-quarck);
  height: 44px;
  width: 234px;
`;
