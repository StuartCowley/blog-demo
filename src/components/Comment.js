import React, { useState } from 'react';
import { CommentType } from '../types/comment.type';

const Comment = ({ comment }) => {
    const [voteCounter, setVoteCounter] = useState(0);

    const handleClick = event => {
        const shouldIncrease = event.target.value === 'increase';
        const newCounterValue = shouldIncrease
            ? voteCounter + 1
            : voteCounter - 1;
        setVoteCounter(newCounterValue);
    };

    return (
        <li key={comment.id} data-testid="comment">
            <p>
                <strong>{comment.name}: </strong>
                {comment.body}
            </p>
            {voteCounter}
            <button
                type="button"
                value="increase"
                onClick={event => handleClick(event)}
            >
                + upvote
            </button>
            <button
                type="button"
                value="decrease"
                onClick={event => handleClick(event)}
            >
                - downvote
            </button>
        </li>
    );
};

Comment.propTypes = CommentType;

export default Comment;
