import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../types/comment.type';

const CommentList = ({ comments }) => {
    const [voteCounter, setVoteCounter] = useState(0);
    const handleClick = event => {
        console.log(event.target);
        setVoteCounter(voteCounter + 1);
    };

    useEffect(() => {
        console.log(voteCounter);
    }, [voteCounter]);

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id} data-testid="comment">
                    <p>
                        <strong>{comment.name}: </strong>
                        {comment.body}
                    </p>
                    <button type="button" onClick={event => handleClick(event)}>
                        + upvote
                    </button>
                    <button type="button" onClick={event => handleClick(event)}>
                        - downvote
                    </button>
                </li>
            ))}
        </ul>
    );
};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(CommentType).isRequired,
};

export default CommentList;
