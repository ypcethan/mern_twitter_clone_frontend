import React from 'react';
import HomeTweetBox from '../../components/HomeTweetBox/HomeTweetBox';
import TweetList from '../../components/TweetList/TweetList';
import './Home.scss';

const Home = () => (
  <div className="home">
    <div className="home__title">
      Home
    </div>
    <HomeTweetBox />
    <hr className="home__divider" />
    <TweetList />
  </div>
);

export default Home;
