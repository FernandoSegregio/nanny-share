import styled from 'styled-components';

export const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  height: 574px;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

    @media (min-width: 900px) {
      height: 540px;
    }

  h3 {
     color: var(--neutral-color-gray-24);
     font-size: var(--font-size-l);
     font-style: var(--font-style-normal);
     font-weight: var(--font-weight-500);
     line-height: 32px;
     margin-top: 60px;
     text-align: center;
     width: 291px;

      @media (min-width: 900px) {
        font-size: var(--font-size-xl);
        width: 370px;
      }
    }

  p {
    color: var(--neutral-color-gray-24);
    font-size: var(--font-size-s);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-xl);
    text-align: center;
    width: 304px;

    }

  button {
      align-items: center;
      background-color: var(--brand-color-secundary);
      border: var(--border-width-none);
      border-radius: var(--border-radius-nano);
      height: 68px;
      width: 304px;
      display: flex;
      justify-content: space-evenly;

      img {
        width: 30px
      }

      div {
        display: flex;
        flex-direction: column;
        width: 191px;
        
        p {
          color: var(--neutral-color-white-100);
          width: 191px;
        }
        span {
          color: var(--neutral-color-white-100);
          font-size: var(--font-size-xxs);
          line-height: 16px;
          width: 147px;
        }

      }
    }

    a {
    color: var(--brand-color-secundary);
    font-size: var(--font-size-s);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-500);
    line-height: 24px;
    text-align: center;
    }

    section {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 182px;
      justify-content: space-between;

      @media (min-width: 900px) {
       flex-direction: row;
       justify-content: space-around;
       width: 100%;
      }

      div {
        column-gap: 16px;
        display: flex;
      }



      nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 280px;
        column-gap: 25px;

        @media (min-width: 900px) {
        width: 600px;
        flex-wrap: nowrap;
        justify-content: center;
        margin-left: 110px;
        }
  
        a {
          color: var(--neutral-color-gray-24);
          font-size: var(--font-size-xs);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-500);
          line-height: 20px;
          text-align: center;
          padding: 10px 5px;
          
          @media (min-width: 900px) {
            width: 100;
            text-decoration: nome;
          }
          
          }
      }
    }


  
  hr {
    width: 328px;

    @media (min-width: 900px) {
      visibility: hidden;
     width: 0;
    }
  }
`;

export const FooterCopy = styled.span` 
  color: var(--neutral-color-gray-24);
  font-size: var(--font-size-xxs);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-normal);
  line-height: 16px;
  opacity: 0.6;
  text-align: right;  
  
  @media (min-width: 900px) {
     padding-bottom: 30px;
    }
`;

export default FooterContainer;
