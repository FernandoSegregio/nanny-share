import styled from 'styled-components';

export const MainContainer = styled.main` 
`;

export const ShowApp = styled.section`
  align-items: center;
  background-color: var(--neutral-color-white-200);
  display: flex;
  flex-direction: column;
  hr {
    width: 328px;
      
      @media (min-width: 900px) {
        width: 784px;
      }
  }
`;

export const ArticleProfile = styled.article`
  align-items: center;
  background-color: var(--neutral-color-white-100);
  border: var(--border-width-hairline) solid var(--neutral-color-gray-88);
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  height: 216px;
  width: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    height: 112px; 
    column-gap: 5px;   
   }

    img {      
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));

        @media (min-width: 900px) {
          margin-right: 32px;
        }
    }

    a {
      color: var(--brand-color-secundary);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: var(--line-height-l);
      text-align: center;
      text-decoration-line: underline;
      width: 212px;

      @media (min-width: 900px) {
        width: 361px;    
      }
    }

    h5 {
      color: var(--neutral-color-gray-0);
      font-size: var(--font-size-xs);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 20px;
      width: 286px;

      @media (min-width: 900px) {
        width: 309px;    
      }
    }
`;

export const ArticleShare = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 472px;
  height: 792px;

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    align-items: center;
    column-gap: 56px;
    height: 632px;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 472px;

      @media (min-width: 900px) {
        align-items: flex-start; 
      }
  
     h3 {
       color: var(--neutral-color-gray-24);
       font-size: var(--font-size-l);
       font-style: var(--font-style-normal);
       font-weight: var(--font-weight-500);
       line-height: 32px;
       text-align: center;
       width: 218px;

       @media (min-width: 900px) {
        font-size: var(--font-size-xl);
        text-align: left;
        width: 250px;
      }
     }
   
     p {
       color: var(--neutral-color-gray-24);
       font-size: var(--font-size-s);
       font-style: var(--font-style-normal);
       font-weight: var(--font-weight-normal);
       line-height: var(--line-height-xl);
       text-align: center;
       width: 328px;

       @media (min-width: 900px) {
        text-align: left;
        width: 484px;
      }
   
         a {
           color: var(--brand-color-secundary);
           font-size: var(--font-size-s);
           font-style: var(--font-style-normal);
           font-weight: var(--font-weight-500);
           line-height: 24px;
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
  }
  
    img {
      width: 304px;

      @media (min-width: 900px) {
        width: 584px;
      } 
    }

`;

export const ArticlePost = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 496px;
  justify-content: space-evenly;
  text-align: center; 

  @media (min-width: 900px) {
    height: 322px;
    justify-content: center;
  }

    h3 {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-l);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 32px;
      width: 328px;

      @media (min-width: 900px) {
        width: 985px;
      }
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;
      
      @media (min-width: 900px) {
        margin-top: 16px;
        width: 984px;
      }
    }

    form {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 172px;
      column-gap: 12px;

      @media (min-width: 900px) {
       flex-direction: row;
       height: 48px;
       margin-top: 74px;
      }

      button {
        background-color: var(--brand-color-primary);
        border: var(--border-width-none);
        border-radius: var(--border-radius-nano);
        color: var(--neutral-color-white-100);
        cursor: pointer;
        font-size: var(--font-size-xs);
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-500);
        height: 48px;
        line-height: 20px;
        margin-top: 8px;
        width: 328px;

        @media (min-width: 900px) {
         margin-top: 0;
         width: 96px;
        }
      }

      input {
        border: var(--border-width-hairline) solid var(--neutral-color-gray-88);
        border-radius: var(--border-radius-nano);
        height: 48px;
        width: 328px;
        margin-bottom: 10px;

        @media (min-width: 900px) {
         margin-bottom: 0;
         width: 232px;
        }

        &::placeholder {
          color: var(--neutral-color-gray-24);
          font-size: var(--font-size-xs);
          font-style: var(--font-style-normal);
          font-weight: var(--font-weight-normal);
          line-height: 20px;
          padding-left: 20px;
        }
      }
    }
`;

export const ArticleShareSimple = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 472px;
  height: 792px;

    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
      column-gap: 56px;
      height: 632px;
    }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 472px;

      @media (min-width: 900px) {
        align-items: flex-start; 
      }
  
     h3 {
       color: var(--neutral-color-gray-24);
       font-size: var(--font-size-l);
       font-style: var(--font-style-normal);
       font-weight: var(--font-weight-500);
       line-height: 32px;
       text-align: center;
       width: 218px;

       @media (min-width: 900px) {
        font-size: var(--font-size-xl);
        text-align: left;
        width: 411px;
      }
     }
   
     p {
       color: var(--neutral-color-gray-24);
       font-size: var(--font-size-s);
       font-style: var(--font-style-normal);
       font-weight: var(--font-weight-normal);
       line-height: var(--line-height-xl);
       text-align: center;
       width: 328px;

       @media (min-width: 900px) {
        text-align: left;
        width: 444px;
      }
   
         a {
           color: var(--brand-color-secundary);
           font-size: var(--font-size-s);
           font-style: var(--font-style-normal);
           font-weight: var(--font-weight-500);
           line-height: 24px;
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
  }
  
    img {
      width: 304px;

      @media (min-width: 900px) {
        width: 584px;
      } 
    }

`;

export const ArticleFramework = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 476px;

    @media (min-width: 900px) {
      height: 876px;
    }

    h3 {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-l);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 32px;
      text-align: center;
      width: 243px;

      @media (min-width: 900px) {
          font-size: var(--font-size-xl);
          width: 469px;
      }
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;

      @media (min-width: 900px) {
          width: 784px;
      }
    }

    a {
      color: var(--brand-color-secundary);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 24px;
      text-align: center;
      width: 328px;

      @media (min-width: 900px) {
          width: 394px;
      }
    }

    img {
      height: 0;
      visibility: hidden;
      width: 0;

        @media (min-width: 900px) {
          height: 392px;
          visibility: visible;
          width: 984px;
        }
    }
`;

export const ArticleNewFeature = styled.article`  
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 524px;
  row-gap: 16px;

    @media (min-width: 900px) {
      height: 508px;
      row-gap: 40px;
    }

    img {
      width: 216px;
    }

    h3 {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-l);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 32px;
      margin-top: 8px;
      text-align: center;
      width: 328px;

      @media (min-width: 900px) {
        font-size: var(--font-size-xl);
        width: 522px;
      }
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;

        @media (min-width: 900px) {
          width: 784px;
        }

    }
`;
