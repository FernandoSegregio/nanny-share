import React from 'react';
import {
  ArticleProfile, ArticleShare, MainContainer, ShowApp,
} from './style';
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
        <ArticleShare>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t
            cutting your costs in half be, well, fantastic?! If only it
            was easy to connect with other parents to share your costs?
            Well now it is, with Hapu.
            <a href="tribe">Hapu means tribe</a>
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together
            has the power to create new affordable solutions in
            childcare that work for you and your community.
          </p>
        </ArticleShare>
      </ShowApp>
    </MainContainer>
  );
}
