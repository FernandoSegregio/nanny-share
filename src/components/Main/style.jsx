import styled from 'styled-components';

export const MainContainer = styled.main`
  
`;

export const ShowApp = styled.section`

`;
export const ArticleProfile = styled.article`
  align-items: center;
  border: var(--border-width-hairline) solid var(--neutral-color-gray-88);
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  height: 216px;
  width: 100%;

    img {
      border: 4px solid #FFFFFF;
      border-radius: var(--border-radius-circle);
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
