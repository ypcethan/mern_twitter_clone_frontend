import React from 'react';
import TweetItem from '../TweetItem/TweetItem';

const TweetList = ({ tweets }) => (
  <div>
    {
        tweets.map((tweet) => <TweetItem key={tweet._id} />)
      }
  </div>
);

export default TweetList;
