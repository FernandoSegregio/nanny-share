import React from 'react';
import { ArticleProfile, MainContainer, ShowApp } from './style';
import sarahImage from '../../assets/images/main_images/sarah-profile-image.svg';

export default function Main() {
  return (
    <MainContainer>
      <ShowApp>
        <ArticleProfile>
          <img src={sarahImage} alt="profile sarah" />
        </ArticleProfile>
      </ShowApp>
    </MainContainer>
  );
}
