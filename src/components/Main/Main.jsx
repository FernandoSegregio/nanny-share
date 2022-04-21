import React from 'react';
import { ArticleProfile, MainContainer, ShowApp } from './style';
import sarahImage from '../../assets/images/main_images/sarah-profile-image.svg';

export default function Main() {
  return (
    <MainContainer>
      <ShowApp>
        <ArticleProfile>
          <img src={sarahImage} alt="profile sarah" />
          <a href="profile">Sarah’s day care available now in North Sydney</a>
          <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
        </ArticleProfile>
      </ShowApp>
    </MainContainer>
  );
}
