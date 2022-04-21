import styled from 'styled-components';
import backgroundMobile from '../../assets/images/background-mobile.svg';

const HeaderContainer = styled.header`
  background-image: url(${backgroundMobile}), linear-gradient(var(--color-overlay));
  background-repeat: no-repeat;
  background-size: 100%;
  height: 540px;
  width: 100%;
`;

export default HeaderContainer;
