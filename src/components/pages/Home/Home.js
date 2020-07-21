import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetInput from "../../components/TweetInput/TweetInput";
import TweetList from "../../components/TweetList/TweetList";
import { getReleventTweet,createTweet } from "../../../redux/tweet/tweetAction";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const tweets = useSelector((state) => state.tweet.tweets);
  useEffect(() => {
    dispatch(getReleventTweet());
  }, []);
  const submitTweet = (tweetData) => {
    dispatch(createTweet(tweetData));
  };
  return (
    <div className="home">
      <div className="title__container">
        <div className="page__title">
              Home
        </div>
      </div>
      <TweetInput user={user} onSubmit={submitTweet} submitLabel="Tweet" 
        placeHolder="What's happening?"/>
      <hr className="home__divider" />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default Home;
