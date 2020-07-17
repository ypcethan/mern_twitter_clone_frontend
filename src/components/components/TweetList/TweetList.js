import React from "react";
import TweetItem from "../TweetItem/TweetItem";

const TweetList = ({ tweets,hasButtonSet=true }) => (
    <div>
        {
            tweets.map((tweet) => <TweetItem key={tweet._id} tweet={tweet} 
                hasButtonSet={hasButtonSet}/>)
        }
    </div>
);

export default TweetList;
