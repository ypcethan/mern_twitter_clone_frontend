import React from 'react';
import HomeTweetBox from '../../components/HomeTweetBox/HomeTweetBox';
import './Home.scss';

const Home = () => (
  <div className="home">
    <div className="home__title">
      Home
    </div>
    <HomeTweetBox />
    <hr className="home__divider" />
  </div>
);

export default Home;
