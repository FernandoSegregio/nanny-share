import React from 'react';
import {
  ArticleFramework,
  ArticleNewFeature,
  ArticlePost,
  ArticleProfile,
  ArticleShare,
  ArticleShareSimple,
  MainContainer,
  ShowApp,
} from './style';
import sarahImage from '../../assets/images/main_images/sarah-profile-image.svg';
import shareScreen from '../../assets/images/main_images/share-screen.svg';
import sharePayment from '../../assets/images/main_images/share-payment.svg';
import newFeature from '../../assets/images/main_images/new-feature.svg';
import FormPost from '../Form/FormPost';

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
          <img src={shareScreen} alt="share screen" />
          <div>
            <h3>Share your home, nanny and costs</h3>
            <p>
              You have a fantastic home, a fantastic nanny and wouldn’t
              cutting your costs in half be, well, fantastic?! If only it
              was easy to connect with other parents to share your costs?
              Well now it is, with Hapu.
              {' '}
              <a href="tribe">Hapu means tribe</a>
              {' '}
              and it’s our foundational 3 tribal principles that empowers you to
              create and manage your own tribe. A tribe that together
              has the power to create new affordable solutions in
              childcare that work for you and your community.
            </p>
            <a href="started">Ready to get started?</a>
          </div>
        </ArticleShare>
        <hr />
        <ArticlePost>
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>
            Leave us your name and email and we’ll update you as soon
            as a share becomes available in your area!
          </p>
          <FormPost />
        </ArticlePost>
        <hr />
        <ArticleShareSimple>
          <img src={sharePayment} alt="share payment example" />
          <div>
            <h3>Shared payments made simple</h3>
            <p>
              Sometimes it’s hard enough just sharing a restaurant bill.
              Try sharing that bill week in, week out and you might
              encounter more than a few snares. But not with Hapu.
              Simply set your rates and our automated payment system
              takes care of the rest. You need never talk money
              or who owes what.
            </p>
            <a href="payment">Read how Bridget’s share (without Hapu) ended over $15</a>
          </div>
        </ArticleShareSimple>
        <hr />
        <ArticleFramework>
          <h3>A framework built for the long term</h3>
          <p>
            Childcare is for the long term. And you need a framework
            you can count on that gives your share long term viability
            and success. That’s why we’ve defined Hapu around our
            three tribal principles; clearly defined process,
            transparency over money and equality of participation.
          </p>
          <a href="framework">Read how Hapu’s tribal background defines our app</a>
        </ArticleFramework>
        <hr />
        <ArticleNewFeature>
          <img src={newFeature} alt="new feature" />
          <h3>Coming soon: Nanny Share Daily Diary!</h3>
          <p>
            With the Hapu daily diary your nanny will be able
            to update you and your sharers with photos and commentary
            of the day. You and sharers will receive notifications and
            you’ll be able to login to view the daily adventures fo
            your little ones. We can’t wait!
          </p>
        </ArticleNewFeature>
      </ShowApp>
    </MainContainer>
  );
}
