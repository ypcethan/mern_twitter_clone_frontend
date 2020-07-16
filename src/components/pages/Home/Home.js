import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeTweetBox from '../../components/HomeTweetBox/HomeTweetBox';
import TweetList from '../../components/TweetList/TweetList';
import { getReleventTweet } from '../../../redux/tweet/tweetAction';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweet.tweets);
  useEffect(() => {
    dispatch(getReleventTweet());
  }, []);
  return (
    <div className="home">
      <div className="home__title">
        Home
      </div>
      <HomeTweetBox />
      <hr className="home__divider" />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default Home;
