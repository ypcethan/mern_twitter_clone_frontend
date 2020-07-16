import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getTweet} from "../../../redux/tweet/tweetAction";

import TweetDisplay from "../../components/TweetDisplay/TweetDisplay";
const Tweet = () => {
    const dispatch = useDispatch();
    const tweet = useSelector(state=>state.tweet.selectedTweet);
    const {id} = useParams(); 

    useEffect(()=> {
        dispatch(getTweet(id)); 
    }, []);
    return (
        <div>
            <div className="title__container">
                <div className="page__title">
                    Tweet
                </div>
            </div>
            {tweet && <TweetDisplay tweet={tweet} />}

        </div>
    );
};

export default Tweet;
