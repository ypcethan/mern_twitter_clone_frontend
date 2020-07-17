import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getTweet, getComments} from "../../../redux/tweet/tweetAction";
import TweetDisplay from "../../components/TweetDisplay/TweetDisplay";
import TweetList from "../../components/TweetList/TweetList";
const Tweet = () => {
    const dispatch = useDispatch();
    const tweet = useSelector(state=>state.tweet.selectedTweet);
    const comments = useSelector(state=>state.tweet.comments);
    const {id} = useParams(); 

    useEffect(()=> {
        dispatch(getTweet(id)); 
        dispatch(getComments(id));
    }, []);
    return (
        <div>
            <div className="title__container">
                <div className="page__title">
                    Tweet
                </div>
            </div>
            {tweet &&
            <>
                <TweetDisplay tweet={tweet} />
                <TweetList tweets={comments} hasButtonSet={false}/>
            </>
            }

        </div>
    );
};

export default Tweet;
