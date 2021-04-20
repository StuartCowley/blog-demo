import React, { useState, useEffect } from 'react';
import { CommentType } from '../types/comment.type';

const Comment = ({ comment }) => {
    const [voteCounter, setVoteCounter] = useState(0);

    const handleClick = event => {
        console.log(event.target);
        setVoteCounter(voteCounter + 1);
    };

    useEffect(() => {
        console.log(voteCounter);
    }, [voteCounter]);

    return (
        <li key={comment.id} data-testid="comment">
            <p>
                <strong>{comment.name}: </strong>
                {comment.body}
            </p>
            {voteCounter}
            <button type="button" onClick={event => handleClick(event)}>
                + upvote
            </button>
            <button type="button" onClick={event => handleClick(event)}>
                - downvote
            </button>
        </li>
    );
};

Comment.propTypes = CommentType;

export default Comment;
