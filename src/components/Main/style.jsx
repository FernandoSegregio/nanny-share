import styled from 'styled-components';

export const MainContainer = styled.main` 
`;

export const ShowApp = styled.section`
  align-items: center;
  background-color: var(--neutral-color-white-200);
  display: flex;
  flex-direction: column;

  hr {
    width: 328px
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

    img {      
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
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
    }

    h5 {
      color: var(--neutral-color-gray-0);
      font-size: var(--font-size-xs);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 20px;
      width: 286px;
    }
`;

export const ArticleShare = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 792px;

    img {
      width: 304px;
    }

    h3 {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-l);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 32px;
      text-align: center;
      width: 218px;
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;

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
`;

export const ArticlePost = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 496px;
  justify-content: space-evenly;
  text-align: center; 

    h3 {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-l);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 32px;
      width: 328px;
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;
    }

    form {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 172px;

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
      }

      input {
        border: var(--border-width-hairline) solid var(--neutral-color-gray-88);
        border-radius: var(--border-radius-nano);
        height: 48px;
        width: 328px;
        margin-bottom: 10px;

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

export const ArticleFramework = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 476px;

    h3 {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-l);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 32px;
      text-align: center;
      width: 243px;
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;
    }

    a {
      color: var(--brand-color-secundary);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-500);
      line-height: 24px;
      text-align: center;
      width: 328px;
    }
`;

export const ArticleNewFeature = styled.article`  
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 524px;
  row-gap: 16px;

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
    }

    p {
      color: var(--neutral-color-gray-24);
      font-size: var(--font-size-s);
      font-style: var(--font-style-normal);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-xl);
      text-align: center;
      width: 328px;

    }
`;
