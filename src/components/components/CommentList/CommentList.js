import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./CommentList.scss";

const CommentListItem = ({tweet})=> ( 
   
    <div  className="comment__item__container">
        <div className="comment__item__avatar__container
        ">
            <img src={tweet.createdBy.avatarUrl} alt="" />
            <div className='vertical-line'></div>
        </div>
        <div className="comment__item__content__container">
            <div>
                <div className="comment__item__header">
                    <Link to={`/profile/${tweet.createdBy.userName}`} className="comment__item__user">
                        {tweet.createdBy.name}
                    </Link>
                    <span className="comment__item__username">
                @{tweet.createdBy.userName}
                        <span className="dot">&#183;</span>
                        {moment(tweet.updatedAt, "YYYYMMDD").fromNow() }
                    </span>
                </div>

       
                <Link to={`/${tweet.createdBy.userName}/status/${tweet._id}`} 
                    className="comment__item__content">{tweet.content}</Link>
            </div>
        </div>
    </div>  
);
const CommentList = ({tweets}) => {
    return (
        <>
            {tweets.map(tweet=> (
                <div  className="comment__item__wrapper" key={tweet._id}>
                    <CommentListItem tweet={tweet} />
                    {tweet.comments.map(comment => (
                        <CommentListItem tweet={comment} key={comment._id} />
                    ))}
             
                </div>
            ))}
        </>
    );
};

export default CommentList;
