import styled from 'styled-components';
import backgroundMobile from '../../assets/images/header_images/background-mobile.svg';
import backgroundDesktop from '../../assets/images/header_images/background-desktop.svg';

export const HeaderContainer = styled.header`
  align-items: center;
  background-image: url(${backgroundMobile}), linear-gradient(var(--color-overlay));
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 540px;
  width: 100%;

    @media (min-width: 900px) {
      background-image: url(${backgroundDesktop}), linear-gradient(var(--color-overlay));
      background-size: cover;
      height: 616px;
    }

  nav {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    height: 64px;
    width: 88%;

      ul {        
        height: 0;
        visibility: hidden;
        width: 0;

          @media (min-width: 900px) {
            color: var(--neutral-color-white-100);
            display: flex;
            font-size: var(--font-size-xs);
            font-style: var(--font-style-normal);
            font-weight: var(--font-weight-500);
            justify-content: space-around;
            left: 12%;
            line-height: 20x;
            position: absolute;
            text-align: center;
            top: 3%;
            visibility: visible;
            width: 398px;
            
              li {
                list-style: none;
                cursor: pointer;
              }
          }
      }
  }


  



  article {
    align-items: center;
    display: flex;
    height: 450px;
    flex-direction: column;
    row-gap: var(--spacing-xxxs);
    width: 100%;
    padding-top: 110px;

      @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-evenly;
        height: 400px;
      }

      section {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 400px;
      row-gap: var(--spacing-xxxs);

      @media (min-width: 900px) {
        align-items: flex-start;
        text-align: left;
        width: 490px;
      }

        h2 {
        color: var(--neutral-color-white-100);
        font-size: var(--font-size-xl);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-500);
        line-height: var(--line-height-m);
        text-align: center;
        width: 272px;

          @media (min-width: 900px) {
            text-align: left;
            width: 490px;
          }
      
        }   


      p {
          color: var(--neutral-color-white-100);
          font-size: var(--font-size-s);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-normal);
          line-height: 28px;
          text-align: center;
          width: 328px;

            @media (min-width: 900px) {
              text-align: left;
              margin-right: 40px;
              width: 584px;
            }
      }
    }

      .imgHidden {
      visibility: hidden;
      height: 0;
      width: 0;

        @media (min-width: 900px) {
          visibility: visible;
          height: 290px;
          margin-left: 50px;
          width: 316px;
        }
      }
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

export const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  width: 310px;

    @media (min-width: 900px) {
      text-align: left;
    }
  
    a {
      color: var(--neutral-color-white-100);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: var(--line-height-l);
      text-decoration-line: underline;
    }
`;
